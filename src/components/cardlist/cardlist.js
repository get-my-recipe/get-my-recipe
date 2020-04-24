import React from 'react';
import RecipeCarousel from './carousel/carousel';


function CardList(props) {
  return (
    <div>
      <RecipeCarousel />
      <Cards />
    </div>

  );
}

export default CardList;
