import React from 'react';
import { Route, Routes } from "react-router-dom";
import About from './component/about';
import Contact from './component/contact';
import Footer from './component/Footer/footer';
import Home from './component/Home';
import Login from './component/Login';
import Navbar from './component/Navbar/Navbar';
import Signup from './component/Signup';
import Store from './component/Store';
import Cart from './Pages/Cart';
import Products from './Pages/Products';

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