import { React, useEffect } from "react";
import "../css/ContactPage.css";
// import Child from './components/element'
// import Button from '@material-ui/core/Button'
// import TextField from '@material-ui/core/TextField'
import { AiFillLinkedin, AiOutlineMail } from "react-icons/ai";
import { SiAdobe } from "react-icons/si";

import ResumeButton from "../components/ResumeButton";

function ContactPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="mainBody">
      <div className="contentBlock">
        <h2>Contact:</h2>
        <div style={{ display: "flex", alignItems: "center" }}>
          <AiOutlineMail size={50} style={{ paddingRight: "1em" }} />
          <p>doyle-tom@hotmail.com</p>
        </div>

        <div style={{ display: "flex", alignItems: "center" }}>
          <AiFillLinkedin size={50} style={{ paddingRight: "1em" }} />
          <a href="https://www.linkedin.com/in/thomas-doyle-791a45208/"> Linked In</a>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <SiAdobe size={35} style={{ paddingRight: "1.5em", paddingLeft: ".4em" }} />
          <a href="https://tomdoyle.myportfolio.com/"> Another website of mine </a>
          <p>(Using Adobe Portfolio)</p>
        </div>
        <ResumeButton />
      </div>
    </div>
  );
}

export default ContactPage;
