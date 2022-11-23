import React from 'react';
import './index.scss';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import A1 from '../../images/A1.jpeg'


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


export default function Home() {
  return (
    <Box sx={{ width: '100%' }} height="100vh">

      <Stack spacing={2} padding="50px">
        <h1>Home
        </h1>
        <Item>
        <a href="/store">
        <img src={A1} width="50%" height="50%" />
        </a>
        </Item>


      </Stack>
    </Box>

  );
}
