import React from "react";

const FooterMenuItem = ({ name, navLinks }) => {
  return (
    <div>
      <h4>{name}</h4>
      {/* create nav links */}
      <ul>
        {navLinks.map((link) => (
          <li key={link._id}>
            <a href={link.url}>{link.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterMenuItem;