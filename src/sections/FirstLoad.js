import React from "react";
import Button from "../components/Button";

const FirstLoad = () => {
  return (
    <div
      className='flex flex-col items-center justify-center px-10 mx-auto mycontainer md:flex-row'
      id='first-load'
    >
      <div className='bg-[#0667AE] md:bg-transparent px-5 md:px-0 w-screen py-32 flex flex-col justify-center items-start md:w-1/3 space-y-5'>
        <h1 className='text-3xl font-black leading-10 text-center text-white md:text-left'>
          We <b className='text-[#FEBE43] font-black'>make</b> your dreams into a{" "}
          <b className='text-[#FEBE43] font-black'>new reality</b>.
        </h1>
        <Button
          link='/'
          name='Start Now!'
          className='hidden md:block text-[#0667AE] text-md lg:text-xl'
        />
      </div>
      <div className='w-11/12 h-full -top-1/2'>
        <div className='relative left-0 z-10 flex items-center justify-center w-full md:static'>
          <img
            src='assets/first-load/illust.png'
            alt='Super Sepay First Load'
            className='absolute w-full max-w-xs md:max-w-lg md:w-full md:static md:block'
          />
        </div>
      </div>
      <div className='flex flex-col items-center justify-end w-full px-5 pb-10 pt-36 md:hidden'>
        <Button
          link='/'
          name='Start Now!'
          className='text-3xl text-white font-extralight'
        />
      </div>
    </div>
  );
};

export default FirstLoad;
