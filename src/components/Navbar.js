import React from "react";
import '../App.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header className="header">
      <Link to="/" className="app-link">Introduction</Link>
      <Link to="/menu" className="app-link">Menu</Link>
      <Link to="/contact" className="app-link">Contact</Link>
    </header>
  );
}

export default Navbar;