import React from "react";
import "./StudentNotices.css";

const notices = [
  { date: "27/09/2025", title: "Contact Numbers related queries to Admission/Eligibility/Examination/Queries for Session 2025-26" },
  { date: "09/09/2025", title: "B.A. Semester I & II Prospectus 2025-26" },
  { date: "02/09/2025", title: "Personal Contact Programme Schedule for Academic Session 2024-25" },
  { date: "08/08/2025", title: "Prospectus for BCom(FYUG) Semester I Session 2025-26" },
  { date: "08/08/2025", title: "Notice for Online Admission for B. Com(FYUG) Semester I Session 2025-26" },
  { date: "31/07/2025", title: "List of B.Ed. Study Centers for Session 2024-25" },
  { date: "31/07/2025", title: "Examination Centers and City Codes for Session 2024-25" },
  { date: "31/07/2025", title: "Feedback Mechanism" },
  { date: "31/07/2025", title: "Frequently Asked Questions" },
  { date: "29/07/2025", title: "CDOE Academic Calender 2024-25" },
  { date: "09/06/2025", title: "UGC Guidelines for Pursuing Two Academic Programmes Simultaneously" },
  { date: "20/11/2024", title: "PG Odd Semester Roll No. Examination November-December, 2024-25 : FAQ" },
  { date: "12/11/2024", title: "UG Odd Semester Roll No. Examination November-December, 2024-25 : FAQ" },
];

const StudentNotices = () => {
  return (
    <div className="notice-container">
      <h2 className="notice-title">Centre for Distance and Online Education</h2>

      <div className="notice-section">
        <div className="notice-header">STUDENTS NOTICES</div>
        <table className="notice-table">
          <tbody>
            {notices.map((notice, index) => (
              <tr key={index}>
                <td className="notice-index">{index + 1}.</td>
                <td className="notice-date">{notice.date}</td>
                <td className="notice-text">
                  <a href="#" className="notice-link">
                    {notice.title}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentNotices;
