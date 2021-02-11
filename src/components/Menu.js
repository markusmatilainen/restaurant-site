import React from "react";
import '../App.css';
import MenuItem from './MenuItem';

function Menu() {
  return (
    <div className="menu" id="menu">
        <div className="menu-text">
          <h2>Menu of the week</h2>
          <p>The price for lunch is 10 euros, and it includes the main dish, salad and dessert.</p>
        </div>
        <div className="menu-items">
          <MenuItem day="Monday" main="Pizza ai quattro formaggi" dessert="Panettone" />
          <MenuItem day="Tuesday" main="Lasagne" dessert="Crostata" />
          <MenuItem day="Wednesday" main="Pizza al taglio" dessert="Tiramisu" />
          <MenuItem day="Thursday" main="Pasta e fagioli" dessert="Biscotti" />
          <MenuItem day="Friday" main="Spaghetti" dessert="Gelato" />
        </div>
    </div>
  );
}

export default Menu;