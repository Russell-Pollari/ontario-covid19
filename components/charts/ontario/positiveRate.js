const positiveRate = {
	title: 'Percent positive',
	dataKeyX: 'date_string',
	bars: [{
		dataKey: 'percent_positive',
		name: 'Percent positive',
		fill: '#509ee3',
	}],
	lines: [ {
		dataKey: 'tests_positive_rolling_average',
		name: '7 day rolling average',
		stroke: "black",
		strokeWidth: 2,
		dot: false,
	}]
};

export default positiveRate;
