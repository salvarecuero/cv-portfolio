import React from "react";
import { Col } from "@geist-ui/react";
import DescriptionContainer from "./DescriptionContainer";
import GitTreeContainer from "./GitTreeContainer";
import GitCloneContainer from "./GitCloneContainer";
import SeeDemoButton from "./SeeDemoButton";
import "./styles/index.css";

function DetailsContent({
  nameForID,
  description,
  pills,
  repository,
  demoURL,
}) {
  return (
    <Col className="overflow">
      <DescriptionContainer
        nameForID={nameForID}
        description={description}
        pills={pills}
      />
      <GitTreeContainer nameForID={nameForID} repository={repository} />
      <GitCloneContainer nameForID={nameForID} repository={repository} />
      {demoURL ? <SeeDemoButton link={demoURL} /> : null}
    </Col>
  );
}

export default DetailsContent;
