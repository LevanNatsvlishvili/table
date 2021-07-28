import React, { useState, useEffect } from 'react';
import TextField from 'components/inputs/TextField';
import useTable from 'Store/TableContext';

const CustomizeListFieldSelect = ({ headCell, headCellId }) => {
  const { headCells, setHeadCells, headCellsOptions, setHeadCellsOptions, Search } = useTable();
  const [value, setValue] = useState('');

  useEffect(() => {
    if (headCells) {
      setValue(headCell.value)
    }

    for (let i = 0; i < headCellsOptions.length; i++) {
      if (headCellsOptions.indexOf(headCell) > -1) {
        headCellsOptions[headCellsOptions.indexOf(headCell)].disabled = true;
      }
    }
    setHeadCellsOptions([...headCellsOptions]);

  }, [headCells])

  useEffect(() => {
    if (value) {
      headCells.splice(headCellId, 1, Search(headCellsOptions, value));
      setHeadCells([...headCells]);
    }

  }, [value])

  const handleChange = (e) => {
    //shlis optionis disableds
    headCellsOptions[headCellsOptions.indexOf(Search(headCellsOptions, value))].disabled = false;
    setValue(e.target.value)
  }
  return (
    <TextField
      select={true}
      onChange={handleChange}
      value={value}
      options={headCellsOptions} />
  );
}

export default CustomizeListFieldSelect;