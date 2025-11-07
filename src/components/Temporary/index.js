import React from 'react'

const TemporaryDashboard = ({pdfUrl,isDriveLink}) => {
  return (
    <div style={{ flexGrow: 1, height: "100vh" }}>
    {/* <iframe
        src={pdfUrl}
        title="PDF Viewer"
        style={{
        width: "100%",
        height: "100%",
        border: "none",
        }}
    ></iframe> */}
    {
        isDriveLink
        ?
        <iframe
        src={`${pdfUrl}preview`}
        style={{ width: "100%", height: "100%", border: "none" }}
        ></iframe>
        :
        <iframe
            src={`${pdfUrl}#toolbar=0&navpanes=0`}
            style={{ width: "100%", height: "100%", border: "none" }}
            />
    }
    </div>
  )
}

export default TemporaryDashboard