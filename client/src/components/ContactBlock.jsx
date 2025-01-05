import { React } from "react";
import "../css/ContactPage.css";
import { AiFillLinkedin, AiOutlineMail } from "react-icons/ai";
import ContentBlock from "./ContentBlock";

const ContactBlock = () => (
  <ContentBlock
    halfed
    color="yellow"
    heading={"Contact"}
    content={
      <>
        <div style={{ display: "flex", alignItems: "center" }}>
          <AiOutlineMail size={20} style={{ paddingRight: "1em" }} />
          <p>Doyle-Tom@hotmail.com</p>
        </div>

        <div style={{ display: "flex", alignItems: "center" }}>
          <AiFillLinkedin size={20} style={{ paddingRight: "1em" }} />
          <a href="https://www.linkedin.com/in/thomas-doyle-791a45208/"> LinkedIn</a>
        </div>
      </>
    }
  />
);

export default ContactBlock;
