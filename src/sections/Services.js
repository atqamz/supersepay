import React from "react";
import ServicesSwiper from "../components/ServicesSwiper";

const Services = () => {
  return (
    <div
      className='flex flex-col items-center justify-center mx-auto mycontainer'
      id='services'
    >
      <div className='w-full'>
        <h1 className='w-full px-12 text-3xl font-extrabold text-[#FEBE43] leading-10 text-left md:hidden'>
          What We
          <br />
          Have ?
        </h1>

        <h1 className='hidden w-full px-12 text-3xl font-extrabold leading-10 text-center text-white md:block'>
          What We <b className='text-[#FEBE43] font-black'>Have</b> ?
        </h1>

        <div className='flex w-full h-1 px-12 mt-2 space-x-3 md:hidden'>
          <div className='w-20 h-full bg-[#FEBE43] rounded-full' />
          <div className='w-10 h-full bg-[#FEBE43] rounded-full' />
        </div>
      </div>

      <div className='w-full'>
        <ServicesSwiper />
      </div>
    </div>
  );
};

export default Services;
