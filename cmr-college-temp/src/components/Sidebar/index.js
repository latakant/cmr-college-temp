import React from "react";
import "./sidebar.css";
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-section">
        <div className="sidebar-title">MENU</div>
        <ul className="sidebar-links">
          <li><NavLink to="/about">About Us</NavLink></li>
          <li><NavLink to="/courses">Courses</NavLink></li>
          <li><NavLink to="/faculty-staff">Faculty & Staff</NavLink></li>
          <li><NavLink to="/Student-notices">Student Notices</NavLink></li>
          <li><NavLink to="/brochures">CDOE Information Brochures</NavLink></li>
          <li><NavLink to="/journal">Indian Journal of Distance Education</NavLink></li>
          <li><NavLink to="/magazine">USOL Magazine</NavLink></li>
          <li><NavLink to="/ncte">NCTE</NavLink></li>
          <li><NavLink to="/research-projects">Research Projects</NavLink></li>
          <li><NavLink to="/contact">Contact Us</NavLink></li>
        </ul>
      </div>

      <div className="sidebar-section">
        <div className="sidebar-title">RELATED LINKS</div>
        <ul className="sidebar-links">
          <li><NavLink to="/notice-board">Notice Board</NavLink></li>
          <li><NavLink to="/admission-notices">Admission Notices</NavLink></li>
          <li><NavLink to="/annual-reports">Annual Reports</NavLink></li>
          <li><NavLink to="/assignments">Assignments & Papers</NavLink></li>
          <li><NavLink to="/ciqa">CIQA Reports</NavLink></li>
          <li><NavLink to="/grievance">Grievance Redressal</NavLink></li>
          <li><NavLink to="/hei">HEI Application</NavLink></li>
          <li><NavLink to="/mandatory-disclosure">Mandatory Disclosure</NavLink></li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
