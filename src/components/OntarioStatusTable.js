const hospitalField = 'Number of patients hospitalized with COVID-19';
const icuField = 'Number of patients in ICU with COVID-19';

import DataTable from './DataTable';

const formatNumber = val => val.toLocaleString();

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
}, {
	label: '',
	key: 'new_active_cases',
	formatValue: formatDelta,
	highlight: 'negative',
}, {
	label: 'Total cases',
	key: 'Total Cases',
	formatValue: formatNumber,
	align: 'right',
}, {
	label: '',
	key: 'new_cases',
	formatValue: formatDelta,
	highlight: 'negative',
}, {
	label: 'Deaths',
	key: 'Deaths',
	formatValue: formatNumber,
	align: 'right',
}, {
	label: '',
	key: 'new_deaths',
	formatValue: formatDelta,
	highlight: 'negative',
}, {
	label: 'Patients hospitalized',
	key: hospitalField,
	formatValue: formatNumber,
	align: 'right',
}, {
	label: '',
	key: 'new_hospital',
	formatValue: formatDelta,
	highlight: true,
}, {
	label: 'Patients in ICU',
	key: icuField,
	formatValue: formatNumber,
	align: 'right',
}, {
	label: '',
	key: 'new_icu',
	formatValue: formatDelta,
	highlight: 'negative',
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
