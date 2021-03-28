import jsonpFetch from './jsonpFetch';

const dataUrl = 'https://data.ontario.ca/api/3/action/datastore_search?resource_id=455fd63b-603d-4608-8216-7d8647f43350&limit=1000000';

const ageGroups = [
	'<20',
	'20s',
	'30s',
	'40s',
	'50s',
	'60s',
	'70s',
	'80s',
	'90+',
];


const compileAgeStats = (records) => {
	const ages = {};
	records.forEach(record => {
		const ageGroup = record.Age_Group;
		if (!ages[ageGroup]) {
			ages[ageGroup] = {
				total: 1,
				deceased: record.Outcome1 === 'Fatal' ? 1 : 0,
				resolved: record.Outcome1 === 'Resolved' ? 1 : 0,
				active: ['Fatal', 'Resolved'].includes(record.Outcome1) ? 1 : 0,
			};
		} else {
			ages[ageGroup].total += 1;
			const deceased = record.Outcome1 === 'Fatal' ? 1 : 0;
			const resolved = record.Outcome1 === 'Resolved' ? 1 : 0;
			ages[ageGroup].deceased += deceased;
			ages[ageGroup].resolved += resolved;
			ages[ageGroup].active += (1 - deceased - resolved);
		}
	});

	return ageGroups.map((age) => ({
		ageGroup: age,
		deceased: ages[age].deceased,
		resolved: ages[age].resolved,
		active: ages[age].active,
		total: ages[age].total,
	}));
};


const getCases = () => {
	return new Promise((resolve) => {
		jsonpFetch(dataUrl, data => {
			const ageData = compileAgeStats(data.result.records);
			resolve(ageData);
		});
	});
};


export default getCases;
