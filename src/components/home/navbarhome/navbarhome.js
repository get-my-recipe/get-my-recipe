import React from 'react';
import { Link } from 'react-router-dom';
import {
  Navbar, Form, FormControl, Nav
} from 'react-bootstrap';
import ButtonCarousel from '../buttoncarousel/buttoncarousel';
import logo from '../../../assets/images/logo.png';
import './navbarhome.css';

const NavBarHome = ({ value, handleInputChange, book }) => (

  <Navbar expand="lg">
    <Navbar.Brand>
      <img className="logo-nav" src={logo} alt="logo" />
    </Navbar.Brand>
    <ButtonCarousel />
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav>
        <Nav.Link className="nav-link" to="/contact">Contact</Nav.Link>
        <Nav.Link className="nav-link" to="/about">About us</Nav.Link>
        <Nav.Link className="nav-link" to="/test">Test API</Nav.Link>
        <Form inline>
          <FormControl
            type="text"
            placeholder="UserName"
            className="mr-sm-2"
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
      </Nav>
    </Navbar.Collapse>

  </Navbar>


);


export default NavBarHome;
