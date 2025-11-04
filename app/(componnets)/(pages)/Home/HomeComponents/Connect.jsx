"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";

const Connect = ({ advantages, code, follow_us_instagram }) => {
  const location = usePathname();

  return (
    <section className="  mt-6 mb-6 2xl:mt-10 2xl:mb-10 lg:mt-0 ">
      <div>
        {location === `/${code}` ? (
          <Image
            src={`${process.env.NEXT_PUBLIC_PICTURE}/${advantages?.image_big}`}
            alt={`${advantages?.title}`}
            width={1000}
            height={500}
            className="w-full"
          />
        ) : (
          <></>
        )}
      </div>
      <div className="grid grid-cols-12 gap-4 bg-[--colorWhite] mt-0 lg:mt-4 h-full px-8 py-12 lg:py-0 rounded-2xl 2xl:px-4 2xl:mx-0 md:px-4">
        <div className="col-span-4 xl:col-span-6 lg:col-span-12 flex flex-col items-start lg:items-center justify-center pr-6 lg:pr-0">
          <h3 className="text-[--colorOrange] text-4xl 1xl:text-3xl lg:text-xl mb-4 lg:text-center">
            {advantages?.title}
          </h3>
          <div
            className="text-[--colorBlue] lg:text-center"
            dangerouslySetInnerHTML={{ __html: `${advantages?.text}` }}
          />

          <a
            target="_blank"
            href={`${advantages?.link_social}`}
            className="bg-[--colorOrange] text-[--colorWhite] inline-flex mt-6 px-6 py-3 rounded-lg lg:text-center"
          >
            {follow_us_instagram}
          </a>
        </div>
        <div className="col-span-8 xl:col-span-6 lg:col-span-12 lg:mt-4">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12">
              <Image
                src={`${process.env.NEXT_PUBLIC_PICTURE}/${advantages?.image}`}
                width={1000}
                height={400}
                className="w-full lg:h-[400px] md:h-[300px] rounded-[24px]"
                alt={`${advantages?.title}`}
              />
            </div>
            <div className="col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12">
              <Image
                src={`${process.env.NEXT_PUBLIC_PICTURE}/${advantages?.image2}`}
                width={1000}
                height={400}
                className="w-full lg:h-[400px] md:h-[300px] rounded-[24px]"
                alt={`${advantages?.title}`}
              />
            </div>
            <div className="col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12">
              <Image
                src={`${process.env.NEXT_PUBLIC_PICTURE}/${advantages?.image3}`}
                width={1000}
                height={400}
                className="w-full lg:h-[400px] md:h-[300px] rounded-[24px]"
                alt={`${advantages?.title}`}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Connect;
