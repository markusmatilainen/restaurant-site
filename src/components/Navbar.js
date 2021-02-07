import React from "react";
import '../App.css';

function Navbar() {
  return (
    <header className="header">
        <a
          className="app-link"
          href="#introduction"
          rel="noopener noreferrer"
        >
          Introduction
        </a>
        <a
          className="app-link"
          href="#menu"
          rel="noopener noreferrer"
        >
          Menu
        </a>
        <a
          className="app-link"
          href="#contact"
          rel="noopener noreferrer"
        >
          Contact
        </a>
        <a
          className="app-link"
          href="#form"
          rel="noopener noreferrer"
        >
          Form
        </a>
    </header>
  );
}

export default Navbar;