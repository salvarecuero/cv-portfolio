import React, { useRef } from "react";
import { Image } from "@geist-ui/react";
import { useCloseBrowser } from "../../../hooks/useCloseBrowser";
import "./styles/index.css";

function VideoDemo({ src, nameForID, isMobile }) {
  const browserOpen = useCloseBrowser(true, nameForID, "portfolioDemo");
  const videoBrowser = useRef(null);

  function calmAnimation() {
    videoBrowser?.current?.classList.remove("videoRotating");
  }

  return (
    <Image.Browser
      id={nameForID}
      className={`${!isMobile ? "videoDemoBrowser" : "mobileContent"} ${
        browserOpen ? "" : "videoRotating"
      }`}
      title="Video"
      ref={videoBrowser}
    >
      <video
        src={src}
        className="demoContent"
        controls
        preload="metadata"
        onPause={calmAnimation}
      />
    </Image.Browser>
  );
}

export default VideoDemo;
