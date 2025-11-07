import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import "./App.css"; 
import Home from "./components/Home";
import AboutCMR from "./components/AboutUs";
import CoursesTable from "./components/Course";
import StudentNotices from "./components/Students";
import ContactUs from "./components/Contact/ContactUs";
import FacultyTable from "./components/Faculty";
import { DRIVE_LINK_FOR_ANTI_RAGGING, PDF_FOR_ANTI_RAGGING } from "./components/constant";
import TemporaryDashboard from "./components/Temporary";

function App() {
  return (
    <div className="app-container">
      <Header />
      <div className="main-container">
        <Sidebar />
        <div className="content-area">
          <h1 className="heading">Centre for Distance and Online Education</h1>
          <Routes>
            <Route path="/cmr-college-temp" element={<Home />} />
            <Route path="/about" element={<AboutCMR />} />
            <Route path="/courses" element={<TemporaryDashboard pdfUrl={DRIVE_LINK_FOR_ANTI_RAGGING} isDriveLink={true}/>} />
            <Route path="/student-notices" element={<StudentNotices/>} />
            <Route path="/faculty-staff" element={<FacultyTable/>} />
            <Route path="/anti-ragging" element={<TemporaryDashboard pdfUrl={PDF_FOR_ANTI_RAGGING}/>} />
            <Route path="/students" element={<div>Students Page</div>} />
            <Route path="/results" element={<div>Results Page</div>} />
            <Route path="/contact" element={<ContactUs/>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
