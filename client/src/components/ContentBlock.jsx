import { React } from "react";
import "../css/HomePage.css";

const ContentBlock = ({ heading, content, color, halfed = false }) => {
  return (
    <div className={`homePageContentBlock block-${color} ${halfed && "halfed"}`}>
      <div className="homePageContentBlockInner">
        <div className="underlinedH3">
          <h3>{heading}</h3>
        </div>
        {content}
      </div>
    </div>
  );
};
export default ContentBlock;
