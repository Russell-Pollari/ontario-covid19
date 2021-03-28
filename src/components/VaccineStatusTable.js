import DataTable from './DataTable';

const formatNumber = val => val.toLocaleString();

const formatDelta = val => (
	`${val >= 0 ? '+' : ''}${formatNumber(val)}`
);

const columns = [{
	label: 'Date',
	key: 'date_string',
}, {
	label: 'Total doses administered',
	key: 'total_doses_administered',
	formatValue: formatNumber,
}, {
	label: 'Daily vaccines',
	key: 'previous_day_doses_administered',
	formatValue: formatDelta,
	highlight: 'positive',
}, {
	label: '7 day average',
	key: 'new_vaccines_rolling_average',
	formatValue: formatDelta,
	highlight: 'positive',
}, {
	label: 'Total people fully vaccinated',
	key: 'total_individuals_fully_vaccinated',
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
