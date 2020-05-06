import React from 'react';
import Nav from '../../sharedcomponents/nav/nav';
import Example from '../buttontestcarousel';
import './header.css';

const Header =({value, handleInputChange, book}) => (
  <div className="container-home-welcome-section">
    <div className="container-home-image">
      <Nav 
        value={value} 
        handleInputChange={handleInputChange}
        book={book}
      />
      <Example />
      <h1 className="home-page-title">Get my recipe</h1>
    </div>
  </div>
);

export default Header;
