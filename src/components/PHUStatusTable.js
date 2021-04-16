import DataTable from './DataTable';

const formatNumber = val => val.toLocaleString();

const formatDelta = val => (
	`${val >= 0 ? '+' : ''}${formatNumber(val)}`
);

const PHUStatusTable = ({ dataSource = [], phuName }) => {
	const columns = [{
		label: 'Date',
		key: 'date_string',
	}, {
		label: 'Active cases',
		key: 'active_cases',
		formatValue: formatNumber,
		align: 'right',
		headerColSpan: 2,
	}, {
		label: '',
		key: 'new_active_cases',
		formatValue: formatDelta,
		highlight: 'negative',
	}, {
		label: 'Total cases',
		key: 'total_cases',
		formatValue: formatNumber,
		align: 'right',
		headerColSpan: 2,
	}, {
		label: '',
		key: 'new_cases',
		formatValue: formatDelta,
		highlight: 'negative',
	}, {
		label: 'Deaths',
		key: 'total_deaths',
		formatValue: formatNumber,
		align: 'right',
		headerColSpan: 2,
	}, {
		label: '',
		key: 'new_deaths',
		formatValue: formatDelta,
		highlight: 'negative',
	}];

	return (
		<DataTable
			title={`Status of cases in ${phuName}`}
			data={dataSource}
			columns={columns}
		/>
	);
};

export default PHUStatusTable;
