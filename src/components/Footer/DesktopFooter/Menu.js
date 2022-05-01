import React from "react";

const Menu = ({ url, name, navLinks = [] }) => {
  return (
    <div>
      <h4>
        <a href={url}>{name}</a>
      </h4>
      {/* create nav links */}
      <ul className="list-none">
        {navLinks.map((link) => (
          <li key={link._id}>
            <a href={link.url}>{link.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
