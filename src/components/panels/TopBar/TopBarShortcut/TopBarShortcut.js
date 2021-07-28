import React from 'react';
import { ButtonBase } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { topBarHeight } from 'consts';

const TopBarShortcut = (props) => {
  const { children, underline, color, ...rest } = props;
  const classes = useStyles({
    color: color,
    underline: underline,
  });

  return (
    <ButtonBase {...rest} className={classes.buttomContainer}>
      {children}
    </ButtonBase>
  );
};

export default TopBarShortcut;

const useStyles = makeStyles((theme) => ({
  buttomContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: topBarHeight,
    minWidth: '10ch',
    maxWidth: '40ch',
    overflow: 'hidden',
    padding: theme.spacing(1, 3),
    color: (props) => theme.colors[props.color],
    textDecoration: (props) => (props.underline ? 'underline' : 'none'),
    fontWeight: 'bold',
    borderRight: `2px solid ${theme.colors.lightBorder}`,
    cursor: 'pointer',
    transition: '0.2s all ease-in-out',
    '&:hover': {
      background: '#edeff1',
    },
    '&:first-child': {
      borderLeft: `2px solid ${theme.colors.lightBorder}`,
    },
  },
}));
