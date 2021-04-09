const totalCases = {
	title: 'Total cases',
	dataKeyX: 'date_string',
	areas: [{
		dataKey: 'vocsTotal',
		fill: '#ef8c8c',
		stroke: '#ef8c8c',
		name: 'Variants of concern',
		stackId: 'a',
	}, {
		dataKey: 'totalNonVOC',
		fill: '#f9d45c',
		stroke: '#f9d45c',
		name: 'Vanilla cases',
		stackId: 'a',
	}]
};

export default totalCases;
