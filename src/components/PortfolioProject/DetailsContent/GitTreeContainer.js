import React, { useEffect, useState } from "react";
import { Row, Image } from "@geist-ui/react";
import GitTree from "./GitTree";
import "./styles/GitTreeContainer.css";
import { useCloseBrowser } from "../../../hooks/useCloseBrowser";

function GithubTree({ repository, nameForID }) {
  const gitTreeID = `${nameForID}GitTree`;
  const [treeData, setTreeData] = useState(null);
  const browserOpen = useCloseBrowser(!!treeData, gitTreeID, "portfolioDesc");

  useEffect(() => {
    fetch(
      `https://cv-portfolio-server.herokuapp.com/api/get-tree/?repoUrl=${repository}`
    )
      .then((res) => {
        if (!res.ok) {
          throw Error;
        }
        return res.json();
      })
      .then((data) => {
        if (data) {
          setTreeData(data);
        }
        throw Error;
      })
      .catch((error) =>
        console.log(
          `Seems the file tree of ${repository} had a problem :(`,
          error
        )
      );
  }, [repository]);

  return (
    <>
      {treeData && browserOpen ? (
        <Row className="treeRow">
          <Image.Browser id={gitTreeID} className="treeBrowser">
            {treeData ? <GitTree treeData={treeData} /> : null}
          </Image.Browser>
        </Row>
      ) : null}
    </>
  );
}

export default GithubTree;
