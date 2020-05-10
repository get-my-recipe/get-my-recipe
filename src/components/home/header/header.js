import React from 'react';
import NavBarHome from '../navbarhome/navbarhome';
import '../home.css';

const Header = ({ value, handleInputChange, book }) => (
  <div className="container-home-welcome-section">
    <NavBarHome
      value={value}
      handleInputChange={handleInputChange}
      book={book}
    />
    <h1>Get my recipe</h1>
    <div className="container-home-image" />
  </div>
);

export default Header;
