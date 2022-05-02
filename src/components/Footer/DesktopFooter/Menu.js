import React from "react";

const Menu = ({ url, name, navLinks = [] }) => {
  return (
    <div className="md:mb-[40px] lg:mb-[0px]">
      <h4 className="menuFooterTitle text-white">
        <a href={url}>{name}</a>
      </h4>
      {/* create nav links */}
      <ul className="list-none">
        {navLinks.map((link) => (
          <li className="menuFooterLinks text-white" key={link._id}>
            <a href={link.url}>{link.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
