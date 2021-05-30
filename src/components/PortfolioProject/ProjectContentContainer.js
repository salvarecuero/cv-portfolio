import React from "react";
import { Grid, useTheme } from "@geist-ui/react";
import DemoContent from "./DemoContent/index";
import DetailsContent from "./DetailsContent/index";

function ProjectContentContainer({ project }) {
  const nameForID = project.title.replaceAll(" ", "");
  const { palette } = useTheme();

  return (
    <Grid.Container className="projectContainer">
      <Grid
        xs={24}
        md={12}
        className="containerColumn demoColumn"
        style={{ backgroundColor: palette.foreground }}
      >
        <DemoContent nameForID={nameForID} demos={project.demos} />
      </Grid>
      <Grid
        xs={24}
        md={12}
        className="containerColumn"
        style={{ backgroundColor: palette.background }}
      >
        <DetailsContent
          nameForID={nameForID}
          description={project.description}
          pills={project.pills}
          repository={project.repository}
          demoURL={project.demoURL}
        />
      </Grid>
    </Grid.Container>
  );
}

export default ProjectContentContainer;
