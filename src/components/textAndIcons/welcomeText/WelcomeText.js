import React from 'react';
import Text from 'components/textAndIcons/text';
import Box from '@material-ui/core/Box';


const DomainPageTitle = (props) => {
  const { title, subTitle, ...rest } = props;
  return (
    <Box ml={10} mx={2} my={1.5} {...rest}>
      <Text
        fontSize='24px'
        lineHeight='17px'
        lineHeightMd='24px'
        fontWeight='700'
        color='black'>
        {title}
      </Text>
      <Text
        fontSize='16px'
        lineHeight='17px'
        fontWeight='350'
        margin={[2, 0, 0, 0]}
        color='mediumBlue'>
        {subTitle}
      </Text>
    </Box >
  );
};


export default DomainPageTitle;