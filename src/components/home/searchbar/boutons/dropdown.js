import React from "react";
import DropdownButton from "react-bootstrap/DropdownButton";

const Dropdown = () => (
  <div>
    <DropdownButton id="dropdown-basic-button" title="Diet type">
      <Dropdown.Item>balanced</Dropdown.Item>
      <Dropdown.Item>high-protein</Dropdown.Item>
      <Dropdown.Item>low-fat</Dropdown.Item>
      <Dropdown.Item>low-carbs</Dropdown.Item>
    </DropdownButton>
  </div>
);

export default Dropdown;
