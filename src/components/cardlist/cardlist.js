import React from 'react';
import './cardList.css';
import Cards from './cards/cards';

function CardList(props) {
  return (
    <div className="cardlist-container">
      <container>
        <row>
          <Cards />
        </row>
      </container>
    </div>
  );
}

export default CardList;
