import React from 'react';
import NavBar from '../navbarhome/navbarhome';
import '../home.css';

const Header = ({ value, handleInputChange, book }) => (
  <div className="container-home-welcome-section">
    <NavBar
      value={value}
      handleInputChange={handleInputChange}
      book={book}
    />
    <div className="home-page-title">
      <h1>Get my recipe</h1>
    </div>
    <div className="container-home-image" />
  </div>
);

export default Header;
