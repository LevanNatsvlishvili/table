import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';


const TableCellTotal = (props) => {
  const classes = useStyles();
  const { children, ...rest } = props;
  return (
    <TableCell
      classes={{ root: classes.tableRowTotals }}
      component="th"
      scope="row"
      align="left"
      {...rest}>
      {children}
    </TableCell>
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

export default TableCellTotal;