import React, { useState } from 'react';
import './Navbar3.css';
import logo from './img-home-logo.png';

const Navbar3 = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <div className="nav-container">
        <img src={logo} alt="Logo" className="logo" />
        <h1 className="website-name">MCM Phoenix</h1>
        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          <i className={menuOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
      
        <ul className={`nav-links ${menuOpen ? 'show-nav' : ''}`}>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/services">Services</a>
        </li>
        <li className='donate-btn'>
            <a href='/donate'>Donate</a>
        </li>
      </ul>

      </div>
    </nav>
  );
};

export default Navbar3;