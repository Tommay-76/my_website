import { useEffect, React } from "react";
import "react-multi-carousel/lib/styles.css";
import "../css/ProjectPage.css";

import BackToTopButton from "../components/BackToTopButton";
import ProjectsBlock from "../components/ProjectsBlock";

// import Child from './components/element'
// import Button from '@material-ui/core/Button'
// import TextField from '@material-ui/core/TextField'

function Constellations() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="constellationsBody">
      <h1>Constellations</h1>
      <div className="constellationsBanner" />
      <div className="contentBlock">
        <h3>Written in: Java</h3>
        <p>
          This was a quick project to demonstrate an ability to parse JSON objects in Java in a fun and interactive
          project. Using a JSON Object of constellations, inclusive of star’s exact coordinates and the relations
          between individual stars and constellations, I created an interactive 3D graphic which maps the JSON object
          over a sphere, with lines connecting each star within a constellation. The JSON Object can be found here. The
          graphic was built using Processing, a graphical coding language built off of java.
        </p>
      </div>
      <ProjectsBlock currentProject="Constellations" />
      <BackToTopButton />
    </div>
  );
}

export default Constellations;
