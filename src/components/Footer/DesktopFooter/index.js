import React from "react";
import Navigation from "./Navigation";

const DesktopFooter = ({ navLinkGroups, legalText }) => {
  return (
    <div className="desktop-menu-container flex">
      {/* generates every menu item */}
      <Navigation navLinkGroups={navLinkGroups} />
      {/* legaltext is null if not defined  */}
      <div>
        {legalText.map((text) => (
          <p>{text}</p>
        ))}
      </div>
    </div>
  );
};

export default DesktopFooter;
