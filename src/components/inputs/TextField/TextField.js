import React from "react";
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';

const InputField = (props) => {
  const classes = useStyles()
  const { options, handleChange, value, ...rest } = props

  return (
    <TextField
      fullWidth
      value={value}
      onChange={handleChange}
      className={classes.root}
      SelectProps={{
        classes: {
          root: classes.selectRoot
        }
      }}
      InputProps={{
        disableUnderline: true,
        classes: {
          root: classes.root
        }
      }}
      {...rest}
    >
      {Array.isArray(options) ? options.map((option, index) => {

        return (
          <MenuItem
            disabled={value === option.value ? false : option.disabled}
            key={index}
            value={option.value || option.id}>
            {option.label}
          </MenuItem>
        )
      }) : null}
    </TextField>
  );
}

const useStyles = makeStyles((theme) => ({
  selectRoot: {
    padding: 10,
  },
  root: {
    fontSize: 13,
    fontWeight: 600,
  }
}));

export default InputField;