import React from "react";
import Form from "react-bootstrap/Form";

const Checkbox = () => (
  <div>
    <h2>Diet options :</h2>
    <Form>
      {["radio"].map((type) => (
        <div key={`inline-${type}`} className="mb-3">
          <Form.Check inline label="Vegan" type={type} id={`inline-${type}-1`} />
          <Form.Check inline label="Vegetarian" type={type} id={`inline-${type}-2`} />
          <Form.Check inline label="peanut-free" type={type} id={`inline-${type}-2`} />
          <Form.Check inline label="tree-nut-free" type={type} id={`inline-${type}-2`} />
          <Form.Check inline label="sugar-conscious" type={type} id={`inline-${type}-2`} />
          <Form.Check inline label="alcohol-free" type={type} id={`inline-${type}-2`} />


        </div>
      ))}
    </Form>
  </div>
);

export default Checkbox;
