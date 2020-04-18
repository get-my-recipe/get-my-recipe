import React from 'react';
import { Link } from 'react-router-dom';


const Nav = () => (
 
     <ul>
       <li><Link to = "/">Home</Link></li>
       <li><Link to = "/contact">Contact</Link></li>
       <li><Link to = "/about">About us</Link></li>
       <li><Link to = "/test">Test API</Link></li>
     </ul>

  
  );


export default Nav;