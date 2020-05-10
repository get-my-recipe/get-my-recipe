import React from 'react';
import loaderlogo from '../../../assets/logos/loaderlogo.png';
import './loader.css';

const Loader = () => (
  <div className="loader-container">
    <img src={loaderlogo} alt="loaderlogo" className="loaderlogo" />
  </div>
);

export default Loader;
