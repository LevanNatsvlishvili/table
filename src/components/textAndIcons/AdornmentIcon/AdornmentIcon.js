import React from 'react';
import { makeStyles, IconButton, InputAdornment } from '@material-ui/core';

const AdornmentIcon = ({ icon, ...rest }) => {
  const classes = useStyles();

  return (
    <InputAdornment className={classes.adornment} position='start'>
      <IconButton>
        <img src={icon} />
      </IconButton>
    </InputAdornment>
  );
};

const useStyles = makeStyles((theme) => ({
  adornment: {
    marginRight: theme.spacing(-1.5),
  },
}));

export default AdornmentIcon;
