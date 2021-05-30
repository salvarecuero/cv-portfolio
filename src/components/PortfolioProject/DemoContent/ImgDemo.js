import React, { useRef } from "react";
import { Image } from "@geist-ui/react";
import { useCloseBrowser } from "../../../hooks/useCloseBrowser";
import "./styles/index.css";

function ImgDemo({ src, nameForID, isMobile }) {
  const browserOpen = useCloseBrowser(true, nameForID, "portfolioDemo");
  const imageBrowser = useRef(null);

  function getImageInRightOrder() {
    imageBrowser?.current?.classList.remove("imgReversed");
  }

  return (
    <Image.Browser
      id={nameForID}
      className={`${!isMobile ? "imgDemoBrowser" : "mobileContent"} ${
        browserOpen ? "" : "imgReversed"
      }`}
      title="Image"
      ref={imageBrowser}
    >
      <img
        src={src}
        className="demoContent"
        alt="View of my project."
        loading="lazy"
        onClick={getImageInRightOrder}
      />
    </Image.Browser>
  );
}

export default ImgDemo;
