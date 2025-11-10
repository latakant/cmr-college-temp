import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import "./App.css";
import Home from "./components/Home";
import AboutCMR from "./components/AboutUs";
import StudentNotices from "./components/Students";
import FacultyTable from "./components/Faculty";
import TemporaryDashboard from "./components/Temporary/TemporaryDashboard";
import CoursesTable from "./components/Course";
import { baData } from "./components/Course/baData";
import { bbaData } from "./components/Course/bbaData";
import { mbaData } from "./components/Course/mbaData";

import {
  PDF_FOR_ANTI_RAGGING,
  CONTACT_LINK,
  CDOE_PDF,
  pdfLinksMap,
  DYNAMICS_OF_HUMAN_BEHAVIOR_VIDEO_1, // ✅ corrected import
} from "./components/constant";

function App() {
  // Combine all course data arrays
  const allCourses = [...mbaData, ...bbaData, ...baData];

  // Flatten subjects to create dynamic <Route> entries
  const allSubjectRoutes = allCourses.flatMap((course) =>
    course.semesters.flatMap((sem) => sem.subjects)
  );

  return (
    <div className="app-container">
      <Header />
      <div className="main-container">
        <Sidebar />
        <div className="content-area">
          <h1 className="heading">Centre for Distance and Online Education</h1>
          <Routes>
            {/* Home */}
            <Route path="/" element={<Home />} />

            {/* Program Pages */}
            <Route
              path="/courses/MBA"
              element={<CoursesTable courseData={mbaData} />}
            />
            <Route
              path="/courses/BBA"
              element={<CoursesTable courseData={bbaData} />}
            />
            <Route
              path="/courses/BA"
              element={<CoursesTable courseData={baData} />}
            />

            {/* Other Static Routes */}
            <Route path="/student-notices" element={<StudentNotices />} />
            <Route path="/faculty-staff" element={<FacultyTable />} />
            <Route
              path="/anti-ragging"
              element={<TemporaryDashboard contentUrl={PDF_FOR_ANTI_RAGGING} />}
            />
            <Route
              path="/contact"
              element={<TemporaryDashboard contentUrl={CONTACT_LINK} />}
            />
            <Route path="/about" element={<AboutCMR />} />
            <Route
              path="/video"
              element={
                <TemporaryDashboard
                  contentUrl={DYNAMICS_OF_HUMAN_BEHAVIOR_VIDEO_1}
                />
              }
            />
            <Route
              path="/brochures"
              element={<TemporaryDashboard contentUrl={CDOE_PDF} />}
            />

            {/* Dynamic Subject Routes */}
            {allSubjectRoutes.map((subject) => {
              const pdfUrl = pdfLinksMap[subject.pdfKey];
              if (!pdfUrl) return null; // avoid rendering routes with missing keys

              return (
                <Route
                  key={subject.id}
                  path={subject.route}
                  element={
                    <TemporaryDashboard
                      contentUrl={pdfUrl}
                      isDriveLink={true}
                    />
                  }
                />
              );
            })}
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
