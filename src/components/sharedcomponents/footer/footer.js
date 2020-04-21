import React from "react";
import "./footer.css";
import twitter from '../../../assets/logos/twitter.png';
import facebook from '../../../assets/logos/facebook.png';
import insta from '../../../assets/logos/insta.png';

const Footer = () => (
  <footer className="containerFooter">
    <ul className="footerList">
      <li>Catherine Blecon</li>
      <li>Arnaud Duhé</li>
      <li>Aline Sinclaire</li>
    </ul>

    <ul className="footerList3">
      <img className="twitter" src={twitter} alt="twitter logo" />
      <img className="fb" src={facebook} alt="facebook logo" />
      <img className="fb" src={insta} alt="facebook instagramme" />

    </ul>

    <div className="copyRight">
      <p> &copy; Copyright 2020 </p>
    </div>
  </footer>
);

export default Footer;
