import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import './App.css';
import Home from './components/home/home';
import Contact from './components/contact/contact';
import About from './components/about/about';

import { Switch , Route } from 'react-router-dom' ;




class App extends Component {
 
  render() {
    return (
      <div> 
        <Switch>
          <Route exact path="/" component = {Home} />
          <Route path="/contact" component = {Contact} />
          <Route path="/about" component = {About} />
        </Switch>
      </div>  

    
    )
  }

}


export default App;
