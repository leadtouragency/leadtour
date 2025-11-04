import Image from "next/image";
import React from "react";

const Choose = ({ img = "", data_why }) => {
  const fakedata = [
    {
      id: 1,
      number: "01",
      text: data_why?.title1,
      title: data_why?.text1,
    },
    {
      id: 2,
      number: "02",
      text: data_why?.title2,
      title: data_why?.text2,
    },
    {
      id: 3,
      number: "03",
      text: data_why?.title3,
      title: data_why?.text3,
    },
    {
      id: 3,
      number: "04",
      text: data_why?.title4,
      title: data_why?.text4,
    },
  ];
  return (
    <section className="mt-28 lg:mt-10">
      <div className="top-section bg-[--colorFF] grid grid-cols-12 gap-4 rounded-3xl px-8 py-8 lg:px-4 md:px-4">
        <div className="col-span-6 lg:col-span-12 relative">
          <Image
            width={1000}
            height={400}
            className="p-20 lg:p-5"
            src={`${process.env.NEXT_PUBLIC_PICTURE}/${data_why?.image}`}
            alt={`${data_why?.head_title}`}
          />
          <div className="flex flex-col gap-2 absolute top-24 left-24 z-20 lg:left-4 lg:top-16">
            <h4 className="text-[--plan] text-6xl 2xl:text-5xl lg:text-3xl">
              {data_why?.head_title}
            </h4>
          </div>
        </div>
        <div className="col-span-6 lg:col-span-12 h-full mt-20 2xl:mt-2">
          <ul className="flex flex-col justify-start gap-14 2xl:gap-4 h-full">
            {fakedata?.map((item, i) => (
              <li key={i}>
                <div className="flex gap-10 2xl:gap-4">
                  <div className="left">
                    <h3 className="text-[--colorOrange] text-4xl 2xl:text-2xl lg:text-xl">
                      {item?.number}
                    </h3>
                  </div>
                  <div className="flex flex-col gap-4 2xl:gap-2">
                    <h2 className="text-[--colorOrange] text-4xl 2xl:text-2xl lg:text-xl md:text-lg">
                      {item?.text}
                    </h2>
                    <h5 className="text-[--colorBlue] text-xl lg:text-sm">
                      {item?.title}
                    </h5>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {img && (
        <div className="bottom-section mt-[-120px] 2xl:mt-[-70px] lg:mt-10">
          <Image
            width={1000}
            height={500}
            src={img}
            className="w-full h-full] object-cover"
            alt={`${data_why?.head_title}`}
          />
        </div>
      )}
    </section>
  );
};

export default Choose;
