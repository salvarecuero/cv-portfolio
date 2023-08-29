import React from "react";
import { Row, Col, Text } from "@geist-ui/react";
import DividerTitle from "./DividerTitle";
import "./styles/AboutMe.css";

function AboutMe() {
  return (
    <>
      <DividerTitle title="About me" />

      <Row className="aboutMeRow" justify="center">
        <Col span={16}>
          <Text p>
            <i>Web</i> Developer. Enjoying the process step by step. Focused on
            the frontend and always open to new challenges as required. I do
            have so much to learn, but I'm confident that a lot of that
            knowledge will come along with the experience.
          </Text>
        </Col>
      </Row>
    </>
  );
}

export default AboutMe;
