import Image from "next/image";
import Link from "next/link";
import React from "react";

const HomeMountain = ({
  mountain_text1,
  mountain_text2,
  mountain_link1,
  mountain_link2,
  data_letus,
  code,
}) => {
  return (
    <section className=" mt-36  lg:mt-16">
      <Image
        src={`${process.env.NEXT_PUBLIC_PICTURE}/${data_letus?.image1}`}
        width={1000}
        height={500}
        className="w-full h-[950px] lg:h-[650px] md:h-[450px] max-w-full lg:object-cover"
        alt="mountain"
      />
      <div className="-mt-80 lg:-mt-64  order-1 z-40 relative">
        <div className="bg-[--colorWhite] lg:bg-transparent mx-8 lg:mx-2 rounded-3xl text-black  p-16  lg:p-4">
          <div className="grid grid-cols-12 gap-6">
            <div className=" col-span-6 lg:col-span-12  h-full bg-[--plan] relative rounded-3xl flex justify-between flex-col">
              <div className="flex flex-col gap-4 p-8">
                <h2 className="text-[--colorWhite] text-4xl xl:text-2xl  capitalize ">
                  {mountain_text1}
                </h2>
                <Link
                  href={`/${code}/${data_letus?.link1}`}
                  className="inline-flex w-max capitalize border border-[--colorWhite] text-[--colorWhite] px-9 py-3"
                >
                  {mountain_link1}
                </Link>
              </div>
              <Image
                src={`${process.env.NEXT_PUBLIC_PICTURE}/${data_letus?.image2}`}
                width={1000}
                height={500}
                className=" h-full w-full"
                alt={`${mountain_text1}`}
              />
            </div>
            <div className=" col-span-6 lg:col-span-12   h-full bg-[--colorOrange] relative rounded-3xl flex justify-between flex-col overflow-hidden">
              <div className="flex flex-col gap-4 p-8">
                <h2 className="text-[--colorWhite] text-4xl xl:text-2xl  capitalize w-[80%] lg:w-full">
                  {mountain_text2}
                </h2>
                <Link
                  href={`/${code}/${data_letus?.link2}`}
                  className="inline-flex w-max capitalize border border-[--colorWhite] text-[--colorWhite] px-9 py-3"
                >
                  {mountain_link2}
                </Link>
              </div>
              <Image
                src={`${process.env.NEXT_PUBLIC_PICTURE}/${data_letus?.image3}`}
                width={1000}
                height={500}
                className=" h-full w-full"
                alt={`${mountain_text2}`}
              />
              <Image
                src={`${process.env.NEXT_PUBLIC_PICTURE}/${data_letus?.image4}`}
                width={1000}
                height={500}
                className=" absolute bottom-0 right-0 w-80 2xl:w-60 xl:w-36"
                alt={`${mountain_text2}`}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeMountain;
