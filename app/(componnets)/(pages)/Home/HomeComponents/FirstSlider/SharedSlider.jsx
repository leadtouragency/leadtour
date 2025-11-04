"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import React from "react";

const SharedSlider = ({ children }) => {
  const slides = React.Children.toArray(children);
  return (
    <>
      <Swiper
        speed={700}
        // autoplay={{
        //   delay: 4500,
        //   disableOnInteraction: false,
        // }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        // modules={[Autoplay]}
        className=" rounded-3xl"
      >
        {slides &&
          slides?.map((slideContent, i) => (
            <SwiperSlide key={slideContent?.id || i}>
              {slideContent}
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
};

export default SharedSlider;
