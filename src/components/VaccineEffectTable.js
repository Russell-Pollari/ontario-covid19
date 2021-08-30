import DataTable from './DataTable';
import { Fragment } from 'react';

const formatNumber = val => `${val}%`;

const columns = [{
	label: ' ',
	key: 'type',
	isBold: true,
}, {
	label: 'One Dose Effectiveness',
	key: 'partial',
	formatValue: formatNumber,
	align: 'center'
}, {
	label: 'Two Dose Effectiveness',
	key: 'full',
	formatValue: formatNumber,
	align: 'center'
}];


const VaccineEffectTable = ({ dataSource = [] }) => {
	let footnote = <Fragment>* Effectiveness was calculated using the method detailed by the <a href='https://www.cdc.gov/csels/dsepd/ss1978/lesson3/section6.html'>CDC here</a>. <br/>* This Data is not age adjusted, which means the effectiveness is underestimated.</Fragment>;
	return (
		<DataTable
			title="Vaccine Effectiveness (last 7 days)"
			data={dataSource}
			columns={columns}
			paginationEnabled={false}
			footnote = {footnote}
		/>
	);
};

export default VaccineEffectTable;
