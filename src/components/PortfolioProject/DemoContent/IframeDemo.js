import React from "react";
import { Image } from "@geist-ui/react";
import { useCloseBrowser } from "../../../hooks/useCloseBrowser";
import "./styles/index.css";

function IframeDemo({ src, nameForID }) {
  const browserOpen = useCloseBrowser(true, nameForID);

  return (
    <>
      {browserOpen ? (
        <Image.Browser id={nameForID} className="iframeDemoBrowser" url={src}>
          <iframe
            className="demoContent"
            title={src}
            src={src}
            loading="lazy"
          />
        </Image.Browser>
      ) : null}
    </>
  );
}

export default IframeDemo;
