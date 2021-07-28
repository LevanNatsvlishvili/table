import React from 'react';
import Box from '@material-ui/core/Box';
import IconContainer from 'components/textAndIcons/iconContainer';
import DoubleText from 'components/textAndIcons/doubleText';
import { Hidden } from '@material-ui/core';


const IconDoubleText = (props) => {
  const { iconProps, doubleTextProps } = props;
  return (
    <Box display='flex' alignItems='center' >
      <Hidden smDown>
        <IconContainer {...iconProps} />
      </Hidden>
      <Box>
        <DoubleText
          {...doubleTextProps} />
      </Box>
    </Box >
  );
};




export default IconDoubleText;