import React from "react";
import Navigation from "./Navigation";

const DesktopFooter = ({ navLinkGroups, legalText }) => {
  return (
    <div>
      <>
      <div className="menuInner flex w-[full] md:grid md:grid-cols-2 md:w-[50%] md:pt-[50px] md:mx-auto lg:w-[100%] lg:flex  lg:justify-between">
      {/* generates every menu item */}
      <Navigation  navLinkGroups={navLinkGroups} />
      </div>
      <div className="footerCopyright block mt-[70px] pb-[50px]">
      {/* legaltext is null if not defined  */}
        {legalText.map((text, idx) => (
          <p key={`${idx}text`} className="text-white text-center">{text}</p>
        ))}
      </div>
      </>
    </div>
  );
};

export default DesktopFooter;
