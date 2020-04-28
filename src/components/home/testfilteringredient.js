import React from "react";
import Button from "react-bootstrap/Button";
import "./testboutoncss.css";

const Testfilteringredient = ({
  value,
  handleInputChange,
  decrementIngr,
  incrementIngr,
}) => (
  <form>
    <br />
    <h5>Choose how many ingredients you want : </h5>
    <input
      style={{ width: "40px", marginRight: "20px", textAlign: 'center' }}
      type="text"
      value={value}
      onChange={handleInputChange}
    />

    <Button className="btn" onClick={decrementIngr}>
      {" "}
      -{" "}
    </Button>
    <Button onClick={incrementIngr}> + </Button>
  </form>
);

export default Testfilteringredient;
