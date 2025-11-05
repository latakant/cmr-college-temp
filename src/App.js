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

function App() {
  return (
    <div className="app-container">
      <Header />
      <div className="main-container">
        <Sidebar />
        <div className="content-area">
          <Routes>
            <Route path="/cmr-college-temp" element={<Home />} />
            <Route path="/about" element={<AboutCMR />} />
            <Route path="/courses" element={<CoursesTable/>} />
            <Route path="/student-notices" element={<StudentNotices/>} />
            <Route path="/faculty-staff" element={<FacultyTable/>} />
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
