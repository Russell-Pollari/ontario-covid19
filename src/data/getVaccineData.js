import jsonpFetch from './jsonpFetch';

const dataUrl =
  'https://data.ontario.ca/api/3/action/datastore_search?resource_id=8a89caa9-511c-4568-af89-7f2174b4378c&limit=100000';

const ensureNumber = (value) => {
    if (typeof value === 'number') {
        return value;
    }
    return Number((value || '0').replace(/,/g, ''));
};

const getVaccineData = () =>
  new Promise((resolve) => {
    jsonpFetch(dataUrl, ({ result }) => {
      const rawRecords = result.records;
      rawRecords.sort((a, b) => new Date(a.report_date) - new Date(b.report_date));
      let vaccines_last7days = [0, 0, 0, 0, 0, 0, 0];

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

      let previous_total_second_doses_administered = 0;
      let previous_total_one_shot_doses_administered = 0;

      // Back to your regularly scheduled code
      records.map((record) => {
        const {
          report_date,
          total_doses_administered,
          previous_day_doses_administered,
          total_doses_in_fully_vaccinated_individuals,
          total_individuals_fully_vaccinated,
        } = record;
        record.date_string = new Date(report_date).toLocaleString('en-us', {
          month: 'short',
          day: 'numeric',
        });
        record.total_doses_administered = ensureNumber(total_doses_administered);
        record.previous_day_doses_administered = ensureNumber(previous_day_doses_administered);
        record.total_individuals_fully_vaccinated = ensureNumber(total_individuals_fully_vaccinated);
        
        const total_doses_in_fully_vax = ensureNumber(total_doses_in_fully_vaccinated_individuals);
        
        // Calculate one-shot doses given (JnJ vaccine)
        let total_one_shot_doses_administered = (record.total_individuals_fully_vaccinated - (total_doses_in_fully_vax / 2)) * 2;
        total_one_shot_doses_administered = total_one_shot_doses_administered > 1 ? total_one_shot_doses_administered : 0;
        
        let daily_one_shot_doses_administered = total_one_shot_doses_administered - previous_total_one_shot_doses_administered;
        daily_one_shot_doses_administered = daily_one_shot_doses_administered > 0 ? daily_one_shot_doses_administered : 0;
        previous_total_one_shot_doses_administered = total_one_shot_doses_administered;

        // Calculate second doses given
        let total_second_doses_administered = Math.floor((total_doses_in_fully_vax - total_one_shot_doses_administered) / 2);
        const daily_second_doses_administered = total_second_doses_administered - previous_total_second_doses_administered;
        previous_total_second_doses_administered = total_second_doses_administered;

        // Calculate first doses given 
        const daily_first_doses_administered = record.previous_day_doses_administered - (daily_second_doses_administered + daily_one_shot_doses_administered); 

        record.previous_day_one_shot_doses_administered = daily_one_shot_doses_administered;
        record.previous_day_second_doses_administered = daily_second_doses_administered;
        record.previous_day_first_doses_administered =  daily_first_doses_administered;

        vaccines_last7days.shift();
        vaccines_last7days.push(record.previous_day_doses_administered);
        const total_vaccines_last7days = vaccines_last7days.reduce((total, cases) => cases + total, 0);
        record.new_vaccines_rolling_average = Math.round(total_vaccines_last7days / 7);

        return record;
      });
      resolve(records);
    });
  });

export default getVaccineData;
