import React from 'react';
import InputBase from '@material-ui/core/InputBase';
import { makeStyles } from '@material-ui/core/styles';

const InputText = (props) => {
  const classes = useStyles({
    background: props.background,
    size: props.size,
    height: props.height,
    color: props.color,
    borderColor: props.borderColor
  });

  const { text, style, ...rest } = props;
  return (
    <InputBase
      fullWidth
      className={classes.inputField}
      inputProps={{
        autoComplete: 'new-password',
        form: {
          autocomplete: 'off',
        },
      }}
      {...rest} />
  );
}


const useStyles = makeStyles((theme) => ({
  inputField: {
    color: (props) => theme.colors[props.color || 'inputMain'],
    lineHeight: '12px',
    fontSize: (props) => props.size || '12px',
    border: '1px solid #DCDCDC',
    borderColor: props => theme.colors[props.borderColor || null],
    fontWeight: 'bold',
    padding: theme.spacing(0, 1),
    background: (props) => theme.colors[props.background || 'whitePure'],
    borderRadius: '6px',
    height: (props) => props.height || '38px',
  },
}));

export default InputText;