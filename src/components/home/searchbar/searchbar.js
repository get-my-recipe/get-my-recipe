import React from 'react';
import '../header/header.css';
import Filter from './filter';



const SearchBar = ({ value, handleInputChange, updateAPI , handleInputChangeIngr,
  diet, handleChangeDiet,
  vega, vege, peanut, treenutfree, sugar, alcool, handleInputVega
,handleInputVege,handleInputPeanut, handleInputSugar, handleInputAlcool,handleInputNutFree,
handleOnChangeCalories,
handleOnChangeTime

}) => (
  
  
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
      <div>
      <Filter
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
      handleOnChangeTime={handleOnChangeTime}/>
      </div>
    </form>

           
  </div>
);

export default SearchBar;


