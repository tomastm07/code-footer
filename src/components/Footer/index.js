import React from "react";
import MobileFooter from "./MobileFooter";
import DesktopFooter from "./DesktopFooter";
import { getLegalText } from "../../utils";

const Footer = ({ desktopFooter, mobileFooter }) => {
  const legalTextDesktop = getLegalText(desktopFooter.legalText);
  const legalTextMobile = getLegalText(desktopFooter.legalText);

  return (
    <footer>
      {/* <DesktopFooter
        legalText={legalTextDesktop}
        navLinkGroups={desktopFooter.navLinkGroups}
      /> */}
      <MobileFooter navLinkGroups={mobileFooter.navLinkGroups} />
    </footer>
  );
};

export default Footer;
