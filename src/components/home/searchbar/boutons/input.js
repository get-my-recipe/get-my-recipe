import React from "react";
import Form from "react-bootstrap/Form";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";

const Input = () => (
  <div>
    <Form.Group>
      <Form.Row>
        <Form.Label column lg={2}>
          Ingredients you don&apos;t want :
        </Form.Label>
        <Col lg={6}>
          <Form.Control type="text" placeholder="Normal text" />
        </Col>
      </Form.Row>
    </Form.Group>
  </div>
);

export default Input;
