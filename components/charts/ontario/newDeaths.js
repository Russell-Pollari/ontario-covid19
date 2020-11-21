const newDeaths = {
	title: 'New deaths',
	dataKeyX: 'date_string',
	bars: [{
		dataKey: 'new_deaths',
		name: 'New deaths',
		fill: "#ef8c8c",
	}],
	lines: [{
		dataKey: 'new_deaths_rolling_average',
		name: '7 day rolling average',
		stroke: "black",
		strokeWidth: 2,
		dot: false,
	}],
};

export default newDeaths;
