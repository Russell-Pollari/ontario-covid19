import jsonpFetch from './jsonpFetch';

const dataUrl = 'https://data.ontario.ca/api/3/action/datastore_search?resource_id=8a89caa9-511c-4568-af89-7f2174b4378c&limit=100000';

const getVaccineData = () => (
	new Promise((resolve) => {
		jsonpFetch(dataUrl, ({ result }) => {
			const records = result.records;
			records.sort((a,b) => new Date(a.report_date) - new Date(b.report_date));
			records.map(record => {
				const { report_date, total_doses_administered } = record;
				record.date_string = new Date(report_date).toLocaleString('en-us', {
					month: 'short',
					day: 'numeric',
				});
				record.total_doses_administered = Number(total_doses_administered.replace(',',''));
				return record;
			})
			resolve(records);
		});
	})
);

export default getVaccineData;
