import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

import "swiper/css";

const ServicesSwiper = () => {
  return (
    <Swiper
      centeredSlides={true}
      loop={true}
      autoplay={{
        delay: 1000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
      scrollbar={{
        hide: true,
      }}
      className='w-full h-full py-16 md:py-0 md:my-16'
    >
      <SwiperSlide>
        <div className='flex flex-col items-center justify-center w-full h-full bg-white md:bg-transparent'>
          <img
            src='assets/services/gamification.png'
            alt='Super Sepay Gamification Services'
            className='h-64'
          />
          <h1 className='text-3xl font-black leading-10 text-center text-[#0667AE] md:text-left md:text-white'>
            Gamification
          </h1>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='flex flex-col items-center justify-center w-full h-full bg-white md:bg-transparent'>
          <img
            src='assets/services/ar.png'
            alt='Super Sepay Augmented Reality Services'
            className='h-64'
          />
          <h1 className='text-3xl font-black leading-10 text-center text-[#0667AE] md:text-left md:text-white'>
            Augmented Reality
          </h1>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='flex flex-col items-center justify-center w-full h-full bg-white md:bg-transparent'>
          <img
            src='assets/services/vr.png'
            alt='Super Sepay Virtual Reality Services'
            className='h-64'
          />
          <h1 className='text-3xl font-black leading-10 text-center text-[#0667AE] md:text-left md:text-white'>
            Virtual Reality
          </h1>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default ServicesSwiper;
