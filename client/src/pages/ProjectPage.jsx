import { useEffect, useState, React } from "react";
import "react-multi-carousel/lib/styles.css";
import "../css/ProjectPage.css";

import ImageGrid from "../components/ImageGrid";
import Modal from "../components/Modal";
import ProjectsBlock from "../components/ProjectsBlock";

import BackToTopButton from "../components/BackToTopButton";
function ProjectPage({ currentProject, content, title, bannerImageSrc, images, color }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div>
      <div className={color}>
        <h1>{title}</h1>
        <div className={bannerImageSrc ?? "comeFlyWithMeBanner"} />
        <div className="contentBlock">{content}</div>
        <div className="contentBlock">
          <h3>Library</h3>
          <ImageGrid images={images} setSelectedImage={setSelectedImage} />
        </div>
        <ProjectsBlock currentProject={currentProject ?? "Come Fly With Me"} />
        <BackToTopButton />
      </div>
      {selectedImage && <Modal selectedImage={selectedImage} setSelectedImage={setSelectedImage} />}
    </div>
  );
}

export default ProjectPage;
