import React, { useEffect } from "react";
import Projects from "../data/PortfolioProjects";
import PortfolioProject from "../components/PortfolioProject/index";
import GoToButton from "../components/GoToButton";

function Portfolio() {
  useEffect(() => {
    document.title = "Salvador Recuero - Portfolio";

    console.log(
      `%c ________________________________________
< Hmmm, I promise this errors are coming from an external library. >
 ----------------------------------------
        \\   ^__^
         \\  (oo)\\_______
            (__)\\       )\\/\\
                ||----w |
                ||     ||`,
      "font-family:monospace"
    );
  }, []);
  return (
    <div style={{ marginTop: "50px" }}>
      {Projects.map((project, index) => (
        <PortfolioProject key={index} index={index} project={project} />
      ))}
      <GoToButton to="/">Go back to home</GoToButton>
    </div>
  );
}

export default Portfolio;
