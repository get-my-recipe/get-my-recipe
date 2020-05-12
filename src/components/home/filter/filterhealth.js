
import React from 'react';

const FilterHealth = ({
  vega, vege, peanut, treenutfree, sugar, alcool, handleInputVega,
  handleInputVege, handleInputPeanut, handleInputSugar, handleInputAlcool, handleInputNutFree,
}) => (

  <div>

    <label
      htmlFor="veganDiet"
    >
      vegan
      <input
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
        id="vegeDiet"
        name="isVegetarian"
        type="checkbox"
        checked={vege}
        onChange={handleInputVege}
      />
    </label>
    <label
      htmlFor="peanutfreeDiet"
    >
      peanut free
      <input
        id="peanutfreeDiet"
        name="isPeanutFree"
        type="checkbox"
        checked={peanut}
        onChange={handleInputPeanut}
      />
    </label>

    <label
      htmlFor="sugar-conscious"
    >
      sugar conscious
      <input
        id="sugar-conscious"
        name="isSugarConscious"
        type="checkbox"
        checked={sugar}
        onChange={handleInputSugar}
      />
    </label>

    <label
      htmlFor="alcool-free"
    >
      alcool free
      <input
        id="alcool-free"
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
        name="isNutFree"
        type="checkbox"
        checked={treenutfree}
        onChange={handleInputNutFree}
      />
    </label>

  </div>

);


export default FilterHealth;
