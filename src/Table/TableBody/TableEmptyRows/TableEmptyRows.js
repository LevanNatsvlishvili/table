import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';


const TableEmptyRows = (props) => {
  const { emptyRows } = props;

  return (
    emptyRows > 0 && (
      <TableRow style={{ height: 55 * emptyRows }}>
        <TableCell colSpan={30} />
      </TableRow>

    )
  );
};

export default TableEmptyRows;