import React from 'react';
import TableToolbarSearch from './TableToolbarSearch';
import TableToolbarCustomize from './TableToolbarCustomize';
import Box from '@material-ui/core/Box';

const TableToolbar = ({ ...rest }) => {
  return (
    <Box
      height='60px'
      display='flex'
      alignItems='center'
      borderBottom='1px solid rgba(224, 224, 224, 1)'
      px={1.5}>
      <Box width='300px' ml='auto' mr={1}>
        <TableToolbarSearch {...rest} />
      </Box>
      <TableToolbarCustomize />
    </Box>
  );
};


export default TableToolbar;
