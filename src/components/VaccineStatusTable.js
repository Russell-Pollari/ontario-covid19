import DataTable from './DataTable';

const formatNumber = val => val ? Number(val).toLocaleString() : null;

const formatDelta = val => {
	if (!val ){ return null; }
	return `${val >= 0 ? '+' : ''}${formatNumber(val)}`;
};

const columns = [{
	label: 'Date',
	key: 'date_string',
}, {
	label: 'Total doses administered',
	key: 'total_doses_administered',
	formatValue: formatNumber,
}, {
	label: 'Daily vaccines',
	key: 'previous_day_total_doses_administered',
	formatValue: formatDelta,
	highlight: 'positive',
}, {
	label: '7 day average',
	key: 'new_vaccines_rolling_average',
	formatValue: formatDelta,
	highlight: 'positive',
}, {
	label: 'Total people with 2 doses',
	key: 'total_individuals_fully_vaccinated',
	formatValue: formatNumber,
	headerColSpan: '2'
}, {
	label: '',
	key: 'previous_day_fully_vaccinated',
	formatValue: formatDelta,
	highlight: 'positive',
}, {
	label: 'Total people with 3 doses',
	key: 'total_individuals_3doses',
	formatValue: formatNumber,
}];


const VaccineStatusTable = ({ dataSource = [] }) => {
	return (
		<DataTable
			title="Status of Vaccinations in Ontario"
			data={dataSource}
			columns={columns}
		/>
	);
};

export default VaccineStatusTable;
