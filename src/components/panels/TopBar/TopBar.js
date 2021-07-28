import { AppBar, Grid, Hidden, IconButton, Toolbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { mdiMenu } from '@mdi/js';
import Icon from '@mdi/react';
import clsx from 'clsx';
import NetworkAccountSwitcher from 'components/panels/TopBar/NetworkAccountSwitcher';
import SettingsMenu from 'components/panels/TopBar/SettingsMenu';
import TopBarShortcut from 'components/panels/TopBar/TopBarShortcut';
import WorkspaceSwitcher from 'components/panels/TopBar/WorkspaceSwitcher';
import { drawerWidth, shrinkDrawerWidth } from 'consts';
import React from 'react';
import useApp from 'store/AppContext';

const TopBar = (props) => {
  const { sidebarOpen, toggleSidebar } = useApp();
  const classes = useStyles({
    sidebarOpen: sidebarOpen,
  });

  return (
    <AppBar
      position='fixed'
      className={clsx(classes.appBar, {
        [classes.appBarShift]: sidebarOpen,
      })}
    >
      <Toolbar disableGutters className={classes.toolBar}>
        <Grid container alignItems='center'>
          <Hidden smUp>
            <Grid item>
              <IconButton onClick={toggleSidebar} className={classes.toggleSidebarButton}>
                <Icon path={mdiMenu} />
              </IconButton>
            </Grid>
          </Hidden>
          <Hidden smDown>
            <Grid item>
              <Grid container spacing={2}>
                <Grid item>
                  <NetworkAccountSwitcher network='facebook' />
                </Grid>
                <Grid item>
                  <NetworkAccountSwitcher network='google' />
                </Grid>
              </Grid>
            </Grid>
          </Hidden>
          <Grid item xs />
          <Grid item>
            <Grid container>
              <Hidden smDown>
                <TopBarShortcut underline color='mainText'>
                  + Create Website
                </TopBarShortcut>
                <TopBarShortcut color='orange'>+ Create Ad</TopBarShortcut>
                <SettingsMenu />
              </Hidden>
              <WorkspaceSwitcher />
            </Grid>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;

const useStyles = makeStyles((theme) => ({
  appBar: {
    background: theme.colors.white,
    color: theme.colors.bodyColor,
    transition: '0.5s ease-in-out',
    [theme.breakpoints.up('sm')]: {
      width: (props) => `calc(100% - ${props.sidebarOpen ? drawerWidth : shrinkDrawerWidth}px)`,
    },
  },
  toggleSidebarButton: {
    margin: theme.spacing(0, 2),
  },
  toolBar: {
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(0, 4),
    },
  },
}));
