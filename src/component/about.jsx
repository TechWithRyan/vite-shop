import React from 'react'
import Card from '@mui/material/Card';
import Me from '../../images/me1.jpg'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import './about.css'

function About() {
    return (
        <Box>
            <Grid className="grid-style">
                <div className="about-container">
                    <img src={Me} className="myphoto"></img>
                    <h1>Ryan-Phillips Iserhills Cornelio </h1>
                    <i>Web development in E-commerce</i>
                    <br />
                    <p>Welcome to the new page. My name is Ryan.</p>
                    <p>I enjoy working out and being active.</p>
                    <p>Wish you all the best.</p>
                </div>

            </Grid>
        </Box>
    )
}

export default About