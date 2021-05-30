import React from "react";
import FaceIMG from "../assets/Salvador/face.jpg";
import { Row, Image } from "@geist-ui/react";
import "./styles/FacePicture.css";
import { useCloseBrowser } from "../hooks/useCloseBrowser";

function FacePicture({ size, browser }) {
  const browserOpen = useCloseBrowser(browser, "homePicture", "facePicture");

  function Picture() {
    return (
      <Image
        className={`facePicture ${browser ? "browserFacePicture" : ""}`}
        style={{ borderRadius: "50%" }}
        width={size}
        src={FaceIMG}
        alt="Face"
      />
    );
  }

  if (browser && browserOpen)
    return (
      <Row>
        <Image.Browser
          id="homePicture"
          title="That's me!"
          className="browserImage"
        >
          <Picture />
        </Image.Browser>
      </Row>
    );
  else {
    return <Picture />;
  }
}

export default FacePicture;
