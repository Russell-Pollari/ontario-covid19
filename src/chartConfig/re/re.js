const reChart = {
	title: 'Effective reproduction number',
	dataKeyX: 'date_string',
	xLabel: 'Week of',
	lines: [{
		dataKey: 'Re',
		name: 'Re',
		errorBarKey: 'error_bars',
		dot: false,
		stroke: 'black',
	}, {
		dataKey: () => 1,
		name: 'Re = 1',
		dot: false,
	}],
};

export default reChart;
