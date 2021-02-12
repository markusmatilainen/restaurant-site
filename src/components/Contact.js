import React from "react";
import '../App.css';

function Contact() {
  return (
    <div>
      <div className="contactarea1" id="contact">
        <h2>Contact Us</h2>
        <div className="contactinfo">
          <p>Phone: 123456789</p>
          <p>95 Viale Eritrea</p>
          <p>Rome, Lazio</p>
        </div>
      </div>
      <div className="contactarea2" id="form">
        <h2>Contact Form</h2>
        <form className="contactform">
          <div className="formcontainer">
            <label for="fname">First name:</label>
            <input type="text" id="fname" name="fname" />
          </div>
          <div className="formcontainer">
            <label for="lname">Last name:</label>
            <input type="text" id="lname" name="lname" />
          </div>
          <div className="formcontainer">
            <label for="email">Email Address:</label>
            <input type="email" id="email" name="email" />
          </div>
          <textarea id="message" name="message" placeholder="Write your message here..." />
          <input type="submit" value="Submit" />
          <input type="reset" />
        </form>
      </div>
    </div>
  );
}

export default Contact;