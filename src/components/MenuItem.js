import React from "react";
import '../App.css';

function MenuItem({ day, main, dessert }) {
  return (
    <div className="menu-item">
        <h2>{day}</h2>
        <h3>Main dish</h3>
        <p>{main}</p>
        <h3>Dessert</h3>
        <p>{dessert}</p>
    </div>
  );
}

export default MenuItem;