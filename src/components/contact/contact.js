import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import NavBarShared from "../sharedcomponents/navbarshared/navbarshared";
import "./contact.css";

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
    };
  }

  onSubmit = (event) => {
    event.preventDefault();
    alert(`${"Your message was sent successfully!"}`);
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <div className="containerForm">
        <div>
          <NavBarShared />
          <form className="contactUsForm">
            <Form.Group controlId="formBasicEmail">
              <Form.Label className="label2">Name</Form.Label>
              <Form.Control type="email" placeholder="Enter Name..." />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label className="label2">E-mail address</Form.Label>
              <Form.Control
                className="ligne"
                type="email"
                placeholder="Enter email..."
              />
              <Form.Text className="text-muted">
                We&apos;ll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <h2>Tell us your inspiration of the day:</h2>
            <textarea
              style={{ paddingLeft:"11px" }}
              placeholder="Write something here..."
              id="message-id"
              name="message"
              type="text"
              value={this.state.message}
              onChange={(event) => this.handleChange(event)}
              rows={8}
            />
            <p>
              <button onClick={(event) => this.onSubmit(event)} type="submit">
                Send
              </button>
            </p>
          </form>
        </div>
      </div>
    );
  }
}

export default ContactForm;
