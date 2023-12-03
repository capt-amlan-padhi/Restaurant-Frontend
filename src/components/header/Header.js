// src/components/header/Header.js

import React from 'react';
import './Header.css';
import Navbar from '../Navbar/Navbar';
 // Make sure to create this CSS file

const Header = () => {
  return (
    <header className="header">
      <h1 style={{color: 'white'}}>Epicurean Symphony</h1>
      <Navbar/>
    </header>
  );
};

export default Header;
