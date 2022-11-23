import React from 'react'
import { Routes, Route } from "react-router-dom";
import Navbar from './component/navbar'
import Store from './component/store'
import Home from './component/home'
import Contact from './component/contact'
import About from './component/about'
import Footer from './component/footer'


function App() {
  return (
    <>

    <div>
    <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    <Footer />
    </div>

    </>
  );
}

export default App