import jsonpFetch from './jsonpFetch';

const dataUrl = 'https://data.ontario.ca/api/3/action/datastore_search?resource_id=ed270bb8-340b-41f9-a7c6-e8ef587e6d11&limit=1000';
const hospitalField = 'Number of patients hospitalized with COVID-19';
const icuField = 'Number of patients in ICU with COVID-19';

const getOntarioStatuses = () => {
	return new Promise((resolve) => {
		jsonpFetch(dataUrl, function(data) {
			const records = data.result.records;
			records.sort((a,b) => new Date(a['Reported Date']) - new Date(b['Reported Date']));

			let cases_last7days = [0, 0, 0, 0, 0, 0, 0];
			let deaths_last7days = [0, 0, 0, 0, 0, 0, 0];
			let tests_last7days = [0, 0, 0, 0, 0, 0, 0];
			let percentTestsPositive_last7days = [0, 0, 0, 0, 0, 0, 0];
			let yesterdayCases = 0;
			let yesterdayDeaths = 0;
			let yesterdayActiveCases = 0;
			let yesterdayResolvedCases = 0;
			let yesterdayHospital = 0;
			let yesterdayIcu = 0;

			records.map(record => {
				record.new_cases = record['Total Cases'] - yesterdayCases;
				record.new_deaths = Math.max(record['Deaths'] - yesterdayDeaths, 0);
				record.icu_no_ventilator = record[icuField] - record['Number of patients in ICU on a ventilator with COVID-19'];
				record.date_string = new Date(record['Reported Date']).toLocaleString('en-us', {
					month: 'short',
					day: 'numeric',
				});
				record.active_cases = record['Total Cases'] - record['Resolved'] - record['Deaths'];
				record.new_active_cases = record.active_cases - yesterdayActiveCases;
				record.new_resolved = record['Resolved'] - yesterdayResolvedCases;
				record.new_hospital = record[hospitalField] - yesterdayHospital;
				record.new_icu = record[icuField] - yesterdayIcu;
				record.percent_positive = ((record['new_cases'] / record['Total tests completed in the last day']) * 100).toFixed(2);
				if (record.percent_positive > 100) {
					record.percent_positive = 0;
				} else if (isNaN(record.percent_positive)) {
					record.percent_positive = 0;
				}

				percentTestsPositive_last7days.shift();
				percentTestsPositive_last7days.push(Number(record.percent_positive || 0));
				record.tests_positive_rolling_average = (percentTestsPositive_last7days.reduce((total, cases) => cases + total, 0) / 7.0).toFixed(2);

				tests_last7days.shift();
				tests_last7days.push(record['Total tests completed in the last day'] || 0);
				record.tests_rolling_average = Math.round(tests_last7days.reduce((total, cases) => cases + total, 0) / 7.0);

				cases_last7days.shift();
				cases_last7days.push(record.new_cases);
				const total_cases_last7days = cases_last7days.reduce((total, cases) => cases + total, 0);
				record.new_cases_rolling_average = Math.round(total_cases_last7days / 7);

				deaths_last7days.shift();
				deaths_last7days.push(record.new_deaths);
				const total_deaths_last7days = deaths_last7days.reduce((total, cases) => cases + total, 0);
				record.new_deaths_rolling_average = Math.round(total_deaths_last7days / 7);

				yesterdayIcu = record[icuField];
				yesterdayHospital = record[hospitalField];
				yesterdayCases = record['Total Cases'];
				yesterdayDeaths = record['Deaths'];
				yesterdayResolvedCases = record['Resolved'];
				yesterdayActiveCases = record['active_cases'];
				return record;
			});
			resolve(records);
		});
	});
};

export default getOntarioStatuses;
