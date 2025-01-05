import { React, useEffect } from "react";
import "../css/HomePage.css";

// Components
import ProjectsBlock from "../components/ProjectsBlock";
import ContactBlock from "../components/ContactBlock";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ContentBlock from "../components/ContentBlock";

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="mainBody">
      <div className="bento">
        <div>
          <div className="detailsBox">
            <div className="detailsBoxInner">
              <div className="displayPic" />
              <h1>Thomas Doyle</h1>
              <hr className="displayHr" />
              <h3>Software Developer | Coffee connoisseur </h3>
              <hr className="displayHr" />
              <p>
                {" "}
                I am a full-stack software engineer, skilled in delivering rapid feature development while fostering
                effective teamwork. Holding dual bachelor&apos;s degrees in Computer Science and Media Arts, I excel in
                bridging technical proficiency with creative problem-solving. My strong communication skills enhance
                project delivery and ensure alignment with team objectives, driving successful outcomes in every
                endeavor.
              </p>
              <p>I make a mean cocktail, I&apos;m a horrible chess player and I love a late night gaming session :)</p>
            </div>
          </div>
          {/* <ContentBlock heading="About me" content={<></>} /> */}
        </div>
        <div>
          <ContentBlock
            color="purple"
            heading={"Professional Experience"}
            content={
              <>
                <h4>Company: Doshii</h4>
                <Accordion style={{ boxShadow: "none", color: "black", backgroundColor: "transparent" }}>
                  <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: "black" }} />}>
                    <div>
                      <h3>Software Engineer</h3>
                      <i>October 2023 to present</i>
                    </div>
                  </AccordionSummary>
                  <AccordionDetails>
                    <p>
                      Full-Stack Software engineer, delivering feature enhancements and platform maintenence to Doshii’s
                      core service.
                    </p>

                    <ul>
                      <li>
                        Spearheading enhancements to the Menu Management project, introducing advanced features such as
                        user session tracking, Single Sign-On (SSO), and comprehensive Venue Analytics, significantly
                        enriching the user experience.
                      </li>
                      <li>
                        Extended multiple Doshii integrations, empowering merchants to efficiently manage availability,
                        operating hours, and dynamic, time-specific menus, leading to improved operational efficiency
                        for merchants.
                      </li>
                      <li>
                        Architected and socialized technical solutions across various Doshii products and features,
                        influencing key technical decisions and product road maps to align with business objectives.
                      </li>
                    </ul>
                  </AccordionDetails>
                </Accordion>
                <Accordion style={{ boxShadow: "none", color: "black", backgroundColor: "transparent" }}>
                  <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: "black" }} />}>
                    <div>
                      <h3>Junior Software Engineer</h3>
                      <i>January 2022 to October 2023</i>
                    </div>
                  </AccordionSummary>
                  <AccordionDetails>
                    <p>
                      Full-Stack Software engineer, delivering feature enhancements and platform maintenence to Doshii’s
                      core service.
                    </p>

                    <ul>
                      <li>
                        Developed the Menu Manager, a robust web application enabling Doshii merchants to seamlessly
                        manage menus across multiple apps, enhancing their operational capabilities.
                      </li>
                      <li>
                        Maintained 100% test coverage for customer-facing applications by implementing a rigorous unit,
                        integration, and end-to-end testing strategy, ensuring high reliability and performance.
                      </li>
                      <li>
                        Architected and socialized technical solutions across various Doshii products and features,
                        influencing key technical decisions and product road maps to align with business objectives.
                      </li>
                      <li>
                        Delivered timely ad hoc product patches to address emerging issues, showcasing adaptability and
                        commitment to maintaining product integrity.
                      </li>
                    </ul>
                  </AccordionDetails>
                </Accordion>
              </>
            }
          />
          <div className="innerBento">
            <ContentBlock
              halfed
              color="blue"
              heading={"Language Proficiencies"}
              content={
                <>
                  <ul>
                    <li className="skillsLi">JavaScript (MERN)</li>
                    <li className="skillsLi">Python</li>
                    <li className="skillsLi">C</li>
                    <li className="skillsLi">Java</li>
                    <li className="skillsLi">Unix</li>
                    <li className="skillsLi">Terraform / TerraGrunt</li>
                    <li className="skillsLi">PostgresQL</li>
                  </ul>
                </>
              }
            />
            <ContactBlock />
          </div>
        </div>
        <div>
          <ContentBlock
            color="orange"
            heading={"Education"}
            content={
              <>
                <h4>University of New South Wales:</h4>
                <i>Bachelor of Computer Science / Bachelor of Media Arts (Double Degree)</i>
                <h4>2017- 2021</h4>
                <p>
                  During my time I | Computer Systems Fundamentals | Software Engineering Fundamentals | Data Structures
                  and Algorithms | O-O Design & Programming | Extended Security Engineering | Computer Networks &
                  Applications | Concepts of Programming Languages
                </p>
                <Accordion style={{ boxShadow: "none" }}>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <h3>Computer Science Subjects:</h3>
                  </AccordionSummary>
                  <AccordionDetails>
                    <p>
                      Introduction to Programming | Computer Systems Fundamentals | Software Engineering Fundamentals |
                      Data Structures and Algorithms | O-O Design & Programming | Extended Security Engineering |
                      Computer Networks & Applications | Concepts of Programming Languages | Operating Systems |
                      Algorithms & Programming Tech | Securing Fixed & Wireless Networks | Web Application Security |
                      Security Assessment | Digital Forensics | Mathematics 1A | Mathematics 1B | Discrete Mathematics |
                      Management and Ethics | Computer Science Project
                    </p>
                  </AccordionDetails>
                </Accordion>
                <Accordion style={{ boxShadow: "none" }}>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <h3>Media Arts Subjects:</h3>
                  </AccordionSummary>
                  <AccordionDetails>
                    <p>
                      Studio Gpteway 1 | Studio Gateway 2 | Creative Practices: Methods | Media Arts Gateway 1 | Media
                      Arts Gateway 2 | Creative Practices: Contexts | Integrated Design Computing 2 | Drawing | Media
                      Art in the 21st Century | The 3D Animated Body | CGI Lens Lab | Systems for Interactive Media |
                      Visual Effects Project | Interactive Installation | Interactive Visualisation | Professional
                      Practice
                    </p>
                  </AccordionDetails>
                </Accordion>
              </>
            }
          />
        </div>
      </div>

      <ProjectsBlock />
    </div>
  );
};

export default HomePage;
