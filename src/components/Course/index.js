import "./course.css";
//import { courseData } from "./courseData";
import { Link } from "react-router-dom";

function CoursesTable({ courseData }) {
  // Flatten the nested structure into a single list
  const allSubjects = courseData.flatMap((program) =>
    program.semesters.flatMap((semester) =>
      semester.subjects.map((subject) => ({
        program: program.program,
        semester: semester.semester,
        ...subject,
      }))
    )
  );

  return (
    <div className="courses-container">
      <div className="course-header">COURSES</div>

      <table className="course-table">
        <thead>
          <tr>
            <th>Course ID</th>
            <th>Course Name</th>
            <th>Semester</th>
            <th>Study Material</th>
          </tr>
        </thead>
        <tbody>
          {allSubjects.map((subject, index) => (
            <tr key={index}>
              <td>{subject.id}</td>
              <td>{subject.name}</td>
              <td>{subject.semester}</td>
              <td>
                <Link
                  to={subject.route}
                  className="po-link"
                  rel="noopener noreferrer"
                >
                  {subject.Study_Material}
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CoursesTable;

// import "./course.css";
// //import { courseData } from "./courseData";
// import { Link } from "react-router-dom";

// function CoursesTable({ courseData }) {
//   return (
//     <div className="courses-container">
//       <div className="course-header">COURSES</div>

//       {/* Loop through programs */}
//       {courseData.map((program, pIndex) => (
//         <div key={pIndex}>
//           <h2 className="program-title">{program.program}</h2>

//           {/* Loop through semesters */}
//           {program.semesters.map((semester, sIndex) => (
//             <div key={sIndex} className="semester-section">
//               <h3 className="semester-title">Semester {semester.semester}</h3>

//               {/* Loop through subjects */}
//               {semester.subjects.map((subject, subIndex) => (
//                 <div className="course-card" key={subIndex}>
//                   <table className="course-table">
//                     <tbody>
//                       <tr>
//                         <td className="label">Course ID</td>
//                         <td>{subject.id}</td>
//                       </tr>
//                       <tr>
//                         <td className="label">Name of the Course</td>
//                         <td>{subject.name}</td>
//                       </tr>
//                       <tr>
//                         <td className="label">Semester</td>
//                         <td>{semester.semester}</td>
//                       </tr>
//                       <tr>
//                         <td className="label">Study Material</td>
//                         <td>
//                           <Link
//                             to={subject.route}
//                             className="po-link"
//                             rel="noopener noreferrer"
//                           >
//                             {subject.Study_Material}
//                           </Link>
//                         </td>
//                       </tr>
//                     </tbody>
//                   </table>
//                 </div>
//               ))}
//             </div>
//           ))}
//         </div>
//       ))}
//     </div>
//   );
// }

// export default CoursesTable;
