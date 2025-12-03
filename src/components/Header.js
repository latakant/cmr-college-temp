import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header-container">
      <div className="header-top">
        <div className="header-left">
          <img
            src="https://www.cmr.edu.in/wp-content/uploads/2025/10/CMR-NAAC-LOGO.png"
            alt="Panjab University Logo"
            className="pu-logo"
          />
          <div className="pu-text">
            <h1>CMR University</h1>
            {/* <p>Established in 1882</p> */}
          </div>
        </div>

        <div className="header-right">
          <a href="/" className="header-link">
            Home
          </a>
          <a href="/mail" className="header-link">
            Log In
          </a>
          <a href="/contact" className="header-link">
            Sign Up
          </a>
        </div>
      </div>

      <div className="blue-bar"></div>
    </div>
  );
}

export default Header;
