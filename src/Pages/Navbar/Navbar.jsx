import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css';
import Logga from '../../../images/logga.png'
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  const hide = () => setShowNavbar(false);
  const show = () => setShowNavbar(true);

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo"><img src={Logga}></img></div>
        <div className="menu-icon" onClick={handleShowNavbar} onBlur={hide} onFocus={show}>
          <MenuIcon />
        </div>
        <div className={`nav-elements ${showNavbar && 'active'}`}>

          <ul>
            <li><NavLink to="/" onClick={handleShowNavbar} onBlur={hide} onFocus={show}>Home</NavLink></li>
            <li><NavLink to="/About" onClick={handleShowNavbar} onBlur={hide} onFocus={show}>About</NavLink></li>
            <li><NavLink to="/Store" onClick={handleShowNavbar} onBlur={hide} onFocus={show}>Store</NavLink></li>
            <li><NavLink to="/Products" onClick={handleShowNavbar} onBlur={hide} onFocus={show}>Products</NavLink></li>
            <li><NavLink to="/Signup" onClick={handleShowNavbar} onBlur={hide} onFocus={show}>Signup</NavLink></li>
            <li><NavLink to="/Login" onClick={handleShowNavbar} onBlur={hide} onFocus={show}>Login</NavLink></li>
            <li><NavLink to="/Addproducts" onClick={handleShowNavbar} onBlur={hide} onFocus={show}>Addproducts</NavLink></li>
          </ul>

        </div>
      </div>
    </nav>
  )
}

export default Navbar