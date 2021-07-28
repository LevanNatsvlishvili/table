import React from 'react';
import TableCell from '../../Components/TableCell';
import useTable from 'Store/TableContext';


const TableListRowCells = (props) => {
  const { data } = props;
  const { headCells, Search } = useTable();

  return (
    (data.map((newRow, newIndex) => (
      (Search(headCells, newRow[0])) ?
        <TableCell key={newIndex} >
          {newRow[1]}
        </TableCell> : null
    )
    ))
  );
};


export default TableListRowCells;