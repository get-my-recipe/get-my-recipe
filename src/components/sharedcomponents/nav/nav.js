import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import logo from '../../../assets/images/logo.png';
import './nav.css';

const Nav = () => (

  <Navbar collapseOnSelect expand="md" className="color-nav">
    <Navbar.Brand>
      <img src={logo} width="30%" className="d-inline-block align-top" alt="logo" />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/">Home</Link>
        </li>
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
  </Navbar>


);


export default Nav;
