import React from "react";
import "./Customers.css";

const Customers = () => {
  return (
    <div className="customer-main">
      <div className="customer-header">
        <h1>Join the industry leaders that choose Skydio.</h1>
      </div>
      <div className="customer-container">
        <div className="customer-logo"></div>
        <div className="customer-logo"></div>
        <div className="customer-logo"></div>
        <div className="customer-logo"></div>
        <div className="customer-logo"></div>
      </div>
      <div className="customer-container">
        <div className="customer-logo"></div>
        <div className="customer-logo"></div>
        <div className="customer-logo"></div>
        <div className="customer-logo"></div>
        <div className="customer-logo"></div>
      </div>
      <h5 style={{ textAlign: "center", color: "gray" }}>
        THIS PRODUCT OR SERVICE HAS NOT BEEN APPROVED OR ENDORSED BY ANY
        GOVERNMENTAL AGENCY, AND THIS OFFER IS NOT BEING MADE BY AN AGENCY OF
        THE GOVERNMENT.
      </h5>
    </div>
  );
};

export default Customers;
