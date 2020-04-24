import React from 'react';
import Header from './header/header';
import Cards from '../cards/cards';
import SearchBar from './searchbar/searchbar';
import RecipeCarousel from './recipecarousel/recipecarousel';
import './home.css';

const Home = () => (
  <div>
    <Header />
    <SearchBar />
    <RecipeCarousel />
    <Cards />
  </div>
);

export default Home;
