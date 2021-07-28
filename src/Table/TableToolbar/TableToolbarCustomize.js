import React, { useState } from 'react';
import SquareButton from 'components/button/SquareButton';
import TableCustomize from './TableCustomize';
import Tooltip from '@material-ui/core/Tooltip';

const Customize = () => {
  const [open, setOpen] = useState(false)

  const handleCustomize = () => {
    setOpen(!open)
  };

  return (
    <>
      <Tooltip title="Customize">
        <span>

          <SquareButton
            open={open}
            onClick={handleCustomize}
          />
        </span>
      </Tooltip>
      <TableCustomize
        open={open}
        handleCustomize={handleCustomize}
      />
    </>
  );
};

export default Customize;