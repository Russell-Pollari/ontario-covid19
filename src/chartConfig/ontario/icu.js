const icu = {
	title: 'Patients in ICU',
	dataKeyX: 'date_string',
	bars: [{
		dataKey: 'total_vent',
		fill: '#509ee3',
		name: 'ICU (with ventilator)',
		stackId: 'a'
	}, {
		dataKey: 'icu_no_ventilator',
		fill: '#7172ad',
		name: 'ICU (no ventilator)',
		stackId: 'a',
	}],
};

export default icu;
