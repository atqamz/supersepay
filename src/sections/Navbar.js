import React from "react";

import Button from "../components/Button";
import NavLink from "../components/NavLink";

const Navbar = ({ isMobileNavbarOpen, setIsMobileNavbarOpen }) => {
  return (
    <div
      className={`bg-[#0667AE] md:bg-transparent px-10 z-50 sticky top-0 flex flex-col ${
        isMobileNavbarOpen ? "h-screen" : ""
      }`}
    >
      <div className='flex flex-row justify-between w-full py-3 mx-auto mycontainer md:py-6'>
        <div className='w-1/2 md:w-2/6'>
          <img
            src='assets/logo-white.png'
            alt='Super Sepay Navbar Mobile Logo'
            className='h-8 md:hidden'
          ></img>

          <img
            src='assets/logo-navbar-desktop.png'
            alt='Super Sepay Navbar Desktop Logo'
            className='hidden w-1/2 lg:w-5/12 md:block'
          ></img>
        </div>

        <div className='flex flex-col w-1/2 md:flex-row md:justify-between md:w-4/6'>
          <div className={`flex flex-row items-center justify-end h-full md:hidden`}>
            <img
              alt='Super Sepay Navbar Mobile Hamburger Menu'
              src='assets/hamburger-menu.png'
              className='h-6 cursor-pointer'
              onClick={() => setIsMobileNavbarOpen(!isMobileNavbarOpen)}
            ></img>
          </div>

          <div className='flex-row items-center justify-around hidden w-full md:flex'>
            <NavLink link='#first-load' name='Home' />
            <NavLink link='#services' name='Services' />
            <NavLink link='#about' name='About' />
            <Button
              link='#contact'
              name='Contact Us'
              className='text-[#0667AE] text-md lg:text-xl'
            />
          </div>
        </div>
      </div>

      <div className={`${isMobileNavbarOpen ? "relative" : "hidden"} h-full w-full`}>
        <div className='absolute flex flex-col items-center justify-around w-full h-full'>
          <NavLink link='#' name='Home' className='text-white' />
          <NavLink link='#' name='Services' className='text-white' />
          <NavLink link='#' name='About' className='text-white' />
          <Button link='#' name='Contact Us!' className='text-white' />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
