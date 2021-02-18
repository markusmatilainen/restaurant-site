import React, {useState} from "react";
import '../App.css';
import MenuItem from './MenuItem';

function Menu() {

  /**
   * The getDay() method returns the day of the week (from 0 to 6) for the specified date.
   * Note: Sunday is 0, Monday is 1, and so on.
   */

  var currentDay = new Date().getDay();
  const [day, setDay] = useState(currentDay);

  const changeDay = (dayNumber) => {
    setDay(dayNumber)
  };

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