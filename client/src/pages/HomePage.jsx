import { React, useEffect } from "react";
import "../css/HomePage.css";

// Components
import BackToTopButton from "../components/BackToTopButton";
import ProjectsBlock from "../components/ProjectsBlock";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="mainBody">
      <div className="mainHeaderMain">
        <div className="displayPic" />
        <h1>Thomas Doyle</h1>
        <hr className="hrTitle" />
        <h3>Designer | Developer</h3>
      </div>
      <div className="contentBlock">
        <h3>About me:</h3>
        <p>
          {" "}
          I would like to think myself as a digital creative, whether that be coding up website designs, using 3d
          modelling software to create interesting characters and environments, or 2D software such as Photoshop or
          Illustrator, where I can communicate visually through effective graphics and visuals.
        </p>
        <p>I make a mean cocktail, I&apos;m a horrible chess player and I&apos;m great at shooting things online.</p>
      </div>
      <div className="contentBlock" id="education">
        <h3>Education:</h3>
        <h2>University of New South Wales:</h2>
        <h3>Bachelor of Computer Science / Bachelor of Media Arts (Double Degree)</h3>
        <h4>2017- 2021</h4>
        <p>
          I started out my tertiary education studying a Bachelor of Media Arts, a degree which focussed on how digital
          media can be used to create art. Whilst this degree was rewarding, I felt that it was not technically focussed
          enough, and so in 2018, I switched to a double degree in Computer Science. From my Media Arts degree I have
          learnt a range of creative Skills such as:
        </p>
        <ul>
          <li> Graphic Design</li>
          <li>3D modelling and animation</li>
          <li>Interactive Design </li>
        </ul>
        <p>
          My Computer Science education has taught me a range of general programming skills and principles, such as
          Object-Oriented Design, the SOLID principles and Agile Development methodologies, as well as fostered my
          interest in specific disciplines. Cyber Security and Frontend Software design are particular areas of
          interest. I&apos;m comfortable with Python and the linux environment, and I&apos;m familiar with version
          control/management software such as Github and Jira.
        </p>
        <Accordion style={{ boxShadow: "none" }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <h3>Computer Science Subjects:</h3>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              Introduction to Programming | Computer Systems Fundamentals | Software Engineering Fundamentals | Data
              Structures and Algorithms | O-O Design & Programming | Extended Security Engineering | Computer Networks &
              Applications | Concepts of Programming Languages | Operating Systems | Algorithms & Programming Tech |
              Securing Fixed & Wireless Networks | Web Application Security | Security Assessment | Digital Forensics |
              Mathematics 1A | Mathematics 1B | Discrete Mathematics | Management and Ethics | Computer Science Project
            </p>
          </AccordionDetails>
        </Accordion>
        <Accordion style={{ boxShadow: "none" }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <h3>Media Arts Subjects:</h3>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              Studio Gpteway 1 | Studio Gateway 2 | Creative Practices: Methods | Media Arts Gateway 1 | Media Arts
              Gateway 2 | Creative Practices: Contexts | Integrated Design Computing 2 | Drawing | Media Art in the 21st
              Century | The 3D Animated Body | CGI Lens Lab | Systems for Interactive Media | Visual Effects Project |
              Interactive Installation | Interactive Visualisation | Professional Practice
            </p>
          </AccordionDetails>
        </Accordion>
      </div>
      <div className="contentBlock" id="projects">
        <h3>Skills:</h3>
        <div className="skillBox">
          <div className="skillName">
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h4> C: </h4>
              <h4>90%</h4>
            </div>
          </div>
          <div className="skillGraphic">
            <div className="skillGraphicFill_C" />
          </div>
          <p>
            The first language I learnt, and my favourite. I love the low level nature of it, the strongly typed
            functions, the memory management. This language taught me the fundamentals of programming and as such, I am
            familiar with it. Any Computer Science concept I learnt at university, was learnt in C, from arrays to
            linked lists to operating systems kernel memory.{" "}
          </p>
        </div>
        <div className="skillBox">
          <div className="skillName">
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h4> Python: </h4>
              <h4>90%</h4>
            </div>
          </div>
          <div className="skillGraphic">
            <div className="skillGraphicFill_Python" />
          </div>
          <p>
            Python is what I turn to for any mundane task I want to automate. It’s easy to use, has a library for any
            use case, and is high level enough that I can leave it for months and never need a refresher on the syntax.
            I have experience with it as a backend for uni websites, chat servers and clients, as well as parsers for
            JSON, XML and HTML.{" "}
          </p>
        </div>
        <div className="skillBox">
          <div className="skillName">
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h4> JavaScript: </h4>
              <h4>60%</h4>
            </div>
          </div>
          <div className="skillGraphic">
            <div className="skillGraphicFill_JS" />
          </div>
          <p>
            The newest addition to my language arsenal, JavaScript is the current language I’m actively learning as part
            of my web-dev education, albeit in a self-learned sense rather than formally. Whilst I have experience using
            frameworks and libraries such as React, Express, Node.js and Mongo.db to create well functioning websites, I
            would say it’s my weakest language as I have little experience with the vanilla language. That being said,
            who uses vanilla JavaScript these days.{" "}
          </p>
        </div>
        <div className="skillBox">
          <div className="skillName">
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h4> Java: </h4>
              <h4>80%</h4>
            </div>
          </div>
          <div className="skillGraphic">
            <div className="skillGraphicFill_Java" />
          </div>
          <p>
            Java introduced me to Object-Oriented design and was the primary language I have used for creative
            endeavours, such as my interactive Media Projects, like Asteroids. The language is fine, although I would
            rather be coding in C#, as Oracle and the libraries associated with Java are a pain, nor do I trust its
            automated garbage collection. Array Lists are cool, but there must be a better way to initialize them.{" "}
          </p>
        </div>
        <div className="skillBox">
          <div className="skillName">
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h4> Unix: </h4>
              <h4>80%</h4>
            </div>
          </div>
          <div className="skillGraphic">
            <div className="skillGraphicFill_Unix" />
          </div>
          <p>
            I started using the Linux terminal at the start of my degree, and can safely say I have a strong grasp on
            the many commands and concepts that make the terminal so powerful. I currently run WSL2 (Windows Subsystem
            for Linux) on my home setup, and have spent a large portion of my degree using Kali. I have taken courses
            that use command line in different and unique ways, such as digital forensics, low level networking, version
            control and OS container management ( i.e. Docker). There are still so many tools I don&apos;t know I need
            yet, but I&apos;m keen to continue to expand my skills.{" "}
          </p>
        </div>
      </div>
      <ProjectsBlock />
      <BackToTopButton />
    </div>
  );
};

export default HomePage;
