import jsonpFetch from './jsonpFetch';

const dataUrl =
  'https://data.ontario.ca/api/3/action/datastore_search?resource_id=775ca815-5028-4e9b-9dd4-6975ff1be021&limit=10&sort=_id desc';

const ensureNumber = (value) => {
    if (typeof value === 'number') {
        return value;
    }
    return Number((value || '0').replace(/,/g, ''));
};

const beautifyAge = (age) => {
  switch (age) {
    case "12-17yrs":
      return "12-17";
    case "18-29yrs":
      return "18-29";
    case "30-39yrs":
      return "30s";
    case "40-49yrs":
      return "40s";
    case "50-59yrs":
      return "50s";
    case "60-69yrs":
      return "60s"
    case "70-79yrs":
      return "70s";
    case "Adults_18plus":
      return "18+";
    default: 
      return age;
  }
};

const getVaccineAgeData = () =>
  new Promise((resolve) => {
    jsonpFetch(dataUrl, ({ result }) => {
      const records = result.records.filter(a => a.Agegroup != "Undisclosed_or_missing");
      records.sort((a, b) => a._id - b._id);

      records.map((record) => {
        const {
          Agegroup,
          Percent_at_least_one_dose,
          Percent_fully_vaccinated
        } = record;
        
        record.Agegroup = beautifyAge(Agegroup)
        
        record.Percent_at_least_one_dose = ensureNumber(Percent_at_least_one_dose) * 100;
        record.Percent_fully_vaccinated = ensureNumber(Percent_fully_vaccinated) * 100;

        record.percent_partially_vaccinated = record.Percent_at_least_one_dose - record.Percent_fully_vaccinated
        record.percent_not_vaccinated = 100 - (record.Percent_at_least_one_dose)

        return record;
      });
      resolve(records);
    });
  });

export default getVaccineAgeData;
