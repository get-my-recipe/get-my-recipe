import React from "react";
import "./about.css";
import NavBarShared from "../sharedcomponents/navbarshared/navbarshared";
import Aline from '../../assets/images/Aline.jpg';
import Arnaud from '../../assets/images/Arnaud.jpg';
import Catherine from '../../assets/images/Catherine.jpg';

const About = () => (
  <div>
    <NavBarShared />
    <div className="content-container">
      <h2 className="title">Why us ? </h2>
      <p className="paragraphe">
        Because we want to share our passion of cooking freely and to spread the
        joy of having a goodmeal. We are your inspiration, but you plan the
        rest!
      </p>
    </div>
    <div className="content-container reverse">
      <p className="paragraphe">
        We are web developpers that have a true passion for cooking! We
        developped this website to help you find recepies based on what you have
        available at home, or if you just want to include a specifique
        ingredient in one of your dish.
      </p>
      <h2 className="title">Who We Are?</h2>
    </div>
    <div className="cards-container">
      <div className="cards">
        <img className="card-image" src={Aline} alt="aline" />
        <a href="https://www.linkedin.com/in/aline-sinclaire-b8998810b/?originalSubdomain=ca">
          Aline Sinclaire
        </a>
      </div>
      <div className="cards">
        <img className="card-image" src={Catherine} alt="Catherine" />
        <a href="https://github.com/cath974">Catherine Blecon</a>
      </div>
      <div className="cards">
        <img className="card-image" src={Arnaud} alt="Arnaud" />
        <a href="https://www.linkedin.com/in/arnaud-duh%C3%A9-05a00b41/">
          Arnaud Duhé
        </a>
      </div>
    </div>
  </div>
);

export default About;
