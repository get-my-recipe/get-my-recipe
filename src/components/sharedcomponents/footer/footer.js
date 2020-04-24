import React from "react";
import "./footer.css";
import { Row } from 'react-bootstrap';
import { Col } from "react-bootstrap";
import twitter from "../../../assets/logos/twitter.png";
import facebook from "../../../assets/logos/facebook.png";
import insta from "../../../assets/logos/insta.png";


const Footer = () => (
  <Row lg={1}>
    <Col sm={12} lg={12}>
      <footer className="containerFooter">
        <ul className="footerList">
          <a href="https://www.linkedin.com/in/arnaud-duh%C3%A9-05a00b41/">
            Arnaud Duhé
          </a>
          <a href="https://www.linkedin.com/in/aline-sinclaire-b8998810b/?originalSubdomain=ca">
            Aline Sinclaire
          </a>
          <a href="https://github.com/cath974">Catherine Blecon</a>
        </ul>


        <ul className="footerList3">
          <img className="tw" src={twitter} alt="twitter logo" />
          <img className="fb" src={facebook} alt="facebook logo" />
          <img className="fb" src={insta} alt="facebook instagramme" />
        </ul>


        <ul className="copyRight">
          <p> &copy; Copyright 2020 </p>
        </ul>
      </footer>
    </Col>
  </Row>
);

export default Footer;
