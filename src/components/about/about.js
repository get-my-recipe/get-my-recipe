import React from 'react';
import './about.css';
import NavBarShared from '../sharedcomponents/navbarshared/navbarshared';
import Aline from '../../assets/images/Aline.jpg';
import Arnaud from '../../assets/images/Arnaud.jpg';
import Catherine from '../../assets/images/Catherine.jpg';

const About = () => (
  <div>
    <NavBarShared />
    <div className="content-container">
      <h2 className="title">Why us ? </h2>
      <p className="paragraphe">
        Because we want to share our passion for cooking freely and spread the
        joy of having a good meal. We bring you the inspiration, but you will cook yourself !
      </p>
    </div>
    <div className="content-container reverse">
      <p className="paragraphe">
        We are web developers who have a true passion for cooking and eating ! The idea of this web application is to give you a little help facing the lack of inspiration when it comes to cook. Here we provide a large data base of recipes that you'll be able to sort by ingredients but also diferent specifications. 
      </p>
      <h2 className="title">Who We Are?</h2>
    </div>
    <div className="cards-container">
      <div className="cards">
        <img className="card-image" src={Aline} alt="Aline" />
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
