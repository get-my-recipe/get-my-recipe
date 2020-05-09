import React from "react";
import Button from "react-bootstrap/Button";


const Filteringredient = ({
  valueIngr,
  handleInputChangeIngr,
  decrementIngr,
  incrementIngr,
}) => (
    <div>
    <h5>Maximum number of ingredients wanted : </h5>
    <input
      type="Number"
      value={valueIngr}
      onChange={handleInputChangeIngr}
    />

    <Button className="btn" onClick={decrementIngr}>-</Button>
    <Button onClick={incrementIngr}> + </Button>
    </div>
);

export default Filteringredient;
