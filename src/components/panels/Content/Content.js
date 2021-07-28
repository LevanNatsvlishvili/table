import React from 'react';
import { makeStyles } from '@material-ui/core';
import { drawerWidth, shrinkDrawerWidth, topBarHeight } from 'consts';
import useApp from 'store/AppContext';

const Content = (props) => {
  const { sidebarOpen } = useApp();
  const classes = useStyles({
    sidebarOpen: sidebarOpen,
  });

  return <main className={classes.main}>{props.children}</main>;
};

export default Content;

const useStyles = makeStyles((theme) => ({
  main: {
    padding: theme.spacing(2),
    transition: '0.5s all ease-in-out',
    marginTop: topBarHeight,
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(2, 4),
      marginLeft: (props) => (props.sidebarOpen ? drawerWidth : shrinkDrawerWidth),
    },
  },
}));
