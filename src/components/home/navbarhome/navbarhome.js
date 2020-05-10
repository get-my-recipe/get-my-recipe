import React from 'react';
import { Link } from 'react-router-dom';
import {
  Navbar, Form, FormControl, Container,
} from 'react-bootstrap';
import ButtonCarousel from '../buttoncarousel/buttoncarousel';
import logo from '../../../assets/images/logo.png';
import './navbarhome.css';

const NavBarHome = ({ value, handleInputChange, book }) => (

  <Navbar collapseOnSelect expand="md">
    <Navbar.Brand>
      <img className="logo-nav" src={logo} alt="logo" />
    </Navbar.Brand>
    <ButtonCarousel />
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Container className="nav-item">
        <Link className="nav-link" to="/contact">Contact</Link>
      </Container>
      <Container className="nav-item">
        <Link className="nav-link" to="/about">About us</Link>
      </Container>
      <Container className="nav-item">
        <Link className="nav-link" to="/test">Test API</Link>
      </Container>
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
    </Navbar.Collapse>

  </Navbar>


);


export default NavBarHome;
