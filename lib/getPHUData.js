import jsonpFetch from './jsonpFetch';

const dataUrl = 'https://data.ontario.ca/en/api/3/action/datastore_search?resource_id=d1bfe1ad-6575-4352-8302-09ca81f7ddfc&limit=10000';

const normalize_phu_name = (name) => name.replace(/&/g, '');

const getPHUdata = (phuName = '')=> {
	const url = dataUrl + `&q=${normalize_phu_name(phuName)}`;

	return new Promise((resolve) => {
		jsonpFetch(url, ({ result }) => {
			const rawRecords = result.records;
			rawRecords.sort((a, b) => new Date(a.FILE_DATE) - new Date(b.FILE_DATE));

			const records = rawRecords.map(record => {
				record.total_cases = record.ACTIVE_CASES + record.DEATHS + record.RESOLVED_CASES;
				record.date_string = new Date(record.FILE_DATE).toLocaleString('en-us', {
					month: 'short',
					day: 'numeric',
				});
				return record;
			});

			resolve(records);
		});
	});
};

export default getPHUdata;
