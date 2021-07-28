import React, { useCallback } from 'react';
import CustomizeListField from './CustomizeListField';
import useTable from 'Store/TableContext';
import update from 'immutability-helper';


const TableCustomizeList = () => {
  const { headCells, setHeadCells } = useTable();

  const moveCell = useCallback((dragIndex, hoverIndex) => {
    const dragCell = headCells[dragIndex];
    setHeadCells(update(headCells, {
      $splice: [
        [dragIndex, 1],
        [hoverIndex, 0, dragCell],
      ],
    }));
  }, [headCells]);

  const renderCell = (headCell, index) => {

    if (headCell && headCell.id) return <CustomizeListField
      key={headCell.id}
      index={index}
      id={headCell.id}
      headCell={headCell}
      setHeadCells={setHeadCells}
      moveCell={moveCell} />;

    return null
  };

  return (
    <div>
      {headCells.map((headCell, index) => renderCell(headCell, index))}
    </div>
  );
}

export default TableCustomizeList;