import React from "react";
import { Row, Snippet } from "@geist-ui/react";
import "./styles/GitCloneContainer.css";

function GitCloneContainer({ repository }) {
  return (
    <Row className="gitCloneRow">
      <Snippet
        className="gitCloneSnippet"
        text={`git clone ${repository}`}
        toastText="¡Text copiado!"
        toastType="default"
      />
    </Row>
  );
}

export default GitCloneContainer;
