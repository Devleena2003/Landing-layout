import React from "react";
import "./Services.css";
import { GiGraduateCap } from "react-icons/gi";
const Services = () => {
  return (
    <section id="services">
      <div className="service-container">
        <div className="video"></div>
        <div className="services-card">
          <div className="service">
            <div className="card-content">
              <div className="icon">
                <GiGraduateCap size={50} />
              </div>
              <div className="text">
                <h1>Build skills</h1>
                <p>
                  We offer a full catalog of courses through Skydio Academy. Get
                  started or dive deeper for certification.
                </p>
              </div>
            </div>
          </div>
          <div className="service">
            <div className="card-content">
              <div className="icon">
                <GiGraduateCap size={50} />
              </div>
              <div className="text">
                <h1>Build skills</h1>
                <p>
                  We offer a full catalog of courses through Skydio Academy. Get
                  started or dive deeper for certification.
                </p>
              </div>
            </div>
          </div>
          <div className="service">
            <div className="card-content">
              <div className="icon">
                <GiGraduateCap size={50} />
              </div>
              <div className="text">
                <h1>Build skills</h1>
                <p>
                  We offer a full catalog of courses through Skydio Academy. Get
                  started or dive deeper for certification.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="service-btn">
          <button>Explore Success Services</button>
        </div>
      </div>
    </section>
  );
};

export default Services;
