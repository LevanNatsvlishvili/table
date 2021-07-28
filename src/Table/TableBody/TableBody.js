import React from 'react';
import TableEmptyRows from './TableEmptyRows';
import TableRows from './TableRows';
import TableBody from '@material-ui/core/TableBody';


const TableBodyContainer = (props) => {
  const { rowsPerPage, page, setDatabase, database, emptyRows, search } = props;

  return (
    <TableBody>
      <TableRows
        rowsPerPage={rowsPerPage}
        page={page}
        setDatabase={setDatabase}
        database={database}
        search={search}
      />

      <TableEmptyRows emptyRows={emptyRows} />

    </TableBody>
  );
};

export default TableBodyContainer;