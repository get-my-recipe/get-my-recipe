import React from 'react';
import { Link } from 'react-router-dom';
import {
  Navbar, Form, FormControl, Nav,
} from 'react-bootstrap';
import ButtonCarousel from '../buttoncarousel/buttoncarousel';
import logo from '../../../assets/images/logo.png';
import './navbarhome.css';

const NavBarHome = ({ value, handleInputChange, book }) => (

  <Navbar expand="md">
    <Navbar.Brand className="mr-0">
      <img className="logo-nav" src={logo} alt="logo" />
    </Navbar.Brand>
    <Form inline>

      <FormControl
        type="text"
        placeholder="UserName"
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
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse className="flex-grow-0" id="responsive-navbar-nav">
      <Nav className="mr-auto">
        <Link className="nav-link" to="/contact">Contact</Link>
        <Link className="nav-link" to="/about">About us</Link>
      </Nav>
      <ButtonCarousel />
    </Navbar.Collapse>
  </Navbar>


);


export default NavBarHome;
