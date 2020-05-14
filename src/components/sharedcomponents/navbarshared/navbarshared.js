
import React from 'react';
import { Link } from 'react-router-dom';
import {
  Navbar, Nav,
} from 'react-bootstrap';
import logo from '../../../assets/images/logo.png';
import './navbarshared.css';

const NavBarHome = ({ value, handleInputChange, book }) => (

  <Navbar expand="md">
    <Navbar.Brand>
      <Link className="nav-link-logo" to="/">
        <div>
          <img
            src={logo}
            alt="Logo to go to home"
            title="Click to go to homepage"
            className="logo-home"
          />
        </div>
      </Link>
    </Navbar.Brand>
    <Navbar.Toggle title="Menu" aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse className="flex-grow-0" id="responsive-navbar-nav">
      <Nav className="mr-auto">
        <Link className="nav-link" to="/contact">Contact us</Link>
        <Link className="nav-link" to="/about">About us</Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>


);


export default NavBarHome;
