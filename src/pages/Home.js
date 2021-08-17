import React, { useEffect } from "react";
import { Grid } from "@geist-ui/react";
import FacePicture from "../components/FacePicture";
import Name from "../components/Name";
import BasicDesc from "../components/BasicDesc";
import AboutMe from "../components/AboutMe";
import Technologies from "../components/Technologies";
import GoToButton from "../components/GoToButton";
import "./styles/Home.css";

function Home() {
  useEffect(() => {
    document.title = "Salvador Recuero";
    // We ping the server so Heroku wakes up it's Dyno.
    fetch("https://cv-portfolio-server.herokuapp.com/");
  }, []);

  return (
    <Grid className="container-space" justify="center">
      <FacePicture size={150} browser />
      <Name displayIn="Home" />
      <BasicDesc />
      <AboutMe />
      <Technologies />
      <GoToButton to="/portfolio">Go to portfolio</GoToButton>
    </Grid>
  );
}

export default Home;
