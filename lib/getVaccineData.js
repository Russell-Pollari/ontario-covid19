import jsonpFetch from './jsonpFetch';

const dataUrl =
  'https://data.ontario.ca/api/3/action/datastore_search?resource_id=8a89caa9-511c-4568-af89-7f2174b4378c&limit=100000';

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

      // Back to your regularly scheduled code
      records.map((record) => {
        const { report_date, total_doses_administered, previous_day_doses_administered } = record;
        record.date_string = new Date(report_date).toLocaleString('en-us', {
          month: 'short',
          day: 'numeric',
        });
        record.total_doses_administered = Number(total_doses_administered.replace(',', ''));
        record.previous_day_doses_administered = Number(previous_day_doses_administered.replace(',', ''));

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
