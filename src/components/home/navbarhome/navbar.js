import React from 'react';
import {
  Nav, Navbar, Form, FormControl,
} from 'react-bootstrap';
import ButtonCarousel from '../buttoncarousel/buttoncarousel';
import logo from '../../../assets/images/logo.png';
import './navbarhome.css';

const NavBar = ({ value, handleInputChange, book }) => (


  <Navbar collapseOnSelect expand="xl">
    <Navbar.Brand>
      <img className="logo-nav" src={logo} alt="logo" />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Nav>
      <Nav.Link className="nav-link" to="/contact">Contact</Nav.Link>
      <Nav.Link className="nav-link" to="/about">About us</Nav.Link>
    </Nav>
    <Form>
      <FormControl
        type="text"
        placeholder="UserName"
        className="input-form"
        value={value}
        onChange={handleInputChange}
      />
      <button
        type="button"
        className="bookmark-button"
        onClick={book}
      >
        Bookmark
      </button>
    </Form>
  </Navbar>


);


export default NavBar;
