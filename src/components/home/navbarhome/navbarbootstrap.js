import React from 'react';
import { Link } from 'react-router-dom';
import {
  Row, Col, Form, FormControl,
} from 'react-bootstrap';
import ButtonCarousel from '../buttoncarousel/buttoncarousel';
import logo from '../../../assets/images/logo.png';
import './navbarhome.css';

const NavBarBootstrap = ({ value, handleInputChange, book }) => (
  <div className="navbar-container">
    <Row className="nav-row">
      <Col className="nav-item-logo">
        <img className="logo-nav" src={logo} alt="logo" />
      </Col>
      <ButtonCarousel />
      <Col className="nav-item">
        <Link className="nav-link" to="/contact">Contact</Link>
      </Col>
      <Col className="nav-item">
        <Link className="nav-link" to="/about">About us</Link>
      </Col>
      <Col className="nav-item">
        <Link className="nav-link" to="/test">Test API</Link>
      </Col>
        <Form >
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
    </Row>
  </div>
);

export default NavBarBootstrap;
