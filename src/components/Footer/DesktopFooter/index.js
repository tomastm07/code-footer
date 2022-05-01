import React from "react";
import Navigation from "./Navigation";

const DesktopFooter = ({ navLinkGroups, legalText }) => {
  return (
    <div>
      <>
      <div className="menuInner md:flex md:justify-between md:pt-[50px]">
      {/* generates every menu item */}
      <Navigation  navLinkGroups={navLinkGroups} />
      </div>
      <div className="footerCopyright block mt-[70px] pb-[50px]">
      {/* legaltext is null if not defined  */}
        {legalText.map((text) => (
          <p className="text-white text-center">{text}</p>
        ))}
      </div>
      </>
    </div>
  );
};

export default DesktopFooter;
