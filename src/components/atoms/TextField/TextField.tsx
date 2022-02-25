import * as React from 'react';
import {TextField as MuiTextField} from '@mui/material';

export type TextFieldProps ={
    label?: string,
    color?: 'primary'| 'secondary',
    placeholder?: string,
    error?: boolean,
    onChange?: ()=>void,
    size?: 'medium' | 'small',
    variant?: 'filled' | 'outlined' | 'standard',
    helperText?: string,
    type?: string
    className?: string
}

const TextField:React.FC<TextFieldProps> = ({label, color, placeholder,error,onChange,size,variant, helperText, type, className}) => {
  return (
      <MuiTextField 
        className={className}
        label={label} 
        color={color} 
        placeholder={placeholder} 
        error={error} 
        onChange={onChange} 
        size={size} 
        variant={variant}
        helperText={helperText}
        type={type}
      >
      </MuiTextField>
  );
}
TextField.defaultProps = {
  size: 'small'
}

export default TextField;