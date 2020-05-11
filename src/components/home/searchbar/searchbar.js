import React from 'react';
import '../home.css';
import '../header/header.css';
import Filter from './filter';
import Loader from '../loader/loader';


const SearchBar = ({
  value, handleInputChange, updateAPI, handleInputChangeIngr,
  diet, handleChangeDiet,
  vega, vege, peanut, treenutfree, sugar, alcool, handleInputVega,
  handleInputVege, handleInputPeanut, handleInputSugar, handleInputAlcool, handleInputNutFree,
  handleOnChangeCalories,
  handleOnChangeTime,isShowing,handleShow,show,handleClose

}) => (


  <div className="searchbar-container">
    <form className="searchbar-form">
      <button
        type="button"
        className="filter-button-test"
        onClick={handleShow}
      >
        Filters
      </button>

      <Filter
        show={show}
        handleClose={handleClose}
        handleInputChangeIngr={handleInputChangeIngr}
        diet={diet}
        handleChangeDiet={handleChangeDiet}
        vega={vega}
        vege={vege}
        peanut={peanut}
        treenutfree={treenutfree}
        sugar={sugar}
        alcool={alcool}
        handleInputVega={handleInputVega}
        handleInputVege={handleInputVege}
        handleInputPeanut={handleInputPeanut}
        handleInputSugar={handleInputSugar}
        handleInputAlcool={handleInputAlcool}
        handleInputNutFree={handleInputNutFree}
        handleOnChangeCalories={handleOnChangeCalories}
        handleOnChangeTime={handleOnChangeTime}
      />
      <input
        className="searchbar-input"
        type="text"
        value={value}
        onChange={handleInputChange}
        placeholder="Enter one or more ingredients"
      />
      <button
        type="button"
        className="searchbar-button"
        onClick={updateAPI}
      >
        Search
      </button>
      {!isShowing && 
                  (
                    <Loader />
                  )}
    </form>

  </div>
);

export default SearchBar;
