import React from "react";
import Menu from "./MenuCollapse";
import NavigationCollapse from "./NavigationCollapse";

const MobileFooter = ({ navLinkGroups }) => {
  return (
    <div>
    {/* generates every menu item */}
      <NavigationCollapse navLinkGroups={navLinkGroups} />

    </div>
  );
};

export default MobileFooter;
