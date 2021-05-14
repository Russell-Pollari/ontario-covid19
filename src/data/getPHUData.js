import jsonpFetch from './jsonpFetch';
import { processPHURecords } from './utils';

const dataUrl = 'https://data.ontario.ca/en/api/3/action/datastore_search?resource_id=d1bfe1ad-6575-4352-8302-09ca81f7ddfc&limit=10000';

const normalize_phu_name = (name) => name.replace(/&/g, '');

const getPHUdata = (phuName = '')=> {
	const url = dataUrl + `&q=${normalize_phu_name(phuName)}`;

	return new Promise((resolve) => {
		jsonpFetch(url, ({ result }) => {
			resolve(processPHURecords(result.records.filter(
        (record, index, array) => (
				  index === array.findIndex(other => record.FILE_DATE === other.FILE_DATE)
			  )
      )));
		});
	});
};

export default getPHUdata;
