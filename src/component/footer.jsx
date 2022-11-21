import React from 'react'
import './index.scss'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

function Footer() {
  return (
    <div className="footer">
        <div className="socials">
        <a href="/">
            <FacebookIcon sx={{ fontSize: 50 }} />
        </a>
        <a href="/">
            <InstagramIcon sx={{ fontSize: 50 }} />
        </a>
        <a href="/">
            <YouTubeIcon sx={{ fontSize: 50 }} />
        </a>
        </div>
    </div>
  )
}

export default Footer