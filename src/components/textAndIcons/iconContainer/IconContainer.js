import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

const IconContainer = (props) => {
  const classes = useStyles({
    background: props.background,
    width: props.width,
    height: props.height,
  });
  const { icon, size, ...rest } = props;
  return (
    <Box
      alignItems='center'
      justifyContent='center'
      display='flex'
      width={size || 40}
      height={size || 40}
      borderRadius='50%'
      className={classes.iconContainer}
      {...rest}>
      <img src={icon} alt="icon" />
    </Box>
  );
};


const useStyles = makeStyles((theme) => ({
  iconContainer: {
    backgroundColor: (props) => theme.colors[props.background || 'yellow'],
    '& img': {
      width: props => props.width,
      height: props => props.height,
    }
  },
}));

export default IconContainer;