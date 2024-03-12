// Header.js
import React from 'react';
import Title from './Title';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header bg-blue-500 p-4">
      <Title />
      <div className="nav-items">
        <ul className="flex space-x-4">
        <li><Link to="/home" style={{ textDecoration: 'none', color: 'inherit', outline: 'none' }}>Home</Link></li>
        <li><Link to="/about"style={{ textDecoration: 'none', color: 'inherit', outline: 'none' }}>About</Link></li>
        <li><Link to="/contact"style={{ textDecoration: 'none', color: 'inherit', outline: 'none' }}>Contact</Link></li>
        <li><Link to="/cart"style={{ textDecoration: 'none', color: 'inherit', outline: 'none' }}>Cart</Link></li>

        </ul>
      </div>
    </div>
  );
};

export default Header;
