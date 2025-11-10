import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import "./App.css";
import Home from "./components/Home";
import AboutCMR from "./components/AboutUs";
import StudentNotices from "./components/Students";
import FacultyTable from "./components/Faculty";
import TemporaryDashboard from "./components/Temporary";
import CoursesTable from "./components/Course";
import { baData } from "./components/Course/baData";
import { bbaData } from "./components/Course/bbaData";
import { mbaData } from "./components/Course/mbaData";
import {
  PDF_FOR_ANTI_RAGGING,
  CONTACT_LINK,
  CDOE_PDF,
  pdfLinksMap,
} from "./components/constant";

function App() {
  const allCourses = [...mbaData, ...bbaData, ...baData];

  // Flatten all subject routes
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
            <Route path="/" element={<Home />} />
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
            <Route path="/student-notices" element={<StudentNotices />} />
            <Route path="/faculty-staff" element={<FacultyTable />} />
            <Route
              path="/anti-ragging"
              element={<TemporaryDashboard pdfUrl={PDF_FOR_ANTI_RAGGING} />}
            />
            <Route
              path="/contact"
              element={
                <TemporaryDashboard pdfUrl={CONTACT_LINK} isDriveLink={true} />
              }
            />
            <Route path="/about" element={<AboutCMR />} />
            <Route
              path="/brochures"
              element={<TemporaryDashboard pdfUrl={CDOE_PDF} />}
            />

            {/* 🧩 Auto-generated subject routes */}
            {allSubjectRoutes.map((subject) => {
              const pdfUrl = pdfLinksMap[subject.pdfKey];
              if (!pdfUrl) return null; // Skip if missing

              const isDrive = pdfUrl.includes("drive.google.com");
              return (
                <Route
                  key={subject.id}
                  path={subject.route}
                  element={
                    <TemporaryDashboard pdfUrl={pdfUrl} isDriveLink={isDrive} />
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
