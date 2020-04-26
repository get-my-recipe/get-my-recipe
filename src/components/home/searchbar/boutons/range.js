import React from "react";
import Form from "react-bootstrap/Form";

const Range = () => (
  <div>
    <Form>
      <Form.Group controlId="formBasicRangeCustom">
        <Form.Label>Maximum Calories :</Form.Label>
        <Form.Control style={{ backgroundColor:'#edff71'}} type="range" custom />
      </Form.Group>
    </Form>
  </div>
);

export default Range;
