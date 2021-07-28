import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';


const CustomizedTableCell = (props) => {
  const classes = useStyles()
  const { children, ...rest } = props;
  return (
    <TableCell
      classes={{ root: classes.tableRowRoot }}
      component="th"
      scope="row"
      align="left"
      {...rest}>
      {children}
    </TableCell>
  );
};

const useStyles = makeStyles((theme) => ({
  tableRowRoot: {
    fontSize: '13px',
    lineHeight: '14px',
    padding: 0,
    height: '50px',
    '&:first-child': {
      paddingLeft: theme.spacing(1.75),
      color: theme.colors.darkBlue
    },
    '&:last-child': {
      paddingRight: theme.spacing(1.75),
    },
  },
}));

export default CustomizedTableCell;