import React from "react";

const About = () => {
  return (
    <div className='flex items-center w-full h-full md:space-x-3 md:px-12 mycontainer'>
      <img
        src='assets/about/illust.png'
        alt='Super Sepay About'
        className='hidden w-1/2 max-w-lg md:block'
      />

      <div
        className='flex flex-col items-center justify-center mx-auto mycontainer bg-[#0667AE] md:bg-transparent w-screen py-10'
        id='about'
      >
        <div className='w-full px-12 md:px-6'>
          <h1 className='w-full text-3xl font-extrabold text-[#FEBE43] leading-10 text-left '>
            Why Choose
            <br />
            Us ?
          </h1>

          <div className='flex w-full h-1 mt-2 space-x-3'>
            <div className='w-16 h-full bg-[#FEBE43] rounded-full' />
            <div className='w-32 h-full bg-[#FEBE43] rounded-full' />
          </div>

          <p className='py-6 text-xl text-white font-extralight'>
            We believe in your dreams. We believe in our people. We believe in our
            talents, our passion, our spirit. We can make Indonesia better through
            incredible technology, with a huge collaboration.
          </p>

          <div className='flex w-full h-1 mt-2 space-x-3'>
            <div className='w-full h-full bg-[#FEBE43] rounded-full' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
