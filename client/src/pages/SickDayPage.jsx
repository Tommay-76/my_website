import { React, useEffect, useState } from "react";

// images
import pics from "../images/projects/sickDay/pics.jpg";
import bloodflow from "../images/projects/sickDay/bloodflow.gif";
import bloodflowwithrendereffect from "../images/projects/sickDay/bloodflow with render effect.jpg";
import green from "../images/projects/sickDay/green.gif";
import mitosis from "../images/projects/sickDay/mitosis.gif";
import porple from "../images/projects/sickDay/porple.gif";
import ImageGrid from "../components/ImageGrid";
import Modal from "../components/Modal";

import BackToTopButton from "../components/BackToTopButton";
import ProjectsBlock from "../components/ProjectsBlock";

function SickDayPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [selectedImage, setSelectedImage] = useState(null);
  const images = [pics, bloodflow, bloodflowwithrendereffect, green, mitosis, porple];

  return (
    <div>
      <div className="sickDayBody">
        <h1>Sick Day</h1>
        {/* <div className='videoPlayer'>
          <VideoPlayer
            src={SickDay}
            poster={pics}
            width='720'
            height='405'
          />
        </div> */}
        <div className="contentBlock">
          <h3>Programs Used:Maya | litlle bit of After Effects</h3>
          <p>
            Part of a 4 person group project, I made the models for bacteria and blood cells and rendered them for a
            short film.
          </p>
          <div className="videoLinkButton">
            <a
              href="https://youtu.be/rB7gYFPUro8"
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
        </div>
        <div className="contentBlock">
          <h3>Library</h3>
          <ImageGrid setSelectedImage={setSelectedImage} images={images} />
        </div>
        <ProjectsBlock currentProject="Sick Day" />
        <BackToTopButton />
      </div>
      {selectedImage && <Modal selectedImage={selectedImage} setSelectedImage={setSelectedImage} />}
    </div>
  );
}
export default SickDayPage;
