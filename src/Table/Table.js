import React, { useState, useEffect } from 'react';
import TableToolbar from './TableToolbar';
import TableHeading from './TableHeading';
import TableBottom from './TableBottom';
import TableBody from './TableBody';
import { arrayMove } from './Utils';
import useTable from 'Store/TableContext';
import { TableContainer, Table, Box, } from '@material-ui/core';
import { Database } from './TableData';


const TableRoot = () => {
  const { componentRef, headCells, Search } = useTable();
  const [search, setSearch] = useState('')
  const [newDatabase, setNewDatabase] = useState(Database());
  const [page, setPage] = useState(0);
  const [rowsPerPage,] = useState(5);

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, newDatabase.length - page * rowsPerPage);

  const handleChangePage = (event, newPage) => {
    setPage(newPage - 1);
  };

  useEffect(() => {
    newDatabase.map((newData) => {
      newData.map((newRow) => {
        if (Search(headCells, newRow[0])) {
          arrayMove(
            newData,
            newData.indexOf(newRow),
            headCells.indexOf(Search(headCells, newRow[0]))
          )
        }

        return true;
      })
      return true;
    })
    setNewDatabase([...newDatabase])
  }, [headCells])

  const handleSearch = (e, newVal) => {
    setSearch(e.target.value);
  }

  return (
    <Box boxShadow='0px 1px 3px rgba(0, 0, 0, 0.101961)' m={2} bgcolor='#fff'>
      <TableToolbar
        search={search}
        handleSearch={handleSearch}
      />

      <div>
        <TableContainer>
          <Table style={{ minWidth: '800px' }} size='medium' ref={componentRef}>
            <TableHeading />

            <TableBody
              emptyRows={emptyRows}
              rowsPerPage={rowsPerPage}
              page={page}
              search={search}
              setDatabase={setNewDatabase}
              database={newDatabase} />

          </Table>
        </TableContainer>

        <TableBottom
          count={5}
          onChange={handleChangePage}
        />
      </div>
    </Box>
  );
};

export default TableRoot;