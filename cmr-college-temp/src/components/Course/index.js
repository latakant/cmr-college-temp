import React from "react";
import "./course.css";

const courses = [
  {
    name: "B. Arch. | Bachelor Of Architecture",
    duration: "5 year",
    campus: "Lakeside Campus",
    fees: "75,000 per semester",
  },
  {
    name: "B.Des. Communication Design",
    duration: "4 year",
    campus: "Lakeside Campus",
    fees: "1,25,000 per semester",
  },
  {
    name: "B.Des. Communication Design",
    duration: "4 year",
    campus: "Lakeside Campus",
    fees: "1,25,000 per semester",
  },
];

function CoursesTable() {
  return (
    <div className="courses-container">
      <h2>We offer over 30 programmes</h2>

      <div className="course-header">COURSES</div>

      {courses.map((course, index) => (
        <div className="course-card" key={index}>
          <table className="course-table">
            <tbody>
              <tr>
                <td className="label">Name of the Course</td>
                <td>{course.name}</td>
              </tr>
              <tr>
                <td className="label">Duration</td>
                <td>{course.duration}</td>
              </tr>
              <tr>
                <td className="label">Campus</td>
                <td>{course.campus}</td>
              </tr>
              <tr>
                <td className="label">Fees</td>
                <td>{course.fees}</td>
              </tr>
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
}

export default CoursesTable;
