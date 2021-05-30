import React from "react";
import { Row, Image } from "@geist-ui/react";
import Pill from "./Pill";
import "./styles/DescriptionContainer.css";
import { useCloseBrowser } from "../../../hooks/useCloseBrowser";

function DescriptionContainer({ description, pills, nameForID }) {
  const descriptionID = `${nameForID}Description`;
  const browserOpen = useCloseBrowser(true, descriptionID, "portfolioDesc");

  return (
    <>
      {browserOpen ? (
        <Row className="descriptionRow">
          <Image.Browser id={descriptionID} className="descriptionBrowser">
            <Row className="descriptionText">{description}</Row>
            {pills.map((content, index) => (
              <Pill key={index} content={content} />
            ))}
          </Image.Browser>
        </Row>
      ) : null}
    </>
  );
}

export default DescriptionContainer;
