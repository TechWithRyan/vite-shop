import React from 'react'
import Card from '@mui/material/Card';
import Ryan from '../../images/ryan.jpg'
import Max from '../../images/ryan.jpg'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import './index.scss'

function About() {
    return (
        <Box>
            <Grid>
                <div class="about-container">
                    <section className="hero-image">
                        <Grid className="hero-text">
                            <h1>About</h1>
                            <img src={Ryan} className="myphoto"></img>
                            <div>
                                <p>Training & suppliments. We love working out and being active.</p>
                                <p>Our journey started 2022.</p>
                                <div><br /> Ryan-Phillips Iserhills Cornelio <br /> <i>Web development in E-commerce</i><br /> Hi. I'm Ryan. I live in Kungälv. <br />
                                    I'm now looking for work where I can further expand my knowledge in web development. <br />Hope to hear from you. All the best, -Ryan. </div>
                            </div>
                        </Grid>
                    </section>

                </div>
            </Grid>
        </Box>
    )
}

export default About