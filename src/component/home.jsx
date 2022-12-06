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
    <Grid container justifyContent = 'center'>
      <Grid>
        <div className="main-top">
          <div className="main-header">Home</div>
          <div className=""><img src={A1} alt="shoes" /></div> 
        </div>      
        <div className="main-new-product">
          {newProduct.map((item) =>(
            <Products item = {item} key={item.id} />
          ))}
        </div>


          
        
      </Grid>
    </Grid>
    </Box>

  );
}

  export default Home