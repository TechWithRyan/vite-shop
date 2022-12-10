import React from 'react'
import Card from '@mui/material/Card';
import './index.scss'
import Ryan from '../../images/ryan.jpg'
import Max from '../../images/ryan.jpg'

function About() {
    return (
<div className="about-container">
<section className="hero-image">
            <h1>About</h1>

        
            <div className="container">
            <p>Training & suppliments. We love working out and being active.</p>
            <p>Our journey started 2022.</p>
                <div><img src={Ryan} width="auto" alt="Photo of me"/><br /> Ryan-Phillips Iserhills Cornelio <br /> <i>Web development in E-commerce</i><br /> Hi. I'm Ryan. I live in Kungälv. <br /> I'm now looking for work where I can further expand my knowledge in web development. <br />Hope to hear from you. All the best, -Ryan. </div>
            

            </div>
        </section>

</div>
    )
}

export default About