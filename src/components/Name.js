import React from "react";
import { Row, Text } from "@geist-ui/react";
import "./styles/Name.css";

function Name({ displayIn }) {
  return (
    <Row justify="center">
      <Text
        className="nameText"
        h2={displayIn === "Home"}
        h4={displayIn === "topBar"}
        id={displayIn === "topBar" ? "topBarName" : ""}
      >
        Salvador <span className="lastNames">Recuero Guerrero</span>
      </Text>
    </Row>
  );
}

export default Name;
