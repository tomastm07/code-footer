import React, { useState } from "react";
import SubMenu from "./SubMenu";
const Menu = ({ url, name, navLinks = [] }) => {
  const [open, setOpen] = useState(false);
  const toggleSubMenu = () => {
    setOpen((prev) => !prev);
  };
  const isSubMenu = navLinks.length >= 1;
  return (
    <li className="menu-container flex flex-col">
      <div
        className="ftLinkMobile flex justify-between"
        onClick={isSubMenu ? toggleSubMenu : () => {}}
      >
        <h4>
          <a href={url}>{name}</a>
        </h4>
        {/* displays the open and close icon is it's a submenu */}
        {isSubMenu && (
          <span className="toggleMenu" onClick={toggleSubMenu}>
            {open ? "-" : "+"}
          </span>
        )}
      </div>
      {/* display the submenu links */}
      {isSubMenu && open && <SubMenu navLinks={navLinks} />}
      <span className="borderBottom"></span>
    </li>
  );
};

export default Menu;
