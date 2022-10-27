import React from "react";

const Footer = () => {
  return (
    <div className='relative w-full text-sm font-normal text-white bg-[#0969B2] md:bg-[#062F52] text-center md:pt-3 pt-[70px] pb-3 md:static'>
      <img
        src='assets/footer/illust.png'
        alt='Sepay Studio Footer'
        className='absolute right-0 w-[145px] -top-full -bottom-full md:hidden'
      />
      © Copyright 2022 Super Sepay, All Rights Reserved.
    </div>
  );
};

export default Footer;
