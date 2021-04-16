const newCases = {
	title: 'New cases',
	dataKeyX: 'date_string',
	bars: [{
		dataKey: 'new_cases',
		name: 'New cases',
		fill: '#f9d45c',
	}],
	lines: [{
		dataKey: 'avg_new_cases',
		name: '7 day rolling average',
		stroke: 'black',
		strokeWidth: 2,
		dot: false,
	}],
};

export default newCases;
