import React from "react";
import Menu from "./Menu";

const MobileFooter = ({ navLinkGroups }) => {
  return (
    <div>
    {/* generate every menu item */}
      {navLinkGroups.map((nav) => (
        <Menu key={nav._id} name={nav.name} navLinks={nav.navLinks} />
      ))}
    </div>
  );
};

export default MobileFooter;
