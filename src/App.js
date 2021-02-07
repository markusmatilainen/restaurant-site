import React from "react";
import './App.css';
import MenuItem from './components/MenuItem'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app">

      <Navbar />

      <div className="introduction" id="introduction">
        <h1 className="restaurant-name">Restaurant Gustoso</h1>
        <p className="intro-text">Restaurant Gustoso aims to be one of the finest Italian restaurant in Rome!
          Since 2006, we have been one of the most enjoyable places to sit down and enjoy meals
          during the day. Our menu consists of the most traditional and delicious Italian meals.
          Come and enjoy!
        </p>
        <p>We are open at following times:</p>
        <b>Monday, Tuesday, Wednesday: 8am - 10pm</b>
        <b>Thursday, Friday: 9am - 11pm</b>
        <b>Saturday: 10am - 11pm</b>
        <b>Sunday: closed</b>
      </div>
      
      <div className="menu" id="menu">
        <h2>Menu of the week</h2>
        <p>The price for lunch is 10 euros, and it includes the main dish, salad and dessert.</p>
        <div className="menu-items">
          <MenuItem day="Monday" main="Pizza ai quattro formaggi" dessert="Panettone" />
          <MenuItem day="Tuesday" main="Lasagne" dessert="Crostata" />
          <MenuItem day="Wednesday" main="Pizza al taglio" dessert="Tiramisu" />
          <MenuItem day="Thursday" main="Pasta e fagioli" dessert="Biscotti" />
          <MenuItem day="Friday" main="Spaghetti" dessert="Gelato" />
        </div>
      </div>

      <div className="contactarea1" id="contact">
        <h2>Contact us</h2>
        <div className="contactinfo">
          <p>Phone: 123456789</p>
          <p>95 Viale Eritrea</p>
          <p>Rome, Lazio</p>
        </div>
      </div>

      <div className="contactarea2" id="form">
        <h2>... or use the form below</h2>
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
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" />
          </div>
          <textarea id="message" name="message" placeholder="Write your message here..." />
          <input type="submit" value="Submit" />
          <input type="reset" />
        </form>
      </div>

      <Footer />

    </div>
  );
}

export default App;
