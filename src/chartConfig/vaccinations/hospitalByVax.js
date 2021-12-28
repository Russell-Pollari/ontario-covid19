import vaccineCharts from './vaccineChartIDs';
import { Fragment } from 'react';

const footnote = <Fragment>
* This data is population adjusted.<br/>
* Population denominators are calculated based on daily dose history.<br/>
* <b>Fully vaccinated</b> = 14 days after 2nd dose<br/>
* <b>Partially vaccinated</b> = 14 days after 1st dose and &lt;14 days after 2nd dose.
</Fragment>;

const hospitalByVax = {
  id: vaccineCharts.hospitalByVax,
	footnote,
	title: 'Hospitalization by vaccination status',
	dataKeyX: 'date_string',
	areas: [{
		dataKey: 'hospital_unvac',
		name: 'Unvaccinated',
		stroke: '#eb4034',
		fill: '#eb4034',
		stackId: 1
	}, {
		dataKey: 'hospital_partial_vac',
		name: 'Partially vaccinated',
		stroke: '#f5b042',
		fill: '#f5b042',
		stackId: 1
	}, {
		dataKey: 'hospital_full_vac',
		name: 'Fully vaccinated',
		stroke: '#82ca9d',
		fill: '#82ca9d',
		stackId: 1
	}],
};

export default hospitalByVax;
