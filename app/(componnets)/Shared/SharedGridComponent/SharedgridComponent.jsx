import React from "react";

import Image from "next/image";
import { FaPlay } from "react-icons/fa";
import GetAFreeComponent from "../GetAFreeComponent/GetAFreeComponent";
const SharedgridComponent = ({
  src,
  alt1,
  alt2,
  h2text,
  ptext,
  link,
  btnText,
  myClassDiv,
  myClassSrc1,
  src2,
  alt3,
  imgClass,
  video1,
  src3,
  alt4,
  imgClass2,
  video2,
  iframe = "",
  iframeClass = "",
}) => {
  return (
    <>
      <div className="col-span-4 lg:col-span-12">
        <div className=" mb-4 rounded-2xl ">
          <GetAFreeComponent
            src={src}
            alt1={alt1}
            alt2={alt2}
            h2text={h2text}
            ptext={ptext}
            link={link}
            btnText={btnText}
            myClassDiv={myClassDiv}
            myClassSrc1={myClassSrc1}
          />
        </div>
        <div className="  ">
          <div className="relative h-full rounded-xl overflow-hidden ">
            {src2 && (
              <Image
                src={src2}
                width={1000}
                height={200}
                alt={`${alt3 || ptext}`}
                className={imgClass}
              />
            )}
            {video1 && (
              <span
                className="play-button absolute cursor-pointer top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-10 text-5xl lg:text-3xl text-[--colorWhite] transition-transform duration-300 group-hover:scale-125"
                data-videolink={video1}
              >
                <FaPlay />
              </span>
            )}
          </div>
        </div>
      </div>
      <div className="col-span-8 lg:col-span-12">
        {src3 && (
          <div className=" ">
            <div className="relative">
              <Image
                src={src3}
                width={1000}
                height={200}
                alt={`${alt4}`}
                className={imgClass2}
              />
              <span
                className="play-button absolute cursor-pointer top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-10 text-5xl lg:text-3xl text-[--colorWhite] transition-transform duration-300 group-hover:scale-125"
                data-videolink={video2}
              >
                <FaPlay />
              </span>
            </div>
          </div>
        )}
        {iframe && (
          <iframe
            className={iframeClass}
            src={iframe}
            title="Map"
            allowFullScreen
          ></iframe>
        )}
      </div>
    </>
  );
};

export default SharedgridComponent;
