import { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TablePagination from '@material-ui/core/TablePagination';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import ContentContainer from './ContentContainer';

const useStyles = makeStyles({
	table: {
		minWidth: 340,
		marginTop: 8,
	},
	boldCell: {
		'font-weight': 500
	}
});


const Cell = ({ column, row, rows }) => {
	let color;
	const { key, formatValue, highlight, align, isBold } = column;
	const value = row[key];
	const max = Math.max(...rows.map(row => row[key]));
	const min = Math.min(...rows.map(row => row[key]));
	let opacity = Math.max((value - min) / (max - min), 0.25);

	const classes = useStyles();

	if (highlight === 'positive') {
		if (value < 0) {
			color = `rgba(235, 0, 0, ${1 - Math.min(opacity, 0.9)})`;
		}
		if (value > 0) {
			color = `rgba(0, 235, 0, ${Math.min(opacity, 0.9)})`;
		}
	} else {
		if (value > 0) {
			color = `rgba(235, 0, 0, ${Math.min(opacity, 0.9)})`;
		}
		if (value < 0) {
			color = `rgba(0, 235, 0, ${1 - Math.min(opacity, 0.9)})`;
		}
	}


	return (
		<TableCell
			className={isBold ? classes.boldCell : null}
			style={highlight ? {
				backgroundColor: color,
			} : {}}
			align={align || 'left'}>
			{formatValue ? formatValue(value) : value}
		</TableCell>
	);
};


const Row = ({
 columns = [],
 row,
 rows = [],
}) => {
	return (
		<TableRow>
			{columns.map((column, index) => (
				<Cell column={column} row={row} rows={rows} key={index} />
			))}
		</TableRow>
	);
};


const BasicTable = ({
	columns = [],
	data = [],
	title,
	paginationEnabled = true,
	footnote = ''
}) => {
	const classes = useStyles();
	const [rows, setRows] = useState([]);
	const [page, setPage] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(4);

	useEffect(() => {
		const start = page > 0 ? page + (rowsPerPage - 1) : 0;
		const r = data.slice().reverse().slice(start, start + rowsPerPage);
		setRows(r);
	}, [page, rowsPerPage]);

	const handlePageChange = (event, page) => {
		setPage(page);
	};

	return (
		<ContentContainer title={title} footnote={footnote}>
			<TableContainer>
				<Table className={classes.table} size="small" aria-label="simple table">
					<TableHead>
						<TableRow>
							{columns.map(({ label, headerColSpan, align }, index) => {
								if (!label) return null;
								return (
									<TableCell align={align || 'left'} key={index} colSpan={headerColSpan}>
										{label}
									</TableCell>
								);
							})}
						</TableRow>
					</TableHead>
					<TableBody>
						{rows.map((row, i) => (
							<Row key={i} row={row} columns={columns} rows={rows} />
						))}
					</TableBody>
				</Table>
			</TableContainer>
			{paginationEnabled && <TablePagination
				component="div"
				rowsPerPage={rowsPerPage}
				page={page}
				count={-1}
				rowsPerPageOptions={[4, 10, 100]}
				labelDisplayedRows={() => ''}
				onChangePage={handlePageChange}
				onChangeRowsPerPage={e => setRowsPerPage(e.target.value)}
			/>}
		</ContentContainer>
	);
};

export default BasicTable;
