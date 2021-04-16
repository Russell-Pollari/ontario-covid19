import DataTable from './DataTable';

const formatNumber = val => {
	if (val) {
		return val.toLocaleString();
	} else return '';
};

const formatDelta = val => (
	`${val >= 0 ? '+' : ''}${formatNumber(val)}`
);

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
}, {
	label: 'Patients hospitalized',
	key: 'total_hospital',
	formatValue: formatNumber,
	align: 'right',
	headerColSpan: 2,
}, {
	label: '',
	key: 'new_hospital',
	formatValue: formatDelta,
	highlight: true,
}, {
	label: 'Patients in ICU',
	key: 'total_icu',
	formatValue: formatNumber,
	align: 'right',
	headerColSpan: 2,
}, {
	label: '',
	key: 'new_icu',
	formatValue: formatDelta,
	highlight: 'negative',
}, {
	label: 'Variants of concern cases',
	key: 'total_voc',
	formatValue: formatNumber,
}];


const OntarioStatusTable = ({ dataSource = [] }) => {
	return (
		<DataTable
			title="Status of cases in Ontario"
			data={dataSource}
			columns={columns}
		/>
	);
};

export default OntarioStatusTable;
