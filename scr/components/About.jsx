// About.jsx
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
const About = () => {
  return (
    <div className="about-container">
      <Outlet/>
      <h1 className="about-title">Welcome to Our About Page</h1>
      <p className="about-description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Nulla facilisi. Proin tempus vulputate justo, eu finibus libero maximus non. 
        Nunc sit amet dapibus tortor. Duis id augue vel tortor sollicitudin rhoncus. 
        Integer in semper metus.
        
      </p>
      <Link to="/about/profile"><button className="search-btn">Profile</button></Link>
    </div>


  );
};

export default About;
