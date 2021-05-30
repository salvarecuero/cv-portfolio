import React from "react";
import { Tag, useTheme } from "@geist-ui/react";
import "./styles/Pill.css";

function Pill({ content }) {
  const { palette } = useTheme();
  return (
    <Tag
      className="pill"
      style={
        content.color
          ? { backgroundColor: content.color, fontWeight: "bold" }
          : {}
      }
      invert
    >
      <span style={content.color ? { color: palette.foreground } : {}}>
        {content.name}
      </span>
    </Tag>
  );
}

export default Pill;
