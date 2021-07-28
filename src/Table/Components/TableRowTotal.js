import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TableRow from '@material-ui/core/TableRow';

const TableTotal = (props) => {
  const classes = useStyles();
  const { children, ...rest } = props;
  return (
    <TableRow
      colSpan={14}
      className={classes.tableRowTotals}
      {...rest}
    >
      {children}
    </TableRow>
  );
}

const useStyles = makeStyles((theme) => ({
  tableRowTotals: {
    fontSize: '13px',
    lineHeight: '14px',
    fontWeight: 'bold',
    padding: 0,
    height: '50px',
    background: '#F9F9F9',
    '& p': {
      fontWeight: 'bold'
    },
    '&:first-child': {
      paddingLeft: theme.spacing(1.75),
    },
    '&:last-child': {
      paddingRight: theme.spacing(1.75),
    },
  },
}));

export default TableTotal;