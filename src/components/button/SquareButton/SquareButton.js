import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
import CloseIcon from '@material-ui/icons/Close';

const SquareButton = ({ onClick, open }) => {
  const classes = useStyles();
  const backgroundRed = '#FF4E00';

  return (
    <Button className={classes.Button} style={open ? { background: backgroundRed } : null} onClick={onClick}>
      {open === false ?
        <EditIcon />
        : <CloseIcon style={{ fill: '#fff' }} />
      }
    </Button>
  );
}

const useStyles = makeStyles((theme) => ({
  Button: {
    width: '38px',
    height: '38px',
    minWidth: '38px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: 'solid 1px rgba(255, 78, 0, 0)',
    background: '#ECEEEF',
  },
}));

export default SquareButton;