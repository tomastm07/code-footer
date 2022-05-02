import React, { useState } from "react";
import SubMenu from "./SubMenu";
import closeIcon from "../../../assets/icons/closeIcon.svg";
import showIcon from "../../../assets/icons/showIcon.svg";

const Menu = ({ url, name, navLinks = [] }) => {
  const [open, setOpen] = useState(false);
  const toggleSubMenu = () => {
    setOpen((prev) => !prev);
  };
  const isSubMenu = navLinks.length >= 1;
  return (
    <li className="menu-container flex flex-col collapse">
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
            <img src={open ? closeIcon : showIcon}></img>
          </span>
        )}
      </div>
      <div className={open ? "open" : "close"}>
        {/* display the submenu links */}
        {isSubMenu && open && <SubMenu navLinks={navLinks} />}
      </div>
      <span className="borderBottom"></span>
    </li>
  );
};

export default Menu;
