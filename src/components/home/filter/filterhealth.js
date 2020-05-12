import React from 'react';
import vegan from '../../../assets/health/vegan.png';
import vegeterian from '../../../assets/health/vegeterian.png';
import alcoollogo from '../../../assets/health/alcool.png';
import nut from '../../../assets/health/nut.png';
import peanutlogo from '../../../assets/health/peanut.png';
import sugarlogo from '../../../assets/health/sugar.png';
import '../searchbar/filter.css';

const FilterHealth = ({
  vega, vege, peanut, treenutfree, sugar, alcool, handleInputVega,
  handleInputVege, handleInputPeanut, handleInputSugar, handleInputAlcool, handleInputNutFree,
}) => (

  <div className="filter-health-container">
    <fieldset className="fieldset-filter">
      <legend>
        <img src={vegan} alt="vegan logo" />
        <img src={vegeterian} alt="logo" />
      </legend>
      <label
        htmlFor="veganDiet"
      >
        vegan
        <input
          className="filter-input"
          id="veganDiet"
          name="isVegan"
          type="checkbox"
          checked={vega}
          onChange={handleInputVega}
        />
      </label>
      <label
        htmlFor="vegeDiet"
      >
        vegeterian
        <input
          className="filter-input"
          id="vegeDiet"
          name="isVegetarian"
          type="checkbox"
          checked={vege}
          onChange={handleInputVege}
        />
      </label>
    </fieldset>
    <br />
    <fieldset className="fieldset-filter">
      <legend>
        <img src={peanutlogo} alt="logo" />
        <img src={alcoollogo} alt="logo" />
        <img src={nut} alt="logo" />
      </legend>
      <label
        htmlFor="peanutfreeDiet"
      >
        peanut free
        <input
          id="peanutfreeDiet"
          className="filter-input"
          name="isPeanutFree"
          type="checkbox"
          checked={peanut}
          onChange={handleInputPeanut}
        />
      </label>
      <label
        htmlFor="alcool-free"
      >
        alcool free
        <input
          id="alcool-free"
          className="filter-input"
          name="isAlcoolFree"
          type="checkbox"
          checked={alcool}
          onChange={handleInputAlcool}
        />
      </label>
      <label
        htmlFor="nutfreeDiet"
      >
        tree nut free
        <input
          id="nutfreeDiet"
          className="filter-input"
          name="isNutFree"
          type="checkbox"
          checked={treenutfree}
          onChange={handleInputNutFree}
        />
      </label>
    </fieldset>
    <br />
    <fieldset className="fieldset-filter">
      <legend>
        <img src={sugarlogo} alt="logo" />
      </legend>
      <label
        htmlFor="sugar-conscious"
      >
        sugar conscious
        <input
          id="sugar-conscious"
          className="filter-input"
          name="isSugarConscious"
          type="checkbox"
          checked={sugar}
          onChange={handleInputSugar}
        />
      </label>
    </fieldset>
  </div>

);


export default FilterHealth;
