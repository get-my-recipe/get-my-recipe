import React from 'react';
import '../header/header.css';
import Filteringredient from '../filter/filteringredient';
import FilterDiet from '../filter/filterdiet';
import FilterHealth from '../filter/filterhealth';
import FilterCalories from '../filter/filtercalories';
import FilterTime from '../filter/filtertime';
import FilterExcluded from '../filter/filterexcluded';
import Filter from './filter';



const SearchBar = ({ value, handleInputChange, updateAPI ,valueIngr, handleInputChangeIngr,
  decrementIngr, incrementIngr, diet, handleChangeDiet,
  vega, vege, peanut, treenutfree, sugar, alcool, handleInputVega
,handleInputVege,handleInputPeanut, handleInputSugar, handleInputAlcool,handleInputNutFree,
caloriesMax,handleOnChangeCalories,
timeMax,handleOnChangeTime

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
      <Filter
      valueIngr={valueIngr}
      handleInputChangeIngr={handleInputChangeIngr}
      decrementIngr={decrementIngr}
      incrementIngr={incrementIngr}
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
      caloriesMax={caloriesMax}
      handleOnChangeCalories={handleOnChangeCalories}
      timeMax={timeMax}
      handleOnChangeTime={handleOnChangeTime}/>
    </form>

    

            {/* form filtre à afficher ou pas */}
              {/* <form>
                  <div className="test-container">
                    
                      <Filteringredient
                        valueIngr={valueIngr}
                        handleInputChangeIngr={handleInputChangeIngr}
                        decrementIngr={decrementIngr}
                        incrementIngr={incrementIngr}
                      /> 

                      <FilterDiet
                        diet={diet}
                        handleChangeDiet={handleChangeDiet}
                      />
                      <FilterHealth
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
                       />
                       <FilterCalories
                       caloriesMax={caloriesMax}
                       handleOnChangeCalories={handleOnChangeCalories}
                       />
                       <FilterTime
                       timeMax={timeMax}
                       handleOnChangeTime={handleOnChangeTime}
                       />
                        <FilterExcluded /> 

                  </div>
            </form>    */}

  </div>
);

export default SearchBar;


