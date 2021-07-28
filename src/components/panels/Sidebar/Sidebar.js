import React from 'react';
import { Drawer } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

import useApp from 'store/AppContext';
import Logo from 'components/panels/Sidebar/Logo';
import SidebarMenu from 'components/panels/Sidebar/SidebarMenu';
import SidebarToggler from 'components/panels/Sidebar/SidebarToggler';
import { drawerWidth, shrinkDrawerWidth } from 'consts';

const Sidebar = (props) => {
  const classes = useStyles();
  const { sidebarOpen, toggleSidebar } = useApp();

  return (
    <Drawer
      anchor='left'
      onClose={toggleSidebar}
      variant='permanent'
      open={sidebarOpen}
      classes={{
        paper: clsx(classes.drawer, sidebarOpen ? classes.drawerOpen : classes.drawerClose),
      }}
      {...props}
    >
      <Logo />
      <SidebarMenu />
      <div className={classes.sidebarBottom}>
        <SidebarToggler />
      </div>
    </Drawer>
  );
};

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    background: '#151a22',
    transition: '0.4s width ease-in',
    flexShrink: 0,
    whiteSpace: 'nowrap',
    [theme.breakpoints.down('sm')]: {
      transition: '0.5s width ease-in',
    },
  },
  drawerOpen: {
    width: drawerWidth,
  },
  drawerClose: {
    overflowX: 'hidden',
    width: 0,
    [theme.breakpoints.up('sm')]: {
      width: shrinkDrawerWidth,
    },
  },
  sidebarBottom: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
}));
export default Sidebar;
