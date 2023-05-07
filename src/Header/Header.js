import React from 'react'
import './Header.css'
import PersonIcon from '@mui/icons-material/Person';
import { IconButton } from '@mui/material';
function Header() {
  return (
    <div className='header'>
        <IconButton>

    <PersonIcon fontSize='large' className='headerIcon'/>
        </IconButton>
    </div>
  )
}

export default Header