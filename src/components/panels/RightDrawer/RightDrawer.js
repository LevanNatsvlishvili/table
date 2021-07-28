import { Drawer, IconButton, makeStyles, Typography } from '@material-ui/core';
import { topBarHeight } from 'consts';
import React, { useEffect, useState } from 'react';

export default (props) => {
  const { width, children, padding, open, color, onClose, icon, title, ...rest } = props;
  const classes = useStyles({
    width: width,
    color: color,
    padding: padding || 2,
  });
  const [drawerOpen, setDrawerOpen] = useState(open);

  const handleClose = () => {
    setDrawerOpen(false);
  };

  useEffect(() => {
    if (!open && typeof onClose === 'function') onClose();
  }, [open]);

  return (
    <Drawer
      open={drawerOpen}
      onClose={handleClose}
      anchor='right'
      classes={{
        paper: classes.drawerPaper,
      }}
      {...props}
    >
      <div className={classes.header}>
        <div className={classes.drawerTitle}>
          {icon ? <img src={icon} alt='filter' /> : null}
          <Typography variant='body1' color='primary'>
            {title}
          </Typography>
        </div>
        <div>
          <IconButton onClick={handleClose}>
            <img src='/icons/cross/closeBlue.svg' alt='' />
          </IconButton>
        </div>
      </div>
      <div className={classes.childrenContainer}>{children}</div>
    </Drawer>
  );
};

const useStyles = makeStyles((theme) => ({
  header: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: (props) => theme.spacing(0, props.padding),
    height: topBarHeight,
    borderBottom: '2px solid #dddddd',
  },
  drawerPaper: {
    width: (props) => props.width || 600,
    maxWidth: '90%',
  },
  childrenContainer: {
    width: '100%',
    padding: (props) => theme.spacing(props.padding),
  },
  drawerTitle: {
    backgroundColor: 'transparent',
    display: 'flex',
    alignItems: 'center',
    '& p': {
      textTransform: 'none',
      color: (props) => theme.colors[props.color || 'orange'],
      fontSize: (props) => props.fontSize || 14,
      lineHeight: '14px',
      fontWeight: 'bold',
      fontFamily: 'fregular',
      // marginLeft: 9,
    },
  },
}));
