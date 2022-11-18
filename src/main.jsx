import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Navbar from './component/Navbar'
import { StyledEngineProvider } from "@mui/material/styles" 
import Home from './component/Home'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StyledEngineProvider>
      <Navbar />
      <Home />
    </StyledEngineProvider>
  </React.StrictMode>
);
