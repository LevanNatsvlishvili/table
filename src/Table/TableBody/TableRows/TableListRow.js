import React from 'react';
import TableCells from './TableListRowCells';
import TableRow from '../../Components/TableRow';


const TableListRow = (props) => {
  const { data } = props;

  return (
    <TableRow >
      <TableCells data={data} />
    </TableRow>

  );
};

export default TableListRow;