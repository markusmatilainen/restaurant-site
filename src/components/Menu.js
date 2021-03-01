import React, {useState} from "react";
import '../App.css';
import MenuItem from './MenuItem';

function Menu() {

  /*
  Returns the number of the current day
  First value is 0 (Sunday), last value is 6 (Saturday)
  The number is assigned to the state 'day' as a default value
  */
  var currentDay = new Date().getDay();

  const [day, setDay] = useState(currentDay);

  /**
   * Changes the number of the 'day' state
   * @param {Integer} dayNumber - Number of the day that will be updated to the state
   */
  const changeDay = (dayNumber) => {
    setDay(dayNumber)
  };

  /**
   * Shows the food menu for the day defined in the state 'day'
   * @param {Integer} dayNumber - Number of the day that determines the menu to be shown
   */
  const renderMenu = (dayNumber) => {
    switch (dayNumber) {
      case 1:
        return <MenuItem day="Monday" main="Pizza ai quattro formaggi" dessert="Panettone" />;
      case 2:
        return <MenuItem day="Tuesday" main="Lasagne" dessert="Crostata" />;
      case 3:
        return <MenuItem day="Wednesday" main="Pizza al taglio" dessert="Tiramisu" />;
      case 4:
        return <MenuItem day="Thursday" main="Pasta e fagioli" dessert="Biscotti" />;
      case 5:
        return <MenuItem day="Friday" main="Spaghetti" dessert="Gelato" />;
      case 6:
        return <h2>No lunch for today</h2>;
      case 0:
        return <h2>Restaurant closed</h2>;
      default:
        break;
    }
  }

  return (
    <div className="menu">
        <div>
          <h2>Menu of the week</h2>
          <p>The price for lunch is 10 euros, and it includes the main dish, salad and dessert.</p>
          <button onClick={() => changeDay(1)}>Monday</button>
          <button onClick={() => changeDay(2)}>Tuesday</button>
          <button onClick={() => changeDay(3)}>Wednesday</button>
          <button onClick={() => changeDay(4)}>Thursday</button>
          <button onClick={() => changeDay(5)}>Friday</button>
          <button onClick={() => changeDay(6)}>Saturday</button>
          <button onClick={() => changeDay(0)}>Sunday</button>
        </div>
        {renderMenu(day)}
    </div>
  );
}

export default Menu;