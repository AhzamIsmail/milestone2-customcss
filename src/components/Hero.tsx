import React from "react";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <div id="hero" className="hero-container"
    >

     <Navbar />
     <div className="hero-content"> 
     <div className="hidden lg:block"></div>

      
     <div className="hero-text">
        <div className="hero-msin">
            <p data-aos="zoom-in-up">I am</p>
            <p data-aos="zoom-in-up">Ahzam </p>
            <p data-aos="zoom-in-up">Ismail</p>
        </div>
     </div>
     
     </div>
    </div>
  );
};

export default Hero;
