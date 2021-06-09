import jsonpFetch from './jsonpFetch';
import { processOntarioRecords } from './utils';

const dataUrl = 'https://data.ontario.ca/api/3/action/datastore_search?resource_id=ed270bb8-340b-41f9-a7c6-e8ef587e6d11&limit=1000';

const getOntarioStatuses = () => {
	return new Promise((resolve) => {
		jsonpFetch(dataUrl, ({ result }) => {
			resolve(processOntarioRecords(result.records));
		});
	});
};

export default getOntarioStatuses;
