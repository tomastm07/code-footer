import React from "react";
import Menu from "./MenuCollapse";
import NavigationCollapse from "./NavigationCollapse";

const MobileFooter = ({ navLinkGroups }) => {
  return (
    <div>
      <NavigationCollapse navLinkGroups={navLinkGroups} />

    </div>
  );
};

export default MobileFooter;
