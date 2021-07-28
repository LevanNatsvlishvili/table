import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import PopUpClose from './PopUpHeaderClose';


const PopupHeader = (props) => {
  const { label, handleDrawer, } = props;
  const classes = useStyles();

  return (
    <div className={classes.header}>
      <Typography className={classes.PopupTitle}>{label}</Typography>

      <PopUpClose handleDrawer={handleDrawer} />
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  header: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '18px 48px',
    margin: 0,
    borderBottom: '3px solid #dddddd'
  },
  PopupTitle: {
    color: '#000000',
    fontSize: '14px',
    fontWeight: 'bold',
    margin: '0',
    padding: 0
  },
}));

export default PopupHeader;