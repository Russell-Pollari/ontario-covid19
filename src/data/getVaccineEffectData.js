import jsonpFetch from './jsonpFetch';

const hospitalsVaxResourceID = "274b819c-5d69-4539-a4db-f2950794138c";
const casesVaxResourceID = "eed63cf2-83dd-4598-b337-b288c0a89a16";
const vaxRatesResourceID = "8a89caa9-511c-4568-af89-7f2174b4378c";

// https://www.ontario.ca/page/ontario-demographic-quarterly-highlights-first-quarter
const ontarioPopulation = 14789778;

// Days for vaccine dose to take effect.
const vaxEffectDelay = 14;


const dataURL = (resourceID) => {
  return `https://data.ontario.ca/api/3/action/datastore_search?resource_id=${resourceID}&limit=100000`
};

const ensureNumber = (value) => {
    if (typeof value === 'number') {
        return value;
    }
    return Number((value || '0').replace(/,/g, ''));
};

const dateFormatter = (date) => {
  if(typeof date === 'string') {
    return new Date(date).toLocaleDateString("en-US")
  } else if (date instanceof Date){
    return date.toLocaleDateString("en-US")
  } else {
    return ""
  }
};

const getVaxRateData = () => {
  return new Promise((resolve) => {
    const url = dataURL(vaxRatesResourceID);
    jsonpFetch(url, ({ result }) => {
      const rawRecords = result.records;
      rawRecords.sort((a, b) => new Date(a.report_date) - new Date(b.report_date));

      // Data comes in with gaps for some dates, so fill in the gaps by replicating the previous date's data
      const records = [];
      for (let currentRecordIndex = 1; currentRecordIndex < rawRecords.length; currentRecordIndex++) {
        // Backfill up to, but not including, the current record
        let currentRecord = rawRecords[currentRecordIndex];
        const curRecordTime = new Date(currentRecord.report_date).getTime();

        // Always add the previous record in the original data set
        let prevRecord = rawRecords[currentRecordIndex - 1];
        records.push(prevRecord);

        // Continue adding copies of the previous record, until it matches the current record
        let dateToFill = new Date(prevRecord.report_date);
        dateToFill.setDate(dateToFill.getDate() + 1);

        while (dateToFill.getTime() < curRecordTime) {
          // Create a new record with a date to fill
          const backfillRecord = Object.assign({}, prevRecord, {
            report_date: dateToFill.toISOString().replace(/\.\d+Z/, ''),
          });
          records.push(backfillRecord);

          // Update the date to fill
          dateToFill.setDate(dateToFill.getDate() + 1);
        }
      }

      // Add the last record, which wasn't added by the above loop
      records.push(rawRecords[rawRecords.length - 1]);
      
      // Back to your regularly scheduled code
      let newRecords = [];
      records.forEach(record => {
        const {
          report_date,
          total_individuals_fully_vaccinated,
          total_individuals_at_least_one
        } = record;

        const date = new Date(report_date);

        // Adjust date to reflect the 14 day delay the vaccine need to take effect
        date.setDate(date.getDate() + vaxEffectDelay);

        let modifiedRecord = {
          date: dateFormatter(date),
          full_vax_individuals: ensureNumber(total_individuals_fully_vaccinated),
          partial_vax_individuals: ensureNumber(total_individuals_at_least_one) - ensureNumber(total_individuals_fully_vaccinated),
          unvax_individuals: ontarioPopulation - ensureNumber(total_individuals_at_least_one)
        };

        newRecords.push(modifiedRecord);
      });

      resolve(newRecords);      
    });
  });
};

const getCasesData = () => {
  return new Promise((resolve) => {
    const url = dataURL(casesVaxResourceID);
    jsonpFetch(url, ({ result }) => {
      let newRecords = [];
      result.records.forEach(record => {
        const {
          Date,
          covid19_cases_unvac,
          covid19_cases_partial_vac,
          covid19_cases_full_vac
        } = record;

        // Clean up record and unify date format
        let modifiedRecord = {
          date: dateFormatter(Date),
          cases_unvax: ensureNumber(covid19_cases_unvac),
          cases_partial_vax: ensureNumber(covid19_cases_partial_vac),
          cases_full_vax: ensureNumber(covid19_cases_full_vac)
        };

        newRecords.push(modifiedRecord);
      });

      resolve(newRecords); 
    });
  });
};

const getHospitalData = () => {
  return new Promise((resolve) => {
    const url = dataURL(hospitalsVaxResourceID);
    jsonpFetch(url, ({ result }) => {
      let newRecords = [];
      result.records.forEach(record => {
        const {
          date,
          icu_unvac,
          icu_partial_vac,
          icu_full_vac,
          hospitalnonicu_unvac,
          hospitalnonicu_partial_vac,
          hospitalnonicu_full_vac
        } = record;

        // Clean up record, unify date format, and modify hospital numbers to include ICU patients
        let modifiedRecord = {
          date: dateFormatter(date),
          icu_unvax: ensureNumber(icu_unvac),
          icu_partial_vax: ensureNumber(icu_partial_vac),
          icu_full_vax: ensureNumber(icu_full_vac),
          hosp_unvax: ensureNumber(hospitalnonicu_unvac) + ensureNumber(icu_unvac),
          hosp_partial_vax: ensureNumber(hospitalnonicu_partial_vac) + ensureNumber(icu_partial_vac),
          hosp_full_vax: ensureNumber(hospitalnonicu_full_vac) + ensureNumber(icu_full_vac)
        };

        newRecords.push(modifiedRecord);
      });

      resolve(newRecords); 
    });
  });
};

const getVaccineEffectData = () => {
  return new Promise(async (resolve) => {
    let vaxRates = [];
    let hospitalData = [];
    let casesData = [];

    // Fetch all 3 data sets from the different sources 
    await getVaxRateData().then(result => vaxRates = result);
    await getHospitalData().then(result => hospitalData = result);
		await getCasesData().then(result => casesData = result);
    
    let finalData = [];

    // Do some calculations on the data + combine them all into one array
    casesData.forEach((casesItem) => {
      const currentDate = casesItem.date;
      const hospitalItem = hospitalData.find(item => item.date == currentDate);
      const vaxRateItem = vaxRates.find(item => item.date == currentDate);
      const million = 1000000;

      const cases_unvax_per_mil = (casesItem.cases_unvax/vaxRateItem.unvax_individuals) * million;
      const cases_partial_vax_per_mil = (casesItem.cases_partial_vax/vaxRateItem.partial_vax_individuals) * million;
      const cases_full_vax_per_mil = (casesItem.cases_full_vax/vaxRateItem.full_vax_individuals) * million;
      const cases_partial_effect = (1-(cases_partial_vax_per_mil/cases_unvax_per_mil)) * 100;
      const cases_full_effect = (1-(cases_full_vax_per_mil/cases_unvax_per_mil)) * 100;

      let hosp_unvax_per_mil, hosp_partial_vax_per_mil, hosp_full_vax_per_mil, hosp_partial_effect, hosp_full_effect;
      let icu_unvax_per_mil, icu_partial_vax_per_mil, icu_full_vax_per_mil, icu_partial_effect, icu_full_effect;

      // Hospital and ICU data is not reported on weekends
      if (hospitalItem != null) {
        hosp_unvax_per_mil = (hospitalItem.hosp_unvax/vaxRateItem.unvax_individuals) * million;
        hosp_partial_vax_per_mil = (hospitalItem.hosp_partial_vax/vaxRateItem.partial_vax_individuals) * million;
        hosp_full_vax_per_mil = (hospitalItem.hosp_full_vax/vaxRateItem.full_vax_individuals) * million;
        hosp_partial_effect = (1-(hosp_partial_vax_per_mil/hosp_unvax_per_mil)) * 100;
        hosp_full_effect = (1-(hosp_full_vax_per_mil/hosp_unvax_per_mil)) * 100;

        icu_unvax_per_mil = (hospitalItem.icu_unvax/vaxRateItem.unvax_individuals) * million;
        icu_partial_vax_per_mil = (hospitalItem.icu_partial_vax/vaxRateItem.partial_vax_individuals) * million;
        icu_full_vax_per_mil = (hospitalItem.icu_full_vax/vaxRateItem.full_vax_individuals) * million;
        icu_partial_effect = (1-(icu_partial_vax_per_mil/icu_unvax_per_mil)) * 100;
        icu_full_effect = (1-(icu_full_vax_per_mil/icu_unvax_per_mil)) * 100;
      }

      const shortDate = new Date(currentDate).toLocaleString('en-us', {
        month: 'short',
        day: 'numeric',
      });

      let finalItem = {
        date: shortDate,
        cases_unvax_per_mil: cases_unvax_per_mil,
        cases_partial_vax_per_mil: cases_partial_vax_per_mil,
        cases_full_vax_per_mil: cases_full_vax_per_mil,
        hosp_unvax_per_mil: hosp_unvax_per_mil,
        hosp_partial_vax_per_mil: hosp_partial_vax_per_mil,
        hosp_full_vax_per_mil: hosp_full_vax_per_mil,
        icu_unvax_per_mil: icu_unvax_per_mil,
        icu_partial_vax_per_mil: icu_partial_vax_per_mil,
        icu_full_vax_per_mil: icu_full_vax_per_mil,
        cases_partial_effect: cases_partial_effect,
        cases_full_effect: cases_full_effect,
        hosp_partial_effect: hosp_partial_effect,
        hosp_full_effect: hosp_full_effect,
        icu_partial_effect: icu_partial_effect,
        icu_full_effect: icu_full_effect,
      };

      finalData.push(finalItem);
    });

    // Next, calculate the average effectiveness over the last 7 days.

    let icu_partial_effect_total = 0;
    let icu_full_effect_total = 0;
    let hosp_partial_effect_total = 0;
    let hosp_full_effect_total = 0;
    let cases_partial_effect_total = 0;
    let cases_full_effect_total = 0;
    
    // Get the last 7 days with non-null hospital data 
    const last_7_days_hosp = finalData.filter(item => item.hosp_unvax_per_mil != null).slice(-7);
    const last_7_days_cases = finalData.slice(-7);

    last_7_days_cases.forEach((item) => {
      cases_partial_effect_total += item.cases_partial_effect
      cases_full_effect_total += item.cases_full_effect
    })

    last_7_days_hosp.forEach((item) => {
      icu_partial_effect_total += item.icu_partial_effect
      icu_full_effect_total += item.icu_full_effect
      hosp_partial_effect_total += item.hosp_partial_effect
      hosp_full_effect_total += item.hosp_full_effect
    })

    const icu_partial_effect_average = Math.round(icu_partial_effect_total / 7);
    const icu_full_effect_average = Math.round(icu_full_effect_total / 7);
    const hosp_partial_effect_average = Math.round(hosp_partial_effect_total / 7);
    const hosp_full_effect_average = Math.round(hosp_full_effect_total / 7);
    const cases_partial_effect_average = Math.round(cases_partial_effect_total / 7);
    const cases_full_effect_average = Math.round(cases_full_effect_total / 7);

    let avg_effect_data = [
      {
        type: "ICU", 
        partial: icu_partial_effect_average,
        full: icu_full_effect_average
      },
      {
        type: "Hospitalization", 
        partial: hosp_partial_effect_average,
        full: hosp_full_effect_average
      },
      {
        type: "Cases", 
        partial: cases_partial_effect_average,
        full: cases_full_effect_average
      },
    ]
 
    resolve({all: finalData, avg: avg_effect_data})
  });
};

export default getVaccineEffectData;
