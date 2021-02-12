import React from "react";
import '../App.css';

function Introduction() {
  return (
    <div className="introduction" id="introduction">
        <h1>Restaurant Gustoso</h1>
        <p className="intro-text">Restaurant Gustoso aims to be one of the finest Italian restaurant in Rome!
          Since 2006, we have been one of the most enjoyable places to sit down and enjoy meals
          during the day. Our menu consists of the most traditional and delicious Italian meals.
          Come and enjoy!
        </p>
        <div className="opening-times">
          <h3>We are open at following times:</h3>
          <p>Monday, Tuesday, Wednesday: 8am - 10pm</p>
          <p>Thursday, Friday: 9am - 11pm</p>
          <p>Saturday: 10am - 11pm</p>
          <p>Sunday: closed</p>
        </div>
    </div>
  );
}

export default Introduction;