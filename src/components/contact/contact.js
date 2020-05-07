import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import NavBarShared from '../sharedcomponents/navbarshared/navbarshared';
import './contact.css';

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
    };
  }

  onSubmit = (event) => {
    event.preventDefault();
      alert(`${'Your message was sent successfully!'}`);
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <NavBarShared />
        <form className="contactUsForm">
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control style={{ fontFamily: 'helvetica' }} type="email" placeholder="Enter Name..." />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control style={{ fontFamily: 'helvetica' }} type="email" placeholder="Enter email..." />
            <Form.Text className="text-muted">
              We&apos;ll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <h2>Tell us your inspiration of the day:</h2>
          <textarea
            style={{ fontFamily: 'helvetica' }}
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
    );
  }
}

export default ContactForm;
