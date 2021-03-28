import DataTable from './DataTable';

const formatNumber = val => val.toLocaleString();


const PHUStatusTable = ({ dataSource = [], phuName }) => {
	const columns = [{
		label: 'Date',
		key: 'date_string',
	}, {
		label: 'Active cases',
		key: 'ACTIVE_CASES',
		formatValue: formatNumber,
	}, {
		label: 'Total cases',
		key: 'total_cases',
		formatValue: formatNumber,
	}, {
		label: 'Deaths',
		key: 'DEATHS',
		formatValue: formatNumber,
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
