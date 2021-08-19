import React from "react";
import { Tree } from "@geist-ui/react";

function GitTree({ treeData }) {
  function makeTree(item, index) {
    if (item["type"] === "blob") {
      return (
        <Tree.File
          key={index}
          name={item.name}
          extra={`${item.kbSize}kb`}
          onClick={() => window.open(item.html_url)}
        />
      );
    } else if (item["type"] === "tree") {
      return (
        <Tree.Folder key={index} name={item.name}>
          {item.children?.map((childrenItem, index) =>
            makeTree(childrenItem, index)
          )}
        </Tree.Folder>
      );
    }
  }

  return <Tree>{treeData.map((item, index) => makeTree(item, index))}</Tree>;
}

export default GitTree;
