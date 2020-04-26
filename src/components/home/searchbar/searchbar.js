import React from 'react';
import '../header/header.css';


const SearchBar = ({ value, handleInputChange, updateAPI }) => (
  <div className="searchbar-container">
    <form className="searchbar-form">
      <input
        className="searchbar-input"
        type="text"
        value={value}
        onChange={handleInputChange}
      />
      <button
        type="button"
        className="searchbar-button"
        onClick={updateAPI}
      >
        <strong>Search</strong>
      </button>
    </form>
  </div>
);

export default SearchBar;

