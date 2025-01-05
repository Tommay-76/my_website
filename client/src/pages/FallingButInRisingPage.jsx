import { React } from "react";
// images
import render from "../images/fallingPosterShot.png";
import sc1 from "../images/projects/fallingbutinrising/sc1.png";
import sc2 from "../images/projects/fallingbutinrising/sc2.png";
import sc3 from "../images/projects/fallingbutinrising/sc3.png";
import sc4 from "../images/projects/fallingbutinrising/sc4.png";
import sc5 from "../images/projects/fallingbutinrising/sc5.png";
import sc6 from "../images/projects/fallingbutinrising/sc6.png";
import sc7 from "../images/projects/fallingbutinrising/sc7.png";
import sc8 from "../images/projects/fallingbutinrising/sc8.png";

import ProjectPage from "./ProjectPage";

function FallingButInRisingPage() {
  return ProjectPage({
    currentProject: "Falling but in Rising",
    color: "fallingBody",
    content: (
      <>
        <h3>Programs Used: After Effects (character animation) | Photoshop (Drawings) | Premiere Pro (compositing)</h3>
        <p>This animation tells the story of an engel who loses their wings, and their journey to rebuild and heal.</p>
        <p>
          This work was my highschool Visual Arts major work, which I made in 2016. It went on to win a V-Fest short
          Film Award for student animations and also featured in the Mosman art prize.
        </p>
        <div className="videoLinkButton">
          <a
            href="https://youtu.be/rhSSWxarnkM"
            style={{
              textDecoration: "none",
              fontWeight: "bold",
              color: "white"
            }}
          >
            {" "}
            Link To Video
          </a>
        </div>
      </>
    ),
    images: [render, sc1, sc2, sc3, sc4, sc5, sc6, sc7, sc8],
    bannerImageSrc: "",
    title: "Falling But In Rising"
  });
}
export default FallingButInRisingPage;
