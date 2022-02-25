import * as React from 'react';
import { Avatar as MuiAvatar } from '@mui/material';

export type AvatarProps ={
    label?: string,
    onClick?: (event: React.MouseEvent<HTMLElement>)=>void
}

const Avatar:React.FC<AvatarProps> = ({label, onClick}) => {
  return (
    <div onClick={onClick}>
       <MuiAvatar>{label}</MuiAvatar>
    </div>
     
  );
}

export default Avatar;