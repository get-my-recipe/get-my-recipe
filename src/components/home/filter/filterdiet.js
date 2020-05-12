import React from 'react';
import '../searchbar/filter.css';

const FilterDiet = ({ diet, handleChangeDiet }) => (

  <div className="diet-selection">
    <h5>Particular diet </h5>
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
