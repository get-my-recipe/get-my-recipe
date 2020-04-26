import React from "react";
import Button from "react-bootstrap/Button";

const Testfilteringredient = ({ value, handleInputChange, decrementIngr, incrementIngr }) => (
  <form>
    <input type="text" value={value} onChange={handleInputChange} />
    <Button onClick={decrementIngr}> - </Button>
    <Button onClick={incrementIngr}> + </Button>

  </form>
);

export default Testfilteringredient;
