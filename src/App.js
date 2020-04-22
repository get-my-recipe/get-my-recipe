import { Switch , Route } from 'react-router-dom';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import './App.css';

import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import TestAPI from './components/Home/TestApi';
import Footer from './components/sharedcomponents/Footer/Footer';

class App extends Component {
 
  render() {
    return (
      <div> 
        <Switch>
        <Route exact path="/" component = {Home} />
          <Route exact path="/test" component = {TestAPI} />
          <Route path="/contact" component = {Contact} />
          <Route path="/about" component = {About} />
        </Switch>
        <Footer />
      </div>
    );
  }


}

export default App;

