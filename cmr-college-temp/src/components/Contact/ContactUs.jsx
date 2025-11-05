import React from "react";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <div className="cmr-container">
      {/* 🗺️ Map Section */}
      <div className="cmr-map">
        <iframe
          title="CMR University Location"
          src="https://www.google.com/maps/dir//Off,+Bagalur+Main+Rd,+near+Kempegowda+International+Airport,+Mitganahalli,+Hennur+Gardens,+Chagalahatti,+Bengaluru,+Karnataka+562149/@13.1175543,77.5730422,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3bae1bd82408da43:0xeebaa35808847cd5!2m2!1d77.6554441!2d13.1175674?entry=ttu&g_ep=EgoyMDI1MTEwMi4wIKXMDSoASAFQAw%3D%3D"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* Contact Section */}
      <h1 className="cmr-heading">Contact Us CMR University</h1>

      <table className="cmr-table">
        <thead>
          <tr>
            <th>CMR University (City Campus):</th>
            <th>CMR University (Lakeside Campus):</th>
            <th>CMR University (OMBR Campus):</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              #2, 3rd ‘C’ Cross, 6th ‘A’ Main, <br />
              2nd Block, HRBR Layout, <br />
              Kalyana Nagar, <br />
              Bangalore 560043, Karnataka, India. <br />
              <strong>Contact number:</strong> 93429 00666
            </td>
            <td>
              Off Hennur, Bagalur Main Road, <br />
              Chagalatti, <br />
              Bangalore 562149, Karnataka, India. <br />
              <strong>Contact number:</strong> 70220 07672
            </td>
            <td>
              No.5, Bhuvanagiri, <br />
              OMBR Layout, <br />
              Bangalore – 560043. <br />
              <strong>Contact number:</strong> 93799 06405, <br />
              080 – 25426955, 080 – 25426944
            </td>
          </tr>
        </tbody>
      </table>

      <div className="cmr-info-section">
        <h3>Reach out to us for more information:</h3>

        <div className="cmr-info-grid">
          <div className="cmr-info-item">
            <h4>Admissions Hotline:</h4>
            <p>93429 00666</p>
          </div>

          <div className="cmr-info-item">
            <h4>Call:</h4>
            <p>080-25426977 / 25426988 / 25427700</p>
          </div>

          <div className="cmr-info-item">
            <h4>Email:</h4>
            <p>
              info@cmr.edu.in <br />
              admissions@cmr.edu.in
            </p>
          </div>

          <div className="cmr-info-item">
            <h4>Office hours:</h4>
            <p>9.00 am to 5.00 pm (Monday – Saturday)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
