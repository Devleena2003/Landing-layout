import React from "react";
import "./products.css";

const Products = () => {
  return (
    <div className="products-main">
      <div className="product-header">
        <h3>Skydio X10: Epic Optics</h3>
        <h1>Supercharge your sight.</h1>
      </div>
      <div className="cards">
        <div className="card-1">
          <div className="image"></div>
          <div className="card-text">
            Collect quality insights anywhere with ultra-high resolution visual
            and radiometric thermal cameras.
          </div>
          <div className="card-button">
            <button>Explore</button>
          </div>
        </div>
        <div className="card-2">
          <div className="image-2"></div>
        </div>
      </div>
      <div className="product-2">
        <div className="product-2-heading">
          <h3>Skydio X10: Onboard AI</h3>
          <h1>Turn complex jobs into completed jobs.</h1>
        </div>

        <div className="cards">
          <div className="card-2">
            <div className="image-2"></div>
          </div>
          <div className="card-1">
            <div className="image"></div>
            <div className="card-text">
              Collect quality insights anywhere with ultra-high resolution
              visual and radiometric thermal cameras.
            </div>
            <div className="card-button">
              <button>Explore</button>
            </div>
          </div>
        </div>
      </div>
      <div className="product-3">
        <div className="product-2-heading">
          <h3>Skydio X10: Onboard AI</h3>
          <h1>Turn complex jobs into completed jobs.</h1>
        </div>
        <div className="image-3"></div>
        <div className="card-text">
          Collect quality insights anywhere with ultra-high resolution visual
          and radiometric thermal cameras.
        </div>
        <div className="card-button">
          <button>Explore</button>
        </div>
      </div>
    </div>
  );
};

export default Products;
