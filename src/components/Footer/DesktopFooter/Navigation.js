import React from "react";
import Menu from "./Menu";

const Navigation = ({ navLinkGroups }) => {
  return navLinkGroups.map((nav) => (
    <Menu key={nav._id} name={nav.name} navLinks={nav.navLinks} />
  ));
};

export default Navigation;
