// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-black text-lime-500 p-4 flex justify-between items-center">
      <h1 className="text-2xl">Underw</h1>
      <nav>
        <ul className="flex space-x-4 text-2xl">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/products">Products</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
