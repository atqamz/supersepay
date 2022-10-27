import React from "react";

const NavLink = ({ link, name, className }) => {
  return (
    <a
      href={link}
      className={` text-[#0667AE] cursor-pointer font-bold text-2xl md:text-white md:text-center md:font-extralight md:text-md lg:text-xl ${className}`}
    >
      {name}
    </a>
  );
};

export default NavLink;
