const ageBreakdown = {
	title: 'Cases by age group',
	dataKeyX: 'ageGroup',
	bars: [{
		dataKey: 'deceased',
		fill: '#ef8c8c',
		name: 'Deceased',
		stackId: 'a',
	},{
		dataKey: 'active',
		fill: '#f9d45c',
		name: 'Active',
		stackId: 'a'
	}, {
		dataKey: 'resolved',
		fill: 'green',
		name: 'Resolved',
		stackId: 'a',
	}]
};

export default ageBreakdown;
