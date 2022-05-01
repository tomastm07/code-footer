import React from "react";
import Menu from "./MenuCollapse";
import NavigationCollapse from "./NavigationCollapse";

const MobileFooter = ({ navLinkGroups, legalText }) => {
  return (
    <div>
      {/* generates every menu item */}
      <NavigationCollapse navLinkGroups={navLinkGroups} />
      {/* legaltext is null if not defined  */}
      <div>
        {legalText.map((text) => (
          <p>{text}</p>
        ))}
      </div>
    </div>
  );
};

export default MobileFooter;
