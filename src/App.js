import { Switch, Route } from 'react-router-dom';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import './App.css';

import Home from './components/home/home';
import Contact from './components/contact/contact';
import About from './components/about/about';
import Footer from './components/sharedcomponents/footer/footer';
import Favourite from './components/favourite/favourite';

const App = () => (
  <div>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/contact" component={Contact} />
      <Route path="/about" component={About} />
      <Route path="/favourite" component={Favourite} />
    </Switch>
    <Footer />

  </div>

);

export default App;
