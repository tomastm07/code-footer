import React from "react";
import MobileFooter from "../Footer/MobileFooter";

const SocialLinks = (props, idx) => {
  return (
    <div key={`sl_` + idx} className="rrss--inner flex justify-center">
      {props.socialLinks.map((item) => {
        return (
          <a key={item.name} href={item.url} className="m-[10px]">
            <img src={item.icon} alt={item.name} />
          </a>
        );
      })}
    </div>
  );
};

export default SocialLinks;
