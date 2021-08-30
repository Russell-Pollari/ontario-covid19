import vaccineCharts from './vaccineChartIDs';

const totalVaccinated = {
	id: vaccineCharts.totalVaccinated,
	dataKeyX: 'date_string',
	title: 'Total people fully vaccinated',
	areas: [{
		dataKey: 'total_individuals_fully_vaccinated',
		name: 'Total people fully vaccinated',
		fill: '#509ee3',
	}]
};

export default totalVaccinated;
