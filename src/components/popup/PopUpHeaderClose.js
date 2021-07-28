import Button from '@material-ui/core/Button';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';

const PopupHeaderClose = (props) => {
  const { handleDrawer } = props
  const classes = useStyles();

  return (
    <Button
      startIcon={<CloseIcon className={classes.icon} />}
      type='button'
      onClick={handleDrawer}
      className={classes.CloseButton}>
      Close
    </Button>
  )
}

const useStyles = makeStyles((theme) => ({
  CloseButton: {
    color: '#ff4e00',
    fontSize: '14px',
    fontWeight: 'bold',
    textTransform: 'none',
    fontStyle: 'normal',
    margin: '0',
  },
  icon: {
    width: 16,
  }
}));

export default PopupHeaderClose;