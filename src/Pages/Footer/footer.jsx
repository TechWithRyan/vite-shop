import React from 'react'
import './footer.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import AppBar from '@mui/material/AppBar';

function Footer() {
  return (
    <AppBar position="static">
      <div className="footer">
        <a href="/">
          <FacebookIcon sx={{ fontSize: 30 }} />
        </a>
        <a href="/">
          <InstagramIcon sx={{ fontSize: 30 }} />
        </a>
        <a href="/">
          <YouTubeIcon sx={{ fontSize: 30 }} />
        </a>
      </div>
    </AppBar>

  )
}

export default Footer