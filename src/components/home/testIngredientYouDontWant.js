import React from "react";
import Form from "react-bootstrap/Form";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import "./testboutoncss.css";

const TestIngredientYouDontWant = ({ value, handleInputChange }) => (
  <Form.Group>
    <br />
    <Form.Row>
      
      <h5>&nbsp;Ingredient you don&rsquo;t want</h5>
      <Col lg={8}>
        <Form.Control
          type="text"
          value={value}
          placeholder="Type here"
          onChange={handleInputChange}
        />
      </Col>
    </Form.Row>
  </Form.Group>
);

export default TestIngredientYouDontWant;
