import React from "react";
import { Row, Text, Tag, useTheme } from "@geist-ui/react";
import { Linkedin, Mail } from "@geist-ui/react-icons";
import "./styles/BasicDesc.css";

function BasicDesc() {
  const { palette } = useTheme();

  function BasicTag({ content }) {
    return (
      <Tag
        className="basicTag"
        type="success"
        style={{ color: palette.foreground }}
        invert
      >
        {content}
      </Tag>
    );
  }

  return (
    <Row className="basicDesc" justify="center">
      <Text size={14} i>
        <BasicTag content="21 years old" />
        <BasicTag content="Web developer" />
        <BasicTag content="Looking for a job" />
        <BasicTag content="Learning" />
        <BasicTag
          content={
            <a
              href="https://www.linkedin.com/in/salvarecuero/"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin color="white" />
            </a>
          }
        />
        <BasicTag
          content={
            <a href="mailto:salvarecuero@gmail.com">
              <Mail color="white" />
            </a>
          }
        />
      </Text>
    </Row>
  );
}

export default BasicDesc;
