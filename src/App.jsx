import React from 'react'
import { Routes, Route } from "react-router-dom";
import Navbar from './component/navbar'
import Store from './component/Store'
import Home from './component/home'
import Contact from './component/contact'
import About from './component/about'
import Footer from './component/footer'
import Signup from './component/Signup'
import Login from './component/Login'
import Products from './Pages/Products'

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
        <Route path="/about" element={<About />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Login" element={<Login />} />

      </Routes>
    <Footer />
    </div>

    </>
  );
}

export default App