
import React from 'react';
import './filterdiet.css';

const FilterDiet = ({ diet, handleChangeDiet }) => (

  <div className="diet-title">
    <h5>Choose your favorite diet : </h5>
    <select value={diet} onChange={handleChangeDiet}>
      <option value="no filter">No filter</option>
      <option value="balanced">Balanced</option>
      <option value="high-protein">High-protein</option>
      <option value="low-fat">Low-fat</option>
      <option value="low-carbs">Low-carbs</option>
    </select>
  </div>

);

export default FilterDiet;
