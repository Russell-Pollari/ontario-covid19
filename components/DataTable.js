import { useState, useEffect } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TablePagination from '@material-ui/core/TablePagination';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 340,
  },
});



const Cell = ({ column, row, rows }) => {
  const { key, formatValue, highlight } = column;
  const value = row[key];
  const max = Math.max(...rows.map(row => row[key]));
  const min = Math.min(...rows.map(row => row[key]));
  let opacity = Math.max((value - min) / (max - min), 0.25);
  let color;

  if (value > 0) {
    color = `rgba(235, 0, 0, ${opacity})`;
  }
  if (value < 0) {
    color = `rgba(0, 235, 0, ${1 - opacity})`;
  }
  return (
    <TableCell
      style={highlight ? {
        backgroundColor: color,
      } : {}}
      align="left">
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
}) => {
  const classes = useStyles();
  const [rows, setRows] = useState([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    const start = page > 0 ? page + 3 : 0;
    const r = data.slice().reverse().slice(start, start + 4);
    setRows(r);
  }, [page]);

  const handlePageChange = (event, page) => {
    setPage(page);
  };

  return (
    <Paper>
      <TableContainer>
        <Table className={classes.table} size="small" aria-label="simple table">
          <TableHead>
            <TableRow>
              {columns.map(({ label }, index) => (
                <TableCell align="left" key={index}>
                  {label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, i) => (
              <Row key={i} row={row} columns={columns} rows={rows} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        component="div"
        rowsPerPage={4}
        page={page}
        count={-1}
        rowsPerPageOptions={[4]}
        labelDisplayedRows={() => ''}
        onChangePage={handlePageChange}
        />
    </Paper>
  );
};

export default BasicTable;
