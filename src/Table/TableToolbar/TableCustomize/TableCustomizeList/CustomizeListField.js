import React, { useRef, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TableCellSelectField from './CustomizeListFieldSelect';
import TableCellRemove from './CustomizeListFieldRemove';
import useTable from 'Store/TableContext';
import { useDrag, useDrop } from 'react-dnd';
import { ItemTypes } from './ItemTypes';
import DragHandleIcon from '@material-ui/icons/DragHandle';

const CustomizeListField = ({ headCell, deleteCell, id, index, moveCell }) => {
  const classes = useStyles();
  const { headCells } = useTable();
  const headCellId = headCells.indexOf(headCell);
  const [onHover, setOnHover] = useState(false);

  const ref = useRef(null);
  const [{ handlerId }, drop] = useDrop({
    accept: ItemTypes.FIELD,
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    hover(item, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) {
        return;
      }
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
      moveCell(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.FIELD,
    item: () => { return { id, index } },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  drag(drop(ref));

  const onMouseEnterHandle = (ref) => {
    setOnHover(ref.current);
  }
  const onMouseLeaveHandle = () => {
    setOnHover(false);
  }
  const opacity = isDragging ? 0 : 1;

  return (
    <div
      ref={ref}
      className={classes.CustomizeField}
      onMouseEnter={() => onMouseEnterHandle(ref)}
      onMouseLeave={() => onMouseLeaveHandle()}
      style={{ opacity }}
      container
      alignItems='center'
      spacing={3}>
      <div className={classes.left}>
        <div className={classes.dragIcon}>
          {onHover ? <DragHandleIcon /> : null}
        </div>
        <TableCellSelectField headCell={headCell} headCellId={headCellId} />
      </div>
      <div xs={6} item>
        <TableCellRemove
          deleteCell={deleteCell}
          headCellId={headCellId} />
      </div>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  CustomizeField: {
    padding: '6px 45px 6px 20px',
    position: 'relative',
    borderBottom: '1px solid #dddddd',
    transition: '500ms',
    display: 'flex',
    justifyContent: 'space-between',
    '&:hover': {
      boxShadow: '0 2px 18px 0 rgba(0, 0, 0, 0.16)'
    }
  },
  dragIcon: {
    display: 'flex',
    width: 35,
    alignItems: 'center'
  },
  left: {
    display: 'flex'
  }
}));

export default CustomizeListField;