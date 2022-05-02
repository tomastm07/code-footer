import React from "react";
import MobileFooter from "./MobileFooter";
import DesktopFooter from "./DesktopFooter";
import { getLegalText } from "../../utils";

const Footer = ({ desktopFooter, mobileFooter }) => {
  const legalTextDesktop = getLegalText(desktopFooter.legalText);
  const legalTextMobile = getLegalText(mobileFooter.legalText);

  return (
    <footer className="bg-purple">
      {/* <DesktopFooter
        legalText={legalTextDesktop}
        navLinkGroups={desktopFooter.navLinkGroups}
      /> */}
      <MobileFooter
        navLinkGroups={mobileFooter.navLinkGroups}
        legalText={legalTextMobile}
        socialLinks={mobileFooter.socialLinks}
      />
    </footer>
  );
};

export default Footer;
