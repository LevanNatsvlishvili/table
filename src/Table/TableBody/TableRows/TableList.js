import React from 'react';
import TableBodyRowCells from './TableListRow';
import { searchInArray } from '../../Utils';


const TableList = (props) => {
  const { page, rowsPerPage, database, setDatabase, search } = props;

  return (
    database
      .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
      .filter(row => searchInArray(row, search))
      .map((data, index) => (<TableBodyRowCells
        data={data}
        setData={setDatabase}
        key={index}
      />))

  );
};

export default TableList;