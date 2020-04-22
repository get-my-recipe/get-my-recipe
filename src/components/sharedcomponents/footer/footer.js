import React from 'react';
import './footer.css';
import twitter from "../../../assets/logos/twitter.png";
import facebook from "../../../assets/logos/facebook.png";
import insta from "../../../assets/logos/insta.png";

const Footer = () => (
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
      <img className="fb" src={twitter} alt="twitter logo" />
      <img className="fb" src={facebook} alt="facebook logo" />
      <img className="fb" src={insta} alt="facebook instagramme" />
    </ul>

    <div className="copyRight">
      <p> &copy; Copyright 2020 </p>
    </div>
  </footer>
);

export default Footer;
