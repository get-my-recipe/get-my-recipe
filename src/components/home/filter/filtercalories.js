import React from "react";

const FilterCalories =({caloriesMax,handleOnChangeCalories}) => (

      <div>
        <h5>Choose the number max of calories you want :</h5>
     
        <div> {caloriesMax} </div>
        <input
          type="range"
          value={caloriesMax}
          min={200}
          max={5000}
          onChange={handleOnChangeCalories}
        />
      </div>
    );


export default FilterCalories;
