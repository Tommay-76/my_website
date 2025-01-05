import { useEffect, React, useRef } from "react";
import "react-multi-carousel/lib/styles.css";
import "../css/ProjectPage.css";
import { startAnimation } from "../threeJS/constellations/renderer";
import BackToTopButton from "../components/BackToTopButton";
import ProjectsBlock from "../components/ProjectsBlock";

function Constellations() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const ref = useRef();
  useEffect(() => {
    if (ref.current) startAnimation(500, 300);
  }, ref);
  return (
    <div className="constellationsBody">
      <h1>Constellations</h1>
      <div className="constellationsBanner">
        <canvas className="constellationsBannerInner" id="bg" width="500" height="300" ref={ref}></canvas>
      </div>
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
