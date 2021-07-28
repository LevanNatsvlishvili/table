import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import { makeStyles } from '@material-ui/core/styles';
import PopUpHeader from './PopUpHeader';


const Popup = ({ label, handleDrawer, children, open }) => {
  const classes = useStyles();

  return (
    <Drawer
      open={open}
      onClose={handleDrawer}
      anchor='right'
      classes={{ paper: classes.drawerPaper }}
    >
      <div className={classes.root}>
        <PopUpHeader label={label} handleDrawer={handleDrawer} />

        <div className={classes.content}>
          {children}
        </div>
      </div >
    </Drawer>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: '#ffffff',
  },
  drawerPaper: {
    width: '30%',
    right: 0,
    [theme.breakpoints.down('md')]: {
      width: '50%',
    },
    [theme.breakpoints.down('sm')]: {
      width: '70%',
    },
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
  },
  content: {
    width: '100%',
    marginTop: '10px',
  },
}));

export default Popup;