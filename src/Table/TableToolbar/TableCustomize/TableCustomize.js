import React from 'react';
import PopUp from 'components/popup/PopUp';
import TableCustomizeList from './TableCustomizeList/';
import AddNewField from './TableCustomizeNewField';
// import { Grid } from '@material-ui/core';
// import useReporting from '../../../store/reportingContext';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const TableCustomize = (props) => {
  const { open, handleCustomize } = props;

  return (
    <PopUp
      label='Customize Fields'
      handleDrawer={handleCustomize}
      open={open}>
      <div style={{ marginTop: '-10px' }}>
        <DndProvider backend={HTML5Backend}>
          <TableCustomizeList />
        </DndProvider>
      </div>
      <div>
        <AddNewField />
      </div>
    </PopUp>
  );
}

export default TableCustomize;