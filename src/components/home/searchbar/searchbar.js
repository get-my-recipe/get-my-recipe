import React from 'react';
import { Badge } from 'react-bootstrap';
import Filter from './filter';
import Loader from '../loader/loader';
import vegan from '../../../assets/health/vegan.png';
import vegeterian from '../../../assets/health/vegeterian.png';
import alcoollogo from '../../../assets/health/alcool.png';
import nut from '../../../assets/health/nut.png';
import peanutlogo from '../../../assets/health/peanut.png';
import sugarlogo from '../../../assets/health/sugar.png';
import '../home.css';


const SearchBar = ({
  value, handleInputChange, updateAPI, handleInputChangeIngr,
  diet, handleChangeDiet,
  vega, vege, peanut, treenutfree, sugar, alcool, handleInputVega,
  handleInputVege, handleInputPeanut, handleInputSugar, handleInputAlcool, handleInputNutFree,
  handleOnChangeCalories,
  handleOnChangeTime, isShowing, handleShow, show, handleClose, ingrText, dietText, veganText,
  vegeText, peanutText,
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
      <div className="active-filters">
        {(dietText !== 'no filter') && (
        <p className="single-active-filter">
          Specific Diet:
          {' '}
          <Badge className="badge-filter">{dietText}</Badge>
        </p>
        )}
        {(veganText) && (
          <img src={vegan} alt="logo" />
        )}
        {(vegeText) && (
          <img src={vegeterian} alt="logo" />
        )}
        {(peanutText) && (
          <img src={peanutlogo} alt="logo" />
        )}
        {(treenutfreeText) && (
          <img src={nut} alt="logo" />
        )}
        {(alcoolText) && (
          <img src={alcoollogo} alt="logo" />
        )}
        {(sugarText) && (
          <img src={sugarlogo} alt="logo" />
        )}
        {(ingrText < 20) && (
        <p className="single-active-filter">
          Ingredients max:
          {' '}
          <Badge className="badge-filter">{ingrText}</Badge>
        </p>
        )}
        {(calText < 3000) && (
        <p className="single-active-filter">
          Calories max:
          {' '}
          <Badge className="badge-filter">{calText}</Badge>
        </p>
        )}
        {(timeText < 200) && (
        <p className="single-active-filter">
          Maximum Time:
          {' '}
          <Badge className="badge-filter">{timeText}</Badge>
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
