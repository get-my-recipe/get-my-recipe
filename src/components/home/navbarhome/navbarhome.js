import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Form, FormControl, Button } from 'react-bootstrap';
import logo from '../../../assets/images/logo.png';
import './navbarhome.css';
import ButtonCarousel from '../buttoncarousel/buttoncarousel';

const NavBarHome = ({value, handleInputChange, book}) => (

  <Navbar collapseOnSelect expand="md" className="color-nav">
    <Navbar.Brand>
      <img src={logo} width="30%" className="d-inline-block align-top" alt="logo" />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <ButtonCarousel />
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
    <Form inline>
      <FormControl type="text" 
      placeholder="UserName" 
      className="mr-sm-2"
      value={value}
      onChange={handleInputChange}
       />
      <Button variant="outline-success"
        onClick={book}
      >Bookmark</Button>
    </Form>
  </Navbar>


);



export default NavBarHome;
