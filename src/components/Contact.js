import React from "react";
import '../App.css';
import { FaPhone } from 'react-icons/fa';
import { FaStreetView } from 'react-icons/fa'
import { FaCity } from 'react-icons/fa'

function Contact() {
  return (
    <div className="contactareas">
      <div className="contactarea1" id="contact">
        <h2>Contact Us</h2>
        <p><FaPhone className="contact-icon" /> 123456789</p>
        <p><FaStreetView className="contact-icon" /> 95 Viale Eritrea</p>
        <p><FaCity className="contact-icon" /> Rome, Lazio</p>
      </div>
      <div className="contactarea2">
        <h2>Contact Form</h2>
        <form className="contactform" id="form">
          <div className="formcontainer">
            <label for="fname">First name</label>
            <input type="text" id="fname" name="fname" />
          </div>
          <div className="formcontainer">
            <label for="lname">Last name</label>
            <input type="text" id="lname" name="lname" />
          </div>
          <div className="formcontainer">
            <label for="email">Email</label>
            <input type="email" id="email" name="email" />
          </div>
          <textarea id="message" name="message" placeholder="Write your message here..." />
          <input type="submit" value="Submit" />
          <input type="reset" value="Reset" />
        </form>
      </div>   
    </div>
  );
}

export default Contact;