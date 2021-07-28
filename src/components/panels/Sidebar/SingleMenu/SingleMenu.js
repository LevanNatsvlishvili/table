import React from 'react';
import { Link } from 'react-router-dom';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import useApp from 'store/AppContext';

const SingleMenu = (props) => {
  const classes = useStyles();
  const { sidebarOpen } = useApp();

  return (
    <ListItem
      component={Link}
      to={props.url}
      className={clsx(classes.listItem, sidebarOpen ? classes.sidebarOpened : '')}
    >
      {props.icon ? (
        <ListItemIcon className={classes.listItemIcon}>{props.icon}</ListItemIcon>
      ) : null}
      <ListItemText className={classes.listItemText} classes={{ primary: classes.listItemText }}>
        {props.text}
      </ListItemText>
    </ListItem>
  );
};

export default SingleMenu;

export const useStyles = makeStyles((theme) => ({
  listItem: {
    textDecoration: 'none',
    padding: theme.spacing(1, 0),
    '&:hover *': {
      color: '#fff',
    },
    '&:hover': {
      backgroundColor: theme.colors.orange,
    },
  },
  listItemText: {
    fontFamily: 'fmedium',
    fontSize: 14,
    color: theme.colors.lightGray,
  },
  listItemIcon: {
    padding: theme.spacing(0, 3),
    minWidth: 'unset',
    marginRight: theme.spacing(1),
    color: theme.colors.gray,
    transition: '0.5s ease-out',
  },
  sidebarOpened: {
    '& $listItemIcon': {
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(2),
    },
  },
}));
