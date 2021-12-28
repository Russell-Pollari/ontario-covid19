import jsonpFetch from './jsonpFetch';

import ensureNumber from '../ensureNumber';

const dataUrl = 'https://data.ontario.ca/api/3/action/datastore_search?resource_id=274b819c-5d69-4539-a4db-f2950794138c&limit=1000000';

const getHospitalizationsByVaccineStatus = () =>
	new Promise((resolve) => {
		jsonpFetch(dataUrl, ({ result }) => {
			const rawRecords = result.records;
			rawRecords.sort((a, b) => new Date(a.date) - new Date(b.date));

			const records = rawRecords.map((record) => {
				const {
					date: report_date,
					icu_unvac,
					icu_partial_vac,
					icu_full_vac,
					hospitalnonicu_partial_vac,
					hospitalnonicu_full_vac,
					hospitalnonicu_unvac,
				} = record;

				const date_string = new Date(report_date).toLocaleString('en-us', {
					month: 'short',
					day: 'numeric',
				});

				return {
					date_string,
					icu_unvac,
					icu_full_vac,
					icu_partial_vac,
					hospital_partial_vac: ensureNumber(icu_partial_vac) + ensureNumber(hospitalnonicu_partial_vac),
					hospital_full_vac: ensureNumber(icu_full_vac) + ensureNumber(hospitalnonicu_full_vac),
					hospital_unvac: ensureNumber(icu_unvac) + ensureNumber(hospitalnonicu_unvac),
				};
			});
			resolve(records);
		});
	});

export default getHospitalizationsByVaccineStatus;
