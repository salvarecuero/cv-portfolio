import React, { useEffect, useState } from "react";
import { Image, Row, Col } from "@geist-ui/react";
import ProjectContentContainer from "./ProjectContentContainer";
import { useCloseBrowser } from "../../hooks/useCloseBrowser";
import "./styles/index.css";

function PortfolioProject({ project, index }) {
  const [contentLoaded, setContentLoaded] = useState(false);
  const browserID = `projectN${index}`;
  const browserOpen = useCloseBrowser(
    contentLoaded,
    browserID,
    "portfolioProject"
  );

  useEffect(() => {
    setContentLoaded(true);
  }, []); //eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      {browserOpen ? (
        <Image.Browser
          id={browserID}
          className="projectBrowser"
          title={project.title}
        >
          <ProjectContentContainer project={project} />
        </Image.Browser>
      ) : (
        <Row className="projectRow">
          <Col className="projectColumn" style={{ width: "75%" }}>
            <ProjectContentContainer project={project} />
          </Col>
        </Row>
      )}
    </>
  );
}

export default PortfolioProject;
