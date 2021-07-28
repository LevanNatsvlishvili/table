import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import IconText from 'components/textAndIcons/iconText';


const BoxPanelToolbar = (props) => {
  const classes = useStyles({
    margin: props.margin,
    width: props.width,
    padding: props.padding,
    paddingSm: props.paddingSm
  })
  const { title, icon, children, ...rest } = props;
  return (
    <Grid
      alignItems='center'
      className={classes.toolbar}
      container
      {...rest}>
      <Grid className={classes.iconContainer} item>
        <IconText
          fontWeight='700'
          fontSize='14px'
          lineHeight='12px'
          color='black'
          icon={icon}
          text={title}
        />
      </Grid>
      {children}
    </Grid>
  );
};


export default BoxPanelToolbar;

const useStyles = makeStyles((theme) => ({
  toolbar: {
    padding: props => theme.spacing(...(props.padding) || [0, 3.75]),
    minHeight: 60,
    background: '#fff',
    borderBottom: `1px solid ${theme.colors.lightBorder}`,
    borderTopLeftRadius: '6px',
    borderTopRightRadius: '6px',
    boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.101961)',
    width: props => props.width,
    margin: props => props.margin,
    [theme.breakpoints.down('sm')]: {
      padding: props => theme.spacing(...(props.paddingSm) || [0, 2]),

    },
  },

}));