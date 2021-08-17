import React, { useRef } from "react";
import { Image } from "@geist-ui/react";
import { useCloseBrowser } from "../../../hooks/useCloseBrowser";
import "./styles/index.css";

function ImgDemo({ img, nameForID, isMobile }) {
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
        src={img[0]}
        className="demoContent"
        alt="View of my project."
        loading="lazy"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = img[1];
        }}
        onClick={getImageInRightOrder}
      />
    </Image.Browser>
  );
}

export default ImgDemo;
