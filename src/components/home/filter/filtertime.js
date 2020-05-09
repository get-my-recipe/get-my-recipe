import React from "react";


const FilterTime =({timeMax,handleOnChangeTime}) => (

      <div>
        <h5>Choose the time max for the peparation in min:</h5>
     
        <div> {timeMax} </div>
        <input
          type="range"
          value={timeMax}
          min={5}
          max={200}
          onChange={handleOnChangeTime}
        />
      </div>
    );


export default FilterTime;
