import React from 'react';
import Cards from './cards/cards';
import RecipeCarousel from './carousel/carousel';
import '../cardlist/cardlist.css';

function CardList(props) {
  return (
    <div className="cardlist-container">
      <container>
        <row>
          <RecipeCarousel />
          <Cards />
        </row>
      </container>
    </div>
  );
}

export default CardList;
