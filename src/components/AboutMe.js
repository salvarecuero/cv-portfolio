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
            Jr. <i>Web</i> Developer. Enjoying the process step by step. Focused
            on the frontend and always open to new challenges as required.
            Currently without job experience, wanting to be part of a great
            team. I do have so much to learn, but I'm confident that a lot of
            that knowledge will come along with the experience.
          </Text>
          <Text P>
            Feel free to contact me, even if you don't think I could fit in your
            team!
          </Text>
        </Col>
      </Row>
    </>
  );
}

export default AboutMe;