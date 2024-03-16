import React from "react";
import "./Dock.css";
const Dock = () => {
  return (
    <div className="dock-main">
      <div className="spotlight-header">
        <h1>Go further with Skydio.</h1>
      </div>
      <div className="dock-video"></div>
      <h3>Achieve autonomous, remote drone operations anywhere.</h3>
      <div className="dock-btn">
        <button>Explore Dock</button>
      </div>
      <div className="second-container">
        <div className="spotlight-header">
          <h1>The leader in autonomous flight. Nine years and counting.</h1>
        </div>
        <div className="product-card-container">
          <div className="product-card">
            <div className="product-image"></div>
            <div className="card-line"></div>
            <h2>Skydio X10</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Molestiae, illo?
            </p>
            <div className="product-btn">
              <button>Learn More</button>
            </div>
          </div>
          <div className="product-card">
            <div className="product-image"></div>
            <div className="card-line"></div>
            <h2>Skydio X10</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Molestiae, illo?
            </p>
            <div className="product-btn">
              <button>Learn More</button>
            </div>
          </div>
          <div className="product-card">
            <div className="product-image"></div>
            <div className="card-line"></div>
            <h2>Skydio X10</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Molestiae, illo?
            </p>
            <div className="product-btn">
              <button>Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dock;
