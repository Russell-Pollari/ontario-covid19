import jsonpFetch from './jsonpFetch';
import ensureNumber from '../ensureNumber';

const dataUrl = 'https://data.ontario.ca/api/3/action/datastore_search?resource_id=eed63cf2-83dd-4598-b337-b288c0a89a16&limit=1000000';

const getCasesByVaccineStatus = () =>
	new Promise((resolve) => {
		jsonpFetch(dataUrl, ({ result }) => {
			const rawRecords = result.records;
			rawRecords.sort((a, b) => new Date(a.Date) - new Date(b.Date));

			const records = rawRecords.map((record) => {
				const {
					Date: report_date,
					covid19_cases_unvac,
					covid19_cases_partial_vac,
					covid19_cases_full_vac,
					covid19_cases_vac_unknown
				} = record;
				record.date_string = new Date(report_date).toLocaleString('en-us', {
					month: 'short',
					day: 'numeric',
				});
				record.cases_unvac = ensureNumber(covid19_cases_unvac);
				record.cases_partial_vac = ensureNumber(covid19_cases_partial_vac);
				record.cases_full_vac = ensureNumber(covid19_cases_full_vac);
				record.cases_vac_unknown = ensureNumber(covid19_cases_vac_unknown);

				return record;
			});
			resolve(records);
		});
	});

export default getCasesByVaccineStatus;
