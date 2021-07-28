import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

const Main = (props) => {
  const classes = useStyles({
    padding: props.padding,
    paddingMd: props.paddingMd,
    minHeight: props.minHeight,
    background: props.background,
    width: props.width,
    margin: props.margin,
    border: props.border,
  })
  const { newClass, children, ...rest } = props;
  return (
    <Grid className={clsx(classes.BoxPanelMain, {
      [newClass]: newClass
    })}
      container
      {...rest}>
      {children}
    </Grid>
  );
};


export default Main;

const useStyles = makeStyles((theme) => ({
  BoxPanelMain: {
    padding: props => theme.spacing(...(props.padding) || [3.75]),
    minHeight: props => props.minHeight || 60,
    margin: props => theme.spacing(props.margin),
    background: props => theme.colors[props.background || 'whitePure'],
    boxShadow: props => props.background !== 'transparent' ? '0px 1px 3px rgba(0, 0, 0, 0.101961)' : null,
    width: props => props.width,
    borderBottomLeftRadius: '6px',
    borderBottomRightRadius: '6px',
    border: props => props.border,
    [theme.breakpoints.down('sm')]: {
      padding: props => theme.spacing(props.paddingMd || 2),
    },
  },

}));