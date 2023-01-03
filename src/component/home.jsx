import React from 'react';
import './index.scss';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import A1 from '../../images/A1.jpeg'
import Grid from '@mui/material/Grid';
import { newProduct } from '../data';
import Products from '../component/Products';

function Home(){
return (

  <Box>
        <section className="hero-image">
          <h1>Welcome to Good Game!</h1>
          <p className='hero-p'>We're just getting started</p>
        </section>
        
    </Box>

  );
}

  export default Home