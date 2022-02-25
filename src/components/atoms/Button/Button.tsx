import * as React from 'react';
import {Button as MuiButton} from '@mui/material';

export type ButtonProps ={
    label?: string,
    color?: 'inherit' | 'primary'| 'secondary'| 'success'| 'error'| 'info'| 'warning',
    variant?: 'outlined' | 'contained' | 'text',
    startIcon?: React.ReactNode,
    endIcon?: React.ReactNode,
    disabled?: boolean,
    onClick?: ()=>void
}

const Button:React.FC<ButtonProps> = ({label,color,variant,startIcon,disabled,endIcon,onClick}) => {
  return (
      <MuiButton color={color} startIcon={startIcon} variant={variant} disabled={disabled} endIcon={endIcon} onClick={onClick}>{label}</MuiButton>
  );
}

export default Button;