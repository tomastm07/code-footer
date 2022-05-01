import React from "react";
import Menu from "./Menu";

const Navigation = ({ navLinkGroups }) => {
  return navLinkGroups.map((nav) => (
    <Menu
      key={nav._id}
      url={nav.url}
      name={nav.displayText}
      navLinks={nav.navLinks}
    />
  ));
};

export default Navigation;
