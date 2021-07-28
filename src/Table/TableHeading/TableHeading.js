
import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableHeadingLabel from './TableHeadingLabel';
import { makeStyles } from '@material-ui/core/styles';
import useTable from 'Store/TableContext';

export default function TableHeading() {
  const classes = useStyles();
  const { headCells } = useTable();

  if (Array.isArray(headCells) && headCells.length > 0) return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align='left'
            padding='none'
            className={classes.tableHeadingRoot}
            sortDirection={false}
          >
            <TableHeadingLabel headCell={headCell} />
          </TableCell>
        ))}
      </TableRow>
    </TableHead >
  );

  return null;
}


const useStyles = makeStyles((theme) => ({
  tableHeadingRoot: {
    padding: '17px 0 ',
    "&:first-child": {
      paddingLeft: theme.spacing(1.75),
    },
  },
}));