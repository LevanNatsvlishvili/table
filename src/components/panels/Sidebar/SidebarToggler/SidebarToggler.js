import { IconButton, makeStyles } from '@material-ui/core';
import { mdiChevronLeft, mdiChevronRight } from '@mdi/js';
import Icon from '@mdi/react';
import clsx from 'clsx';
import React from 'react';
import { FormattedMessage as FM } from 'react-intl';
import useApp from 'store/AppContext';

const SidebarToggler = () => {
  const { sidebarOpen, toggleSidebar } = useApp();
  const classes = useStyles();

  return (
    <span
      data-pointer
      className={clsx(classes.toggleButton, sidebarOpen ? classes.sidebarOpened : '')}
      onClick={toggleSidebar}
    >
      <IconButton className={classes.toggleIcon}>
        <Icon path={sidebarOpen ? mdiChevronLeft : mdiChevronRight} />
      </IconButton>
      <span className={classes.toggleMenuText}>
        <FM id='minimize_menu' />
      </span>
    </span>
  );
};

export default SidebarToggler;

const useStyles = makeStyles((theme) => ({
  toggleButtonContainer: {
    display: 'block',
    position: 'absolute',
    width: '100%',
    bottom: '0',
  },
  toggleIcon: {
    color: theme.colors.gray,
    padding: 0,
  },
  toggleMenuText: {
    width: '0',
    transition: '0.5s all ease-in-out',
    overflow: 'hidden',
  },
  sidebarOpened: {
    '& $toggleMenuText': {
      width: '100px',
    },
  },
  toggleButton: {
    width: '100%',
    padding: '15px 0px',
    background: 'none',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: 'none',
    color: '#c3ced5',
    outline: 'none',
    fontFamily: 'fmedium',
    marginBottom: '15px',
    borderBottom: '#2f3641 1px solid',
    borderTop: '#2f3641 1px solid',
  },
}));
