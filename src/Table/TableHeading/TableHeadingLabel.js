import React from 'react';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from "prop-types";



const TableHeadingLabel = (props) => {
  const classes = useStyles();
  const { headCell } = props;

  const { order, orderBy, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableSortLabel
      className={classes.tableHeadingRootLabel}
      active={orderBy === headCell.id}
      direction={orderBy === headCell.id ? order : 'asc'}
      hideSortIcon={headCell.id === 'info' ? true : false}
      onClick={headCell.id === 'info' ? null : createSortHandler(headCell.id)}
      IconComponent={Icon}
    >
      {headCell.label}
      {orderBy === headCell.id ? (
        <span className={classes.visuallyHidden}>
          {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
        </span>
      ) : null}
    </TableSortLabel>
  );
}

TableHeadingLabel.propTypes = {
  headCell: PropTypes.object
};

function Icon() {
  return (
    <img style={{ marginLeft: 7 }} src='/icons/sort/sortGrey.svg' alt="" />
  );
}


const useStyles = makeStyles((theme) => ({
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
  tableHeadingRootLabel: {
    fontSize: '11px',
    fontWeight: 'bold',
    lineHeight: '11px',
    color: '#000',
    '&:hover': {
      color: '#ff4e00',
    },
    '&:focus': {
      color: '#ff4e00',
    },
    '&.MuiTableSortLabel-active': {
      color: '#ff4e00',
    },

  },
}));



export default TableHeadingLabel;