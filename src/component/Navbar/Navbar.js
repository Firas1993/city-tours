import React from 'react';

import logo from '../../logo.svg';

import './navbar.scss';
const Navbar = () => {
    return (
      <nav className="navbar">
        <img src={logo} alt="city tous company" />
        <ul className="nav-links">
          <li>
            <a href="/" className="nav-link">
              Home
            </a>
          </li>
          <li>
            <a href="/" className="nav-link">
              about
            </a>
          </li>
          <li>
            <a href="/" className="nav-link active">
              tours
            </a>
          </li>
        </ul>
      </nav>
    );
}

export default Navbar;
