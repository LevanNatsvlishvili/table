import React from 'react';
import TablePagination from './TablePagination';
import Box from '@material-ui/core/Box';

const TableBottom = (props) => {
  const { handleChangePage } = props;
  return (
    <Box
      ml='auto'
      padding={3}
      width='auto'>
      <TablePagination
        count={5}
        onChange={handleChangePage}
      />
    </Box>
  );
};

export default TableBottom