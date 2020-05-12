import React from 'react';
import Filter from './filter';
import Loader from '../loader/loader';
import '../home.css';


const SearchBar = ({
  value, handleInputChange, updateAPI, handleInputChangeIngr,
  diet, handleChangeDiet,
  vega, vege, peanut, treenutfree, sugar, alcool, handleInputVega,
  handleInputVege, handleInputPeanut, handleInputSugar, handleInputAlcool, handleInputNutFree,
  handleOnChangeCalories,
  handleOnChangeTime, isShowing, handleShow, show, handleClose, ingrText, dietText, veganText, vegeText, peanutText,
  treenutfreeText, sugarText, alcoolText, calText, timeText,

}) => (


  <div className="searchbar-container">
    <form className="searchbar-form">
      <button
        type="button"
        className="filter-button"
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
        placeholder="Type in ingredient(s)"
      />
      <button
        type="button"
        className="searchbar-button"
        onClick={updateAPI}
      >
        Search
      </button>

      {/* filter text */}
      <div>
        {(dietText !== 'no filter') && (
        <p>
          Diet =
          {dietText}
        </p>
        )}

        {(veganText) && <p>vegan </p>}
        {(vegeText) && <p>vegetarian</p>}
        {(peanutText) && <p>peanut-free</p>}
        {(treenutfreeText) && <p>tree-nut-free</p>}
        {(sugarText) && <p>sugar-conscious</p>}
        {(alcoolText) && <p>alcohol-free</p>}

        {(ingrText < 20) && (
        <p>
          Number max ingredients =
          {ingrText}
        </p>
        )}
        {(calText < 3000) && (
        <p>
          Number max calories =
          {calText}
        </p>
        )}
        {(timeText < 200) && (
        <p>
          Number max time =
          {timeText}
        </p>
        )}


      </div>


      {!isShowing
                  && (
                    <div className="container-loader-search">
                      <Loader />
                    </div>
                  )}
    </form>

  </div>
);

export default SearchBar;
