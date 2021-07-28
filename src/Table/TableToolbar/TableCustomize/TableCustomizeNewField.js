import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import useTable from 'Store/TableContext';
import AddIcon from '@material-ui/icons/Add';

const TableCustomizeNewField = () => {
  const localStyles = useStyles();
  const { headCells, headCellsOptions, setHeadCells } = useTable();
  const [value, setValue] = useState();

  useEffect(() => {
    for (let i = 0; i < headCellsOptions.length; i++) {
      if (!headCellsOptions[i].disabled) {
        setValue(headCellsOptions[i]);
        break;
      }
    }
  }, [headCells])

  const addNewField = () => {
    headCells.push(headCellsOptions[headCellsOptions.indexOf(value)]);
    setHeadCells([...headCells])
  }

  if (headCells.length !== 8) return (
    <Button
      startIcon={<AddIcon />}
      className={localStyles.Button}
      onClick={addNewField}>
      Add New
    </Button>
  );

  return null;
}

const useStyles = makeStyles({
  Button: {
    width: '100%',
    borderRadius: '6px',
    display: 'flex',
    height: 48,
    '&:hover': {
      background: 'rgba(255,78,0,.1)'
    }
  },
  Icon: {
    display: 'flex',
    height: '100%',
    '& img': {
      width: '10px',
    }
  },
});

export default TableCustomizeNewField;