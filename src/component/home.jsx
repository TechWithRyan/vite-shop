import React from 'react';
import './Home.css';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import A1 from '../../images/A1.jpeg'
import Grid from '@mui/material/Grid';
import { newProduct } from '../data';
import Products from './Products';

function Home() {
  return (


      <Grid>
        
        <section className="home-hero">
          <h1>Welcome to Good Game.</h1>
          <p className='hero-p'>We're just getting started.</p>
        </section>
        <button className='submit-btn'>Register</button>
        <button className='submit-btn'>Login</button>
      </Grid>

  

  );
}

export default Home