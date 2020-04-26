import React from 'react';
import Header from './header/header';
import Cards from '../cards/cards';
import SearchBar from './searchbar/searchbar';
import DailyRecipe from './dailyrecipe/dailyrecipe';
import './home.css';

const Home = () => (
  <div>
    <Header />
    <SearchBar />
    <DailyRecipe />
    <Cards />
  </div>
);

export default Home;
