import React from "react";
import Form from "react-bootstrap/Form";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";

const TestIngredientYouDontWant = ({ value, handleInputChange }) => (
  <Form.Group>
    <Form.Row>
      <Form.Label column lg={2}>
        Ingredients you don&apos;t want :
      </Form.Label>
      <Col lg={6}>
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
