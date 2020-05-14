import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
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
    const { message } = this.state;
    return (
      <div>
        <NavBarShared />
        <div className="containerForm">
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

            <Form.Label className="label2">Tell us your inspiration of the day:</Form.Label>
            <textarea
              placeholder="Write something here..."
              id="message-id"
              name="message"
              type="text"
              value={message}
              onChange={(event) => this.handleChange(event)}
              rows={6}
            />
            <Form.Text className="text-muted">
              We&apos;ll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Label className="label2">Tell us your inspiration of the day:</Form.Label>
          <textarea
            placeholder="Write something here..."
            id="message-id"
            name="message"
            type="text"
            value={message}
            onChange={(event) => this.handleChange(event)}
            rows={6}
          />
          <div className="buttonBox">
            <button
              type="submit"
              className="filter-button2"
              onClick={(event) => this.onSubmit(event)}
            >
              Send
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default ContactForm;
