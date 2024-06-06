import React from 'react'
import "./Navbar.css"

// importing react hooks
import { useLocation } from 'react-router-dom'
function Navbar() {
    const location = useLocation(); 

    if(location.pathname === '/login'){ 
        return null; 
    }

  return (
    <div className='navbar-wrapper'>
            <div className='logo-wrapper-navbar'>
                <span>Indiana.edu</span>
            </div>
            <ul className='navbar-links'>
                <li>
                    <a href='#'>About Us</a>
                </li>
                <li>
                    <a href='#'>Teams</a>
                </li>
                <li>
                    <a href='#'>Contact</a>
                </li>
                
            </ul>
            <button className='navbar-login-button'>login</button>
    </div>
  )
}

export default Navbar