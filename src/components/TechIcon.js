import React from "react";
import { useTheme, Image, Tooltip } from "@geist-ui/react";
import "./styles/TechIcon.css";

function TechIcon({ tech, size }) {
  const themeColor = useTheme().type;

  return (
    <Tooltip className="tech-icon" text={tech.title} offset="55">
      <a href={tech.webPage} target="_blank" rel="noreferrer">
        <Image
          src={tech.icon}
          className={
            tech.shouldInvertColorsIfNeeded && themeColor === "dark"
              ? "invertColor"
              : null
          }
          alt={tech.title}
          width={size}
        />
      </a>
    </Tooltip>
  );
}

export default TechIcon;
