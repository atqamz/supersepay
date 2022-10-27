import { SwiperSlide } from "swiper/react";

const ServicesSwiperItem = ({ src, name, ...props }) => {
  return (
    <SwiperSlide {...props}>
      <div className='flex flex-col items-center justify-center w-full h-full bg-white md:bg-transparent'>
        <img src={src} alt={`Super Sepay ${name} Services`} className='h-64' />
        <h1 className='text-3xl font-black leading-10 text-center text-[#0667AE] md:text-left md:text-white'>
          {name}
        </h1>
      </div>
    </SwiperSlide>
  );
};

export default ServicesSwiperItem;
