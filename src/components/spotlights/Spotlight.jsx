import React from "react";
import "./Spotlight.css";

const Spotlight = () => {
  return (
    <div className="spotlight-main">
      <div className="spotlight-header">
        <h1>Skydio Spotlights.</h1>
      </div>
      <div className="cards">
        <div className="card-1">
          <div className="image"></div>
          <div className="line"></div>
          <div className="card-text">
            Collect quality insights anywhere with ultra-high resolution visual
            and radiometric thermal cameras.
          </div>
        </div>
        <div className="card-2">
          <div className="line-2"></div>
          <div className="card-text">
            Collect quality insights anywhere with ultra-high resolution visual
            and radiometric thermal cameras.
          </div>
          <div className="img-2-con">
            <div className="image-2"></div>
          </div>
        </div>
      </div>
      <div className="cards second">
        <div className="card-2">
          <div className="line-2"></div>
          <div className="card-text">
            Collect quality insights anywhere with ultra-high resolution visual
            and radiometric thermal cameras.
          </div>
          <div className="img-2-con">
            <div className="image-2"></div>
          </div>
        </div>
        <div className="card-1">
          <div className="image"></div>
          <div className="line"></div>
          <div className="card-text">
            Collect quality insights anywhere with ultra-high resolution visual
            and radiometric thermal cameras.
          </div>
        </div>
      </div>
      <div className="cards">
        <div className="card-1">
          <div className="image"></div>
          <div className="line"></div>
          <div className="card-text">
            Collect quality insights anywhere with ultra-high resolution visual
            and radiometric thermal cameras.
          </div>
        </div>
        <div className="card-2">
          <div className="line-2"></div>
          <div className="card-text">
            Collect quality insights anywhere with ultra-high resolution visual
            and radiometric thermal cameras.
          </div>
          <div className="img-2-con">
            <div className="image-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Spotlight;
