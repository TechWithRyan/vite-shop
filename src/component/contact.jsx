import React from 'react'
import Card from '@mui/material/Card';
import './index.scss'
import { styled } from '@mui/material/styles';

function Contact() {
    return (
        <div className="contact-container">
        <section className="hero-image">
         
       
            <h1>Contact</h1>
        <Card variant="outlined">

            <div className="container">
                <p>Phone: +46 760 581 267</p>
                <p>Email: ryan.cornelio@gmail.com</p>
            </div>
        </Card>
        </section>
        </div> 
    )
}

export default Contact