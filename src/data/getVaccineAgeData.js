import jsonpFetch from './jsonpFetch';
import ensureNumber from '../ensureNumber';

const dataUrl =
  'https://data.ontario.ca/api/3/action/datastore_search?resource_id=775ca815-5028-4e9b-9dd4-6975ff1be021&limit=13&sort=_id desc';

const beautifyAge = (age) => {
  switch (age) {
    case '12-17yrs':
      return '12-17';
    case '18-29yrs':
      return '18-29';
    case '30-39yrs':
      return '30s';
    case '40-49yrs':
      return '40s';
    case '50-59yrs':
      return '50s';
    case '60-69yrs':
      return '60s';
    case '70-79yrs':
      return '70s';
    case 'Adults_18plus':
      return '18+';
    case 'Ontario_12plus':
      return '12+';
		case 'Ontario_5plus':
			return '5+';
		case '05-11yrs':
			return '5-11yrs';
    default:
      return age;
  }
};

const getVaccineAgeData = () =>
  new Promise((resolve) => {
    jsonpFetch(dataUrl, ({ result }) => {
      const records = result.records.filter(a => a.Agegroup != 'Undisclosed_or_missing');
      result.records.sort((a, b) => a._id - b._id);

      result.records.map((record) => {
        const {
          Agegroup,
          Percent_at_least_one_dose,
          Percent_fully_vaccinated
        } = record;

        record.Agegroup = beautifyAge(Agegroup);

        record.Percent_at_least_one_dose = ensureNumber(Percent_at_least_one_dose) * 100;
        record.Percent_fully_vaccinated = ensureNumber(Percent_fully_vaccinated) * 100;

        record.percent_partially_vaccinated = record.Percent_at_least_one_dose - record.Percent_fully_vaccinated;
        record.percent_not_vaccinated = 100 - (record.Percent_at_least_one_dose);

        return record;
      });
			resolve(records);
    });
  });

export default getVaccineAgeData;
