import React from 'react'
import "./Navbar.css"
function Navbar() {
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