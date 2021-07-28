import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const IconText = (props) => {
  const classes = useStyles({
    color: props.color,
    fontSize: props.fontSize,
    lineHeight: props.lineHeight,
    fontWeight: props.fontWeight,
    imgSize: props.imgSize,
  });
  const { icon, text, ...rest } = props;
  return (
    <Grid className={classes.root} {...rest}>
      {icon ? <img src={icon} alt='filter' /> : null}
      <Typography style={!icon ? { margin: 0 } : null} variant='body1' >
        {text}
      </Typography>
    </Grid>

  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'transparent',
    display: 'flex',
    alignItems: 'center',
    '& p': {
      textTransform: 'none',
      color: (props) => theme.colors[props.color || 'orange'],
      fontSize: (props) => props.fontSize || '14px',
      lineHeight: (props) => props.lineHeight || '14px',
      fontWeight: (props) => props.fontWeight || 'bold',
      fontFamily: "fregular",
      marginLeft: 9,
    },
    '& img': {
      width: props => props.imgSize,
    }
  },
}));

export default IconText;