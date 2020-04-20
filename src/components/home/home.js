import React from 'react';
import Header from './header/header';
import Nav from '../sharedcomponents/nav/nav';
import CardList from '../cardlist/cardlist';

const Home = () => (
  <div>
    <Nav />
    <Header />
    <CardList />
  </div>
);

export default Home;

