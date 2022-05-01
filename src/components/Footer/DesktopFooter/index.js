import React from "react";
import Navigation from "./Navigation";

const DesktopFooter = ({ navLinkGroups, legalText }) => {
  return (
    <div className="desktop-menu-container flex">
      {/* generate every menu item */}
      <Navigation navLinkGroups={navLinkGroups} />
      {/* legaltext is null if not defined  */}
      <div>{legalText !== null ? legalText : ""}</div>
    </div>
  );
};

export default DesktopFooter;
