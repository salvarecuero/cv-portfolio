import React from "react";
import { Row, Button } from "@geist-ui/react";
import "./styles/SeeDemoButton.css";

function SeeDemoButton({ link }) {
  return (
    <Row className="seeDemoButton">
      <a href={link}>
        <Button>See demo</Button>
      </a>
    </Row>
  );
}

export default SeeDemoButton;
