import React from "react";
// import '../css/ResumeButton.css'
// import axios from 'axios'
// import  FileDownload  from 'js-file-download'

function ResumeButton() {
  return (
    <div className="ResumeButton">
      <a href="/api/resumeView"> View Resume!</a>
      <br />
      <a href="/api/resumeDownload"> Download Resume!</a>
    </div>
  );
}

export default ResumeButton;
