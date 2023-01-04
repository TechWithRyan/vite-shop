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

      <span className='home-text'>
        <h1 data-text="Good Gains" className='neon'>Good Gains</h1>
        {/* <p>We're just getting started</p> */}
      </span>
        <button className='submit-btn'>Register</button>
        <button className='submit-btn'>Login</button>
    </Grid>



  );
}

export default Home