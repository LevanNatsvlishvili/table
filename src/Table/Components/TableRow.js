import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TableRow from '@material-ui/core/TableRow';


const CustomizedTableRow = (props, ref) => {
  const classes = useStyles()
  const { children, ...rest } = props
  return (
    <TableRow
      hover
      ref={ref}
      tabIndex={-1}
      className={classes.tableRowRoot}
      classes={{
        hover: classes.tableRowHover
      }}
      {...rest}
    >
      {children}
    </TableRow>
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
  tableRowHover: {
    transition: ' background-color .5s ease-out',
    '&:hover': {
      backgroundColor: '#F2F2F2!important',
    }
  },
}));

const ForwardedTableRow = React.forwardRef(CustomizedTableRow)

export default ForwardedTableRow;