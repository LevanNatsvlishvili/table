import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import PaginationItem from '@material-ui/lab/PaginationItem';
import Box from '@material-ui/core/Box';


const TablePagination = (props) => {
  const classes = useStyles();

  const { handleChangePage, count } = props;
  return (
    <Box>
      <Pagination
        className={classes.Pagination}
        classes={{
          root: classes.PaginationRoot,
        }}
        count={count}
        onChange={handleChangePage}
        renderItem={(item) => (
          <PaginationItem
            classes={{
              selected: classes.selected
            }}
            {...item}
          />
        )}
      />
    </Box >

  );
}

const useStyles = makeStyles((theme) => ({
  PaginationRoot: {
    fontFamily: 'Firago-SemiBold',
    '& button': {
      fontFamily: 'family-SemiBold',
      color: '#6c6c6c',
      backgroundColor: '#fff',
      border: '1px solid #AFAFAF',
      borderRadius: 6,
    },
  },
  selected: {
    backgroundColor: '#ff4e00!important',
    color: '#fff!important',
  },
}));

export default TablePagination;