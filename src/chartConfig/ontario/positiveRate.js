const positiveRate = {
	title: 'Percent positive',
	dataKeyX: 'date_string',
	bars: [{
		dataKey: 'new_percent_pos',
		name: 'Percent positive',
		fill: '#509ee3',
	}],
	lines: [ {
		dataKey: 'avg_percent_pos',
		name: '7 day rolling average',
		stroke: 'black',
		strokeWidth: 2,
		dot: false,
	}]
};

export default positiveRate;
