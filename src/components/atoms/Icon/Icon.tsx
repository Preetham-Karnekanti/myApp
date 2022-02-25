import * as React from 'react';
import SvgIcon from '@mui/material/SvgIcon';

export type IconProps ={
    path?: string,
    color?: 'inherit' | 'action' | 'disabled'| 'primary' | 'secondary' | 'error' | 'info'| 'success'| 'warning'
    viewBox?: string,
    onClick?: ()=>void
}

const Icon:React.FC<IconProps> = ({path, color,viewBox, onClick }) => {
  return (
    <SvgIcon color={color} viewBox={viewBox} onClick={onClick}>
        <path d={path} />
  </SvgIcon>
  );
}

export default Icon;