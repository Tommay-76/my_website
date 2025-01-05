import React from "react";
import { FaHome } from "react-icons/fa";
import "../css/BackToTopButton.css";

function BackToTopButton() {
  return (
    <a className="backToTopButton" href="/">
      <FaHome size={50} />
    </a>
  );
}
export default BackToTopButton;
