import React from "react";
import { Divider, Text } from "@geist-ui/react";
import "./styles/DividerTitle.css";

function DividerTitle({ title }) {
  return (
    <Divider className="dividerTitleMargin" align="start">
      <Text className="dividerTitle" h3>
        {title}
      </Text>
    </Divider>
  );
}

export default DividerTitle;
