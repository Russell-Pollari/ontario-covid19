import vaccineCharts from './vaccineChartIDs';

const totalDoses = {
	id: vaccineCharts.totalDoses,
	dataKeyX: 'date_string',
	title: 'Total vaccines administered',
	syncId: 'vaccineCharts',
	areas: [{
		dataKey: 'total_doses_administered',
		name: 'Total doses administered',
		fill: '#509ee3',
	}]
};

export default totalDoses;
