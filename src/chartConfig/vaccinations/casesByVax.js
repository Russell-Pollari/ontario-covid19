import { Fragment } from 'react';
import vaccineCharts from './vaccineChartIDs';


const footnote = <Fragment>
* This data is population adjusted.<br/>
* Population denominators are calculated based on daily dose history.<br/>
* <b>Fully vaccinated</b> = 14 days after 2nd dose<br/>
* <b>Partially vaccinated</b> = 14 days after 1st dose and &lt;14 days after 2nd dose.
</Fragment>;

const casesByVax = {
	id: vaccineCharts.casesByVax,
	title: 'Cases by vaccination status',
	dataKeyX: 'date_string',
	footnote,
	areas: [{
		dataKey: 'cases_unvac',
		name: 'Unvaccinated',
		stroke: '#eb4034',
		fill: '#eb4034',
		stackId: 1
	}, {
		dataKey: 'cases_partial_vac',
		name: 'Partially vaccinated',
		stroke: '#f5b042',
		fill: '#f5b042',
		stackId: 1
	}, {
		dataKey: 'cases_full_vac',
		name: 'Fully vaccinated',
		stroke: '#82ca9d',
		fill: '#82ca9d',
		stackId: 1
	}, {
		dataKey: 'cases_vac_unknown',
		name: 'Unknown status',
		stackId: 1
	}]
};

export default casesByVax;
