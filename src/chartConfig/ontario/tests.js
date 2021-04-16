const tests = {
	title: 'New tests',
	dataKeyX: 'date_string',
	bars: [{
		dataKey: 'new_tests',
		name: 'New tests',
		fill: '#509ee3',
	}],
	lines: [{
		dataKey: 'under_investigation',
		name: 'Pending tests',
		dot: false,
		strokeWidth: 2,
		stroke: 'teal',
	}, {
		dataKey: 'avg_new_tests',
		name: '7 day rolling average',
		stroke: 'black',
		strokeWidth: 2,
		dot: false,
	}]
};

export default tests;
