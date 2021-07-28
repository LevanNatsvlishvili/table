import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import useTable from 'Store/TableContext';
import CloseIcon from '@material-ui/icons/Close';


const CustomizeListFieldRemove = ({ headCellId }) => {
  const classes = useStyles();
  const { headCells, setHeadCells, headCellsOptions, Search } = useTable();

  const deleteCell = (id) => {
    Search(headCellsOptions, headCells[id].value).disabled = false;//headcelloptionebshi tishavs select disableds
    headCells.splice(id, 1);
    setHeadCells([...headCells]);
  };
  return (
    <Button
      startIcon={<CloseIcon className={classes.icon} />}
      className={classes.Button}
      onClick={() => deleteCell(headCellId)}>
      Remove
    </Button>
  );
}

const useStyles = makeStyles({
  Button: {
    borderRadius: '6px',
    display: 'flex',
    marginLeft: 'auto',
    fontSize: 13,
    fontWeight: 600,
    "&:hover": {
      background: 'transparent'
    }
  },
  icon: {
    width: '16px',
  },
});

export default CustomizeListFieldRemove;