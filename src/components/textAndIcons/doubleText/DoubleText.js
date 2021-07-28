import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const DoubleText = (props) => {
  const classes = useStyles({
    titleFontWeight: props.titleFontWeight,
    titleFontSize: props.titleFontSize,
    titleLineHeight: props.titleLineHeight,
    titleColor: props.titleColor,
    subTitleFontSize: props.subTitleFontSize,
    subTitleFontWeight: props.subTitleFontWeight,
    subTitleLineHeight: props.subTitleLineHeight,
    subTitleColor: props.subTitleColor,
    marginTop: props.marginTop,
    subTitleMT: props.subTitleMT,
    titleFontSizeSm: props.titleFontSizeSm,
    subTitleFontSizeSm: props.subTitleFontSizeSm,

  });

  const { title, subTitle, icon, ...rest } = props;
  return (
    <Box
      display='flex'
      ml={{ xs: 0, md: 2 }}
      flexDirection='column'
      className={classes.textContainer}
      {...rest}>
      <Typography variant='h6'>
        {title}
      </Typography>
      <Typography>
        {icon ? <Box mr={1} mb={-.25} className={classes.iconContainer} display='inline-block' >
          <img src={icon} alt="icon" />
        </Box> : null}
        {subTitle}
      </Typography>
    </Box>
  );
};


const useStyles = makeStyles((theme) => ({
  textContainer: {
    '& h6': {
      fontFamily: 'fRegular',
      fontWeight: props => props.titleFontWeight || 900,
      fontSize: props => props.titleFontSize || '22px',
      lineHeight: props => props.titleLineHeight || '28.12px',
      color: props => theme.colors[props.titleColor || 'black'],
    },
    '& p': {
      marginTop: props => theme.spacing(props.marginTop || 1.25),
      fontFamily: 'fRegular',
      fontWeight: props => props.subTitleFontWeight || 900,
      fontSize: props => props.subTitleFontSize || '14px',
      lineHeight: props => props.subTitleLineHeight || '16.8px',
      color: props => theme.colors[props.subTitleColor || 'black'],
    },
    [theme.breakpoints.down('sm')]: {
      '& h6': {
        fontSize: props => props.titleFontSizeSm || props.titleFontSize,
      },
      '& p': {
        fontSize: props => props.subTitleFontSizeSm || props.subTitleFontSize,
      },
    },
  },
  iconContainer: {
    '& img': {
      marginBottom: theme.spacing(-.25)
    }
  }
}));

export default DoubleText;