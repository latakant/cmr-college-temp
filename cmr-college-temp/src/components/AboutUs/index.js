import React from "react";
import "./Aboutus.css";

const AboutCMR = () => {
  return (
    <div className="about-container">
      {/* Banner Section */}
      <div className="about-banner">
        <img
          src="https://www.cmr.edu.in/wp-content/uploads/2025/01/19.about-cmru-min.png"
          alt="About CMR University"
          className="banner-image"
        />
        <div className="banner-text">
          <h1>About CMR University</h1>
        </div>
      </div>

      {/* Intro Section */}
      <section className="about-intro">
        <h3>Overview</h3>
        <p>
          CMR University (CMRU), Bangalore is a private university in the state of Karnataka, established under the Act 45 of 2013. The University fosters creative communities where new ideas are nurtured, new discoveries made, and new creations shared. CMRU works with the vision “To nurture creative thinkers who will drive positive global change.” CMR University aims to promote and undertake the advancement of university education across a plethora of disciplines viz architecture, design, engineering, law, management, economics & commerce, social sciences & humanities, education, and science studies. The University also aims to equip students with the required skills and knowledge to pursue a successful career in their chosen field of study.
        </p>
      </section>

      <section className="about-intro padding-0">
        <h3>Our Ethos</h3>
        <p>
            We believe that creativity is the key competence required to excel in this complex world, which is why independent thinkers, product leaders, artists, designers and innovators are the need of the hour. Our students learn creative concepts and design thinking regardless of their area of study. Students are evaluated on the basis of real-life skills such as teamwork, presentation, research and initiative. CMR University Bangalore fosters creative communities, where new ideas can be nurtured, new discoveries can be made and new creations can be shared.
        </p>
      </section>

      <section className="about-intro padding-0">
        <h3>Mission</h3>
        <ul>
            <li>To offer multi, inter and cross-disciplinary modular programmes with technology-enabled teaching-learning processes.</li>
            <li>To focus on research-led teaching and learning in an innovative and interdisciplinary learning environment; to create critical thinkers.</li>
            <li>To create leaders for knowledge based economy, with ethical demands of a society base.</li>

        </ul>
      </section>

      <section className="about-intro padding-0">
        <h3>CMR University Logo</h3>
        <p>
            The CMR University logo is inspired by that of the CMR Jnanadhara Trust, the University’s promoting body. The logo depicts a beautiful swan that is just about to take off from the waters, one that is reaching for the skies.The swan is the carrier of Goddess Saraswathi – the Goddess of Learning.
        </p>
        <p>
            It is said that the Swan with its sensitive beak has the power of discrimination – an ability to distinguish pure milk from a mixture of milk and water. The swan thus symbolizes discrimination between right and wrong, good and evil or the eternal and the transient. It is this ability to acquire and apply knowledge in a discerning manner, for the overall good of mankind, which closely aligns with the University’s ethos.
        </p>
        <p>
            Rooted in Indian tradition, this contemporary form of the Hamsa, the Swan wholly embodies the vision of CMR University.
        </p>
      </section>

      <section className="about-intro padding-0">
        <h3>Recognition & Approvals</h3>
        <div className="recognition-grid">
        <div className="recognition-card">AUI Membership</div>
        <div className="recognition-card">CMR University Act</div>
        <div className="recognition-card">CMR Private University Status</div>
        <div className="recognition-card">UGC Recognition</div>
        </div>
        </section>
    </div>
  );
};

export default AboutCMR;
