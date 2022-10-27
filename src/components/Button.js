import React from "react";

const Button = ({ link, name, className }) => {
  return (
    <a
      href={link}
      className={`font-bold py-2 px-6 text-center rounded-full bg-gradient-to-b from-[#F7B840] via-[#FDD892] to-[#F3CE88] ${
        className ? className : ""
      }`}
    >
      {name}
    </a>
  );
};

export default Button;
