import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';

const Adornment = ({ onClick, icon }) => {
  const classes = useStyles();
  return (
    <InputAdornment className={classes.adornment} position="start">
      <IconButton>
        <img src={icon} alt="Search" />
      </IconButton>
    </InputAdornment>
  )
}

const useStyles = makeStyles((theme) => ({
  adornment: {
    marginRight: '-12px'
  }
}));

export default Adornment;