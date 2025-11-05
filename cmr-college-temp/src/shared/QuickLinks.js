import React from "react";

const linksLeft = [
  "Notice Board",
  "Admission Notices",
  "Annual Reports",
  "Assignments & Papers",
  "CIQA Reports"
];

const linksRight = [
  "Photo Gallery",
  "Prospectus",
  "Quotations",
  "SC / ST",
  "Scheme and Syllabi"
];

export default function QuickLinks() {
  return (
    <div className="quicklinks">
      <div className="quick-col">
        <ul>
          {linksLeft.map((l) => <li key={l}><a href={`/${l.toLowerCase().replace(/\s+/g,"-")}`}>{l}</a></li>)}
        </ul>
      </div>

      <div className="quick-center">
        <img src={process.env.PUBLIC_URL + "/campus.jpg"} alt="campus" className="hero-image" />
      </div>

      <div className="quick-col">
        <ul>
          {linksRight.map((l) => <li key={l}><a href={`/${l.toLowerCase().replace(/\s+/g,"-")}`}>{l}</a></li>)}
        </ul>
      </div>
    </div>
  );
}
