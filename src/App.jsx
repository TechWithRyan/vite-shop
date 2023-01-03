import React from 'react'
import { Routes, Route } from "react-router-dom";
import Navbar from './component/Navbar/Navbar'
import Store from './component/Store'
import Home from './component/Home'
import Contact from './component/contact'
import About from './component/about'
import Footer from './component/Footer/footer'
import Signup from './component/Signup'
import Login from './component/Login'
import Products from './Pages/Products'
import Cart from './Pages/Cart'
import { Toolbar } from '@mui/material';

function App() {
  return (
    <>

    <div>
    <Navbar />
      <Routes>
        <Route path="/Products" element={<Products />} />
        <Route path="/" element={<Home />} />
        <Route path="/Store" element={<Store />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
    <Footer />
    </div>

    </>
  );
}

export default App