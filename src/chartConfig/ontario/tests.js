const tests = {
	title: 'New tests',
	dataKeyX: 'date_string',
	bars: [{
		dataKey: 'Total tests completed in the last day',
		name: 'New tests',
		fill: '#509ee3',
	}],
	lines: [{
		dataKey: 'Under Investigation',
		name: 'Pending tests',
		dot: false,
		strokeWidth: 2,
		stroke: 'teal',
	}, {
		dataKey: 'tests_rolling_average',
		name: '7 day rolling average',
		stroke: 'black',
		strokeWidth: 2,
		dot: false,
	}]
};

export default tests;
