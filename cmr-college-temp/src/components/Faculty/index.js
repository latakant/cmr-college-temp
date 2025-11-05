import React from "react";
import "./faculty.css";

const FacultyTable = () => {
  const facultyData = [
        {
          name: "Dr. H.B Raghavendra",
          field: "School of Architecture",
          designation: "Vice Chancellor",
          cv: "#",
        },
        {
          name: "Dr. Praveen R",
          field: "School of Design",
          designation: "Pro Vice Chancellor",
          cv: "#",
        },
        {
          name: "Dr. Sanjay Tarachandra Jain",
          field: "School of Economics & Commerce",
          designation: "Pro Vice Chancellor",
          cv: "#",
        },
        {
          name: "Dr. H.B Raghavendra",
          field: "School of Architecture",
          designation: "Vice Chancellor",
          cv: "#",
        },
        {
          name: "Dr. H.B Raghavendra",
          field: "School of Architecture",
          designation: "Vice Chancellor",
          cv: "#",
        },
        {
          name: "Dr. H.B Raghavendra",
          field: "School of Architecture",
          designation: "Vice Chancellor",
          cv: "#",
        },
        {
          name: "Dr. Praveen R",
          field: "School of Design",
          designation: "Pro Vice Chancellor",
          cv: "#",
        },
        {
          name: "Dr. Sanjay Tarachandra Jain",
          field: "School of Economics & Commerce",
          designation: "Pro Vice Chancellor",
          cv: "#",
        },
        {
          name: "Dr. H.B Raghavendra",
          field: "School of Architecture",
          designation: "Vice Chancellor",
          cv: "#",
        },
        {
          name: "Dr. H.B Raghavendra",
          field: "School of Architecture",
          designation: "Vice Chancellor",
          cv: "#",
        },
  ];

  return (
    <section className="faculty-section">
      <h3 className="faculty-title">Faculty & Staff</h3>

      <table className="faculty-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>School of Studies</th>
            <th>Designation</th>
          </tr>
        </thead>
        <tbody>
          {facultyData.map((member, idx) => (
            <React.Fragment key={idx}>
              {/* <tr className="faculty-role">
                <td colSpan="4">{group.role}</td>
              </tr> */}
                <tr key={idx}>
                  <td>{member.name}</td>
                  <td>{member.field}</td>
                  <td>{member.designation || "-"}</td>
                </tr>
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default FacultyTable;