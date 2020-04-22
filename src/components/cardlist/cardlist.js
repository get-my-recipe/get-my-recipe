import React from 'react';
import './Cardlist.css';
import Cards from './Cards/Cards';
import RecipeCarousel from './Carousel/Carousel'

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
