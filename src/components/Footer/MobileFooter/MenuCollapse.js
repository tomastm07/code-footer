import React, { useState } from "react";
import SubMenu from "./SubMenu";
const Menu = ({ url, name, navLinks = [] }) => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen((prev) => !prev);
  };
  const isSubMenu = navLinks.length >= 1;
  return (
    <li className="menu-container">
      <div
        className="menu-heading-container"
        onClick={isSubMenu && handleClick}
      >
        <h4>
          <a href={url}>{name}</a>
        </h4>
        {/* displays the open and close icon is it's a submenu */}
        {isSubMenu && <span onClick={handleClick}>{open ? "-" : "+"} </span>}
      </div>
      {/* display the submenu links */}
      {isSubMenu && open && <SubMenus navLinks={navLinks} />}
    </li>
  );
};

export default Menu;
