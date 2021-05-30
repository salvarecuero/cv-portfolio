import React from "react";
import { Row } from "@geist-ui/react";
import techs from "../data/TechTitlesAndIcons";
import TechIcon from "./TechIcon";
import DividerTitle from "./DividerTitle";

function Technologies() {
  return (
    <>
      <DividerTitle title="Technologies" />

      <Row span={20} justify="center">
        <Row style={{ flexWrap: "wrap" }}>
          {techs
            ? techs.map((tech, index) => (
                <TechIcon key={index} tech={tech} size={64} />
              ))
            : null}
        </Row>
      </Row>
    </>
  );
}

export default Technologies;
