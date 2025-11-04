"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import React from "react";

const SharedGuests = ({ children }) => {
  const slides = React.Children.toArray(children);

  return (
    <div className="lg:px-4">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        speed={700}
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        breakpoints={{
          340: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2.5,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3.5,
            spaceBetween: 20,
          },
          1280: {
            slidesPerView: 3.8,
            spaceBetween: 20,
          },
        }}
        className="pb-10 "
      >
        {slides?.map((slideContent, i) => (
          <SwiperSlide className=" rounded-3xl" key={slideContent.key || i}>
            {slideContent}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SharedGuests;
