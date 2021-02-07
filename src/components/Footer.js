import React from "react";
import '../App.css';

function Footer() {

  const currentYear = new Date().getFullYear();

  return (
    <footer>
        <small>Copyright &copy; {currentYear} Restaurant Gustoso. All Rights Reserved</small>
    </footer>
  );
}

export default Footer;