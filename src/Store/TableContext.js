import React, { createContext, useState, useContext } from 'react';

export const TableContext = createContext({});

export const TableContextProvider = ({ children }) => {
  const [headCells, setHeadCells] = useState([
    { id: 'id', value: 'id', numeric: true, label: 'Id', },
    { id: 'name', value: 'name', numeric: false, label: 'Name', },
    { id: 'age', value: 'age', numeric: true, label: 'Age', },
    { id: 'gender', value: 'gender', numeric: false, label: 'Gender', },
    { id: 'profession', value: 'profession', numeric: false, label: 'Profession', },

  ]);

  const [headCellsOptions, setHeadCellsOptions] = useState([
    { id: 'id', value: 'id', numeric: true, label: 'Id', disabled: true },
    { id: 'name', value: 'name', numeric: false, label: 'Name', disabled: true },
    { id: 'age', value: 'age', numeric: true, label: 'Age', disabled: true },
    { id: 'gender', value: 'gender', numeric: false, label: 'Gender', disabled: true },
    { id: 'profession', value: 'profession', numeric: false, label: 'Profession', disabled: true },
    { id: 'technology', value: 'technology', numeric: false, label: 'Technology', disabled: false },
    { id: 'experience', value: 'experience', numeric: false, label: 'Experience', disabled: false },
    { id: 'employment', value: 'employment', numeric: false, label: 'Employment Type', disabled: false },
  ]);

  const Search = (array, value) => {
    return array.find(({ id }) => id === value)
  }

  return (
    <TableContext.Provider
      value={{
        headCells,
        headCellsOptions,
        setHeadCells,
        setHeadCellsOptions,
        Search
      }}
    >
      {children}
    </TableContext.Provider>
  );
};

const useTable = () => useContext(TableContext);

export default useTable;
