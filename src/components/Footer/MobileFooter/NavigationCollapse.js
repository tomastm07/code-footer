import React from "react";
import MenuCollapse from "./MenuCollapse";

const NavigationCollapse = ({ navLinkGroups }) => {
  return (
    <ul className="text-white">
      {navLinkGroups.map((nav) => (
        <MenuCollapse
          key={nav._id}
          url={nav.url}
          name={nav.displayText}
          navLinks={nav.navLinks}
        />
      ))}
    </ul>
  );
};

export default NavigationCollapse;
