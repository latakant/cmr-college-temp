import React from "react";
import "./home.css";

export default function Home() {
  return (
    <div className="right-content">
      {/* Hero banner */}
      <section className="hero">
        <div className="hero-text">
          <h1>A Growing Campus In India’s Silicon Valley</h1>
          <p>CMR University takes pride in its three campuses—HRBR Campus, OMBR Campus, and CMRIT near ITPL—each delivering a dynamic learning environment. Among them, the 60-acre Lakeside Campus, strategically located in the heart of North Bengaluru, stands out for its serene setting and exceptional connectivity. Easily accessible from Bellary Road and near the airport, it provides seamless commutation options, ensuring a convenient and enriching educational experience both inside and outside the classroom.</p>
          <a href="/apply" className="btn-apply">Apply Now</a>
        </div>
        <div className="hero-image">
          <img src="https://www.cmr.edu.in/wp-content/uploads/2025/05/campus_gallery_img-11-1.webp" alt="CMR University Campus" />
        </div>
      </section>

      {/* Programmes section */}
      <section className="programmes">
        <h2>Programmes Offered</h2>
        <div className="programme-cards">
          <div className="card">
            <h3>Undergraduate</h3>
            <p>Students can seek admission to undergraduate programmes via the selection process.</p>
          </div>
          <div className="card">
            <h3>Postgraduate</h3>
            <p>Students must fulfill specific educational requirements to seek admission to postgraduate programmes.</p>
          </div>
          <div className="card">
            <h3>Doctoral</h3>
            <p>Students need a recognized Master’s degree to seek admission to the Ph.D. programmes.</p>
          </div>
        </div>
      </section>

      {/* Admissions highlight */}
      <section className="admissions-info">
        <h2>Admissions Open AY 2025-26</h2>
        <p>CMR University provides a rigorous, academically-enriching experience. Admissions for the academic year 2025-26 are currently open. Gift yourself a fulfilling, global education that propels you towards your dream career. Complete the online application today!</p>
        <a href="/admissions" className="btn-secondary">Learn More</a>
      </section>
    </div>
  );
}
