import React from "react";
import '../App.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header className="header">
      <Link to="/" className="app-link">Introduction</Link>
      <Link to="/menu" className="app-link">Menu</Link>
      <Link to="/contactinfo" className="app-link">Contact</Link>
      <Link to="/contactform" className="app-link">Form</Link>
    </header>
  );
}

export default Navbar;