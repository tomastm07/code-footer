import React from "react";

const SubMenu = ({ navLinks }) => {

  return (
    <ul className="submenu-container">
      {navLinks.map((link) => (
        <li key={link._id}>
          <a href={link.url}>{link.displayText}</a>
        </li>
      ))}
    </ul>
  );
};

export default SubMenu;
