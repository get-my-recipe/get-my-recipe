import React from "react";
import Button from "react-bootstrap/Button";

const Bouton = () => (
  <div>
    <Button
      variant="success"
      style={{ backgroundColor: "#edff71", color: "black" }}
    >
      -
    </Button>
    <Button
      style={{ backgroundColor: "#edff71", color: "black" }}
      variant="success"
    >
      +
    </Button>
  </div>
);

export default Bouton;
