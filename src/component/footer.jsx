import React from 'react'
import './index.scss'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';


function Footer() {
  return (
    

  
    <AppBar sx={{ background: '#0B4E79' }} 
    position="static"
    >
      <div className="footer"      
      >


        <a href="/">
            <FacebookIcon sx={{ fontSize: 35 }} />
        </a>
        <a href="/">
            <InstagramIcon sx={{ fontSize: 35 }} />
        </a>
        <a href="/">
            <YouTubeIcon sx={{ fontSize: 35 }} />
        </a>
    
      </div>
    </AppBar>

  )
}

export default Footer