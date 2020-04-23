import React from 'react';
import RecipeCarousel from './carousel/carousel';
import Cards from './cards/cards';


function CardList(props) {
  return (
    <div>
      <RecipeCarousel />
      <Cards />
    </div>

  );
}

export default CardList;
