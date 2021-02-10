import React from "react";
import '../App.css';

function Navbar() {
  return (
    <header className="header">
        <a className="app-link" href="#introduction">Introduction</a>
        <a className="app-link" href="#menu">Menu</a>
        <a className="app-link" href="#contact">Contact</a>
        <a className="app-link" href="#form">Form</a>
    </header>
  );
}

export default Navbar;