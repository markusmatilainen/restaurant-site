import React from "react";
import '../App.css';
import { FaTwitter } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';

function Footer() {

  const currentYear = new Date().getFullYear();

  return (
    <footer>
        <small>Copyright &copy; {currentYear} Restaurant Gustoso. All Rights Reserved</small>
        <div className="social-buttons">
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="twitter" />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="facebook" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="instagram" />
          </a>
        </div>
    </footer>
  );
}

export default Footer;