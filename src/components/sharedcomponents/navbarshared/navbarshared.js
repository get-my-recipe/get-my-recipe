import React from 'react';
import { Link } from 'react-router-dom';
import {
  Navbar, Form, FormControl, Button,
} from 'react-bootstrap';
import logo from '../../../assets/images/logo.png';
import './navbarshared.css';

const NavBarShared = ({ value, handleInputChange, book }) => (

  <Navbar collapseOnSelect expand="md" className="color-nav">
    <Navbar.Brand>
      <Link className="nav-link" to="/">
        <div>
          <img
            src={logo}
            alt="button to go back to the homepage"
            className="logo-home"
          />
        </div>
      </Link>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <ul className="navbar-nav ml-auto">

        <li className="nav-item">
          <Link className="nav-link" to="/contact">Contact</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About us</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/test">Test API</Link>
        </li>
      </ul>
    </Navbar.Collapse>
    <Form inline>
      <FormControl
        type="text"
        placeholder="UserName"
        className="mr-sm-2"
        value={value}
        onChange={handleInputChange}
      />
      <Button
        variant="outline-success"
        onClick={book}
      >
        Bookmark
      </Button>
    </Form>
  </Navbar>


);


export default NavBarShared;
