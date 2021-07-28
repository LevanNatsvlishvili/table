import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import clsx from 'clsx';
import useApp from 'store/AppContext';
import { topBarHeight } from 'consts';

const Logo = () => {
  const classes = useStyles();
  const { sidebarOpen } = useApp();

  return (
    <div className={clsx(classes.logoContainer, sidebarOpen ? classes.sidebarOpened : '')}>
      <img src='/icons/dataninja/dataninjaRedMd.svg' alt='Dataninja' />
      <Typography variant='h6' className={classes.logoText}>
        Dataninja
      </Typography>
    </div>
  );
};

export default Logo;

const useStyles = makeStyles((theme) => ({
  logoContainer: {
    width: '100%',
    height: topBarHeight,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(),
    '& img': {
      maxWidth: 100,
      objectFit: 'contain',
    },
  },
  logoText: {
    width: '0',
    transition: '0.5s all ease-in-out',
    color: '#fff',
    overflow: 'hidden',
  },
  sidebarOpened: {
    '& $logoText': {
      width: '100px',
      paddingLeft: theme.spacing(),
    },
  },
}));
