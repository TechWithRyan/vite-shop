import React from 'react'
import Card from '@mui/material/Card';
import Ryan from '../../images/ryan.jpg'
import Max from '../../images/ryan.jpg'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import './about.css'

function About() {
    return (
        <Box>
            <Grid>
                <div class="about-container">
                    <section className="hero-image">
                        <Grid className="hero-text">
                            <img src={Ryan} className="myphoto"></img>
                            <div>
                                <h1>Ryan-Phillips Iserhills Cornelio </h1> <br></br><i>Web development in E-commerce</i><br /> <br />
                                 </div>
                                <p>Welcome to our new page. My name is Ryan.</p>
                                <p>I love working out and being active.</p>
                                <p>Our journey started 2020.</p>
                                <p>Wish you all the best, - Ryan.</p>
                            
                        </Grid>
                    </section>

                </div>
            </Grid>
        </Box>
    )
}

export default About