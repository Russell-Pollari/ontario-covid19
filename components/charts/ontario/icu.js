const icu = {
	title: 'Patients in ICU',
	dataKeyX: 'date_string',
	transform: (data) => (
		data.map(datum => {
			datum['icu_no_ventilator'] = datum['num_icu'] - datum['num_ventilator'];
			return datum;
		})
	),
	barConfig: [{
		dataKey: 'num_ventilator',
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
