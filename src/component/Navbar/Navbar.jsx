import { useState }  from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css';
import { SportsBasketball } from '@mui/icons-material';
import react from 'react';

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo"><SportsBasketball /></div>
        <div className="menu-icon" onClick={handleShowNavbar}>
        <SportsBasketball />
        </div>
        <div className={`nav-elements ${showNavbar && 'active'}`}>
        
        <ul>
          <li><NavLink to="/"  >Home</NavLink></li>
          <li><NavLink to="/About"  >About</NavLink></li>
          <li><NavLink to="/Store" >Store</NavLink></li>
          <li><NavLink to="/Products"  >Products</NavLink></li>
          <li><NavLink to="/Signup"  >Signup</NavLink></li>
          <li><NavLink to="/Login"  >Login</NavLink></li>
        </ul>

        </div>
      </div>
    </nav>
  )
}

export default Navbar