import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Introduction from './components/Introduction';
import Menu from './components/Menu';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Introduction} />
          <Route path="/menu" exact component={Menu} />
          <Route path="/contact" exact component={Contact} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;