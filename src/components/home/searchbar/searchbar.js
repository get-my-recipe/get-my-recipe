import React from 'react';
import '../home.css';


const SearchBar = ({ value, handleInputChange, updateAPI }) => (
  <div className="searchbar-container">
    <form className="searchbar-form">
      <button
        type="button"
        className="filter-button-test"
      >
        Filters
      </button>
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
        Search
      </button>
    </form>
  </div>
);

export default SearchBar;
