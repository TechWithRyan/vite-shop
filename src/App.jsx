import React from 'react';
import { Route, Routes } from "react-router-dom";
import About from './pages/About/about';
import Contact from './Pages/Contact/contact';
import Footer from './Pages/Footer/footer';
import Home from './Pages/Home/home';
import Login from './Pages/Admin/Login';
import Navbar from './Pages/Navbar/Navbar';
import Signup from './Pages/Admin/Signup';
import Store from './Pages/Store/Store';
import Addproducts from './Pages/Products/Addproducts';
import './App.css';

const App = () => {

  return (
    <>
      <div className='App'>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Store" element={<Store />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/About" element={<About />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Addproducts" element={<Addproducts />} />
        </Routes>
        <Footer />
      </div>

    </>
  );
}

export default App