const newCases = {
	title: 'New cases',
	dataKeyX: 'date_string',
	bars: [{
		dataKey: 'new_cases',
		name: 'New cases',
		fill: '#f9d45c',
	}],
	lines: [{
		dataKey: 'new_cases_rolling_average',
		name: '7 day rolling average',
		stroke: 'black',
		strokeWidth: 2,
		dot: false,
	}],
};

export default newCases;
