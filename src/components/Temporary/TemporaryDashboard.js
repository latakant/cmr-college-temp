import React from "react";

const TemporaryDashboard = ({ contentUrl, isDriveLink }) => {
  const isYouTubeLink = (url) => {
    if (!url) return false;
    return url.includes("youtube.com") || url.includes("youtu.be");
  };

  const convertYouTubeToEmbed = (url) => {
    if (url.includes("youtu.be")) {
      return url.replace("youtu.be/", "www.youtube.com/embed/");
    }

    if (url.includes("watch?v=")) {
      return url.replace("watch?v=", "embed/");
    }

    return url;
  };

  return (
    <div style={{ flexGrow: 1, height: "100vh" }}>
      {/* <iframe
        src={contentUrl}
        title="PDF Viewer"
        style={{
        width: "100%",
        height: "100%",
        border: "none",
        }}
    ></iframe> */}
      {/* {
        isDriveLink
        ?
        <iframe
        title='Drive_View'
        src={`${contentUrl}preview`}
        style={{ width: "100%", height: "100%", border: "none" }}
        ></iframe>
        :
        <iframe
        title='PDF_View'
            src={`${contentUrl}#toolbar=0&navpanes=0`}
            style={{ width: "100%", height: "100%", border: "none" }}
            />
    } */}
      {isYouTubeLink(contentUrl) ? (
        <iframe
          title="YouTube_Video"
          src={convertYouTubeToEmbed(contentUrl)}
          style={{
            width: "100%",
            height: "100%",
            border: "none",
            background: "transparent",
          }}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : isDriveLink ? (
        <iframe
          title="Drive_View"
          src={`${contentUrl}preview`}
          style={{ width: "100%", height: "100%", border: "none" }}
        />
      ) : (
        <iframe
          title="PDF_View"
          src={`${contentUrl}#toolbar=0&navpanes=0`}
          style={{ width: "100%", height: "100%", border: "none" }}
        />
      )}
    </div>
  );
};

export default TemporaryDashboard;
