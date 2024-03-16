import React from "react";
import "./Hero.css";
import "./header";

const Hero = () => {
  return (
    <section id="home">
      <div className="hero-container">
        <h2 className="hero-header">
          Every last detail.
          <div class="mask">
            <span data-show>For your mission.</span>
            <span>From a millimeter to a mile.</span>
            <span>Day or night.</span>
            <span>Rain or shine.</span>
          </div>
        </h2>
        <div className="hero-buttons">
          <button className="hero-btn-1">Explore</button>
          <button className="hero-btn-2">See announcement replay</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
