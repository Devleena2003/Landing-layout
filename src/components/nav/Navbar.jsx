import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <div>
          <a href="#home">Logo</a>
        </div>
        <ul className="nav-links">
          <li className="nav-item">
            <a href="#home">Home</a>
          </li>
          <li className="nav-item">
            <a href="#about">About</a>
          </li>
          <li className="nav-item">
            <a href="#services">Services</a>
          </li>
          <li className="nav-item">
            <a href="#footer">Contact</a>
          </li>
        </ul>

        <div className="buttons">
          <button className="btn-1">Contact</button>
          <button className="btn-2">Support</button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
