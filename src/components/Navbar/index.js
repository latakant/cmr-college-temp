import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./nav.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo-section">
          <img src="/logo.png" alt="CDOE Logo" className="navbar-logo" />
          <div className="navbar-title">
            <h2>Centre for Distance and Online Education</h2>
            <p>CMR University, Bengaluru</p>
          </div>
        </div>

        <div
          className={`menu-toggle ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/courses">Courses</Link>
          </li>
          <li>
            <Link to="/admissions">Admissions</Link>
          </li>
          <li>
            <Link to="/students">Students</Link>
          </li>
          <li>
            <Link to="/results">Results</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
