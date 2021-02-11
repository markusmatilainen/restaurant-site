import React from "react";
import './App.css';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Introduction from './components/Introduction';
import Menu from './components/Menu';
import ContactInfo from './components/ContactInfo';
import ContactForm from "./components/ContactForm";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Introduction} />
          <Route path="/menu" exact component={Menu} />
          <Route path="/contactinfo" exact component={ContactInfo} />
          <Route path="/contactform" exact component={ContactForm} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;