import jsonpFetch from './jsonpFetch';

const dataUrl = 'https://data.ontario.ca/api/3/action/datastore_search?resource_id=1ffdf824-2712-4f64-b7fc-f8b2509f9204&limit=10000';


const getReData = () => {
	return new Promise((resolve) => {
		jsonpFetch(dataUrl, ({ result }) => {
			const rawRecords = result.records;
			rawRecords.sort((a, b) => new Date(a.date_start) - new Date(b.date_start));

			const records = rawRecords.map(record => {
				record.date_string = new Date(record.date_start).toLocaleString('en-us', {
					month: 'short',
					day: 'numeric',
				});
				record.error_bars = [record.Re - record.lower_CI, record.upper_CI - record.Re];
				return record;
			});
			resolve(records);
		});
	});
};

export default getReData;
