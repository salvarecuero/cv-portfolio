import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { Button, Divider } from "@geist-ui/react";
import FacePicture from "./FacePicture";
import Name from "./Name";
import { ArrowLeft, Moon, Sun } from "@geist-ui/react-icons";
import "./styles/TopBar.css";

function TopBar({ theme, toggleTheme }) {
  const location = useLocation().pathname;
  const [showName, setShowName] = useState(false);

  useEffect(() => {
    location === "/portfolio" ? setShowName(true) : setShowName(false);
  }, [location]);

  return (
    <>
      <Divider id="onBottomDivider" align="end">
        <Button className="themeButton" onClick={toggleTheme}>
          {theme === "dark" ? <Moon /> : <Sun />}
        </Button>
      </Divider>

      <Divider
        className={`onMiddleDivider ${showName ? "" : "hidden"}`}
        align="start"
      >
        <Link to="/">
          <Button className="themeButton">
            <ArrowLeft />
          </Button>
        </Link>
      </Divider>

      <Divider
        id="onTopDivider"
        align="center"
        className={showName ? "" : "hidden"}
      >
        <FacePicture size={32} />
        <Name displayIn="topBar" />
      </Divider>
    </>
  );
}

export default TopBar;
