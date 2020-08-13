const totalCases = {
	title: 'Total cases in Ontario',
	dataKeyX: 'date_string',
	barConfig: [{
		dataKey: 'active_not_hospitalized',
		fill: '#f9d45c',
		name: 'Sick (not hospitalized)',
		stackId: 'a',
	}, {
		dataKey: 'num_hospitalized',
		fill: '#f3b381',
		name: 'Hospitalized',
		stackId: 'a',
	}, {
		dataKey: 'total_deaths',
		fill: '#ef8c8c',
		name: 'Deceased',
		stackId: 'a',
	}, {
		dataKey: 'total_resolved',
		fill: '#88bf4d',
		name: 'Resolved',
		stackId: 'a',
	}]
};

export default totalCases;
