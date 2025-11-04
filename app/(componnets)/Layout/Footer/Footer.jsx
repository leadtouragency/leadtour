"use client";
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[--plan] px-16 py-10 xl:px-8 lg:px-4">
      <div className="grid grid-cols-12 gap-8 lg:gap-0">
        <div className="col-span-3  lg:col-span-12 ">
          <Link
            href={"/az"}
            className=" lg:flex lg:w-full lg:items-center lg:justify-center"
          >
            <Image
              src={"/logo_white.svg"}
              width={120}
              height={150}
              className="object-cover"
              alt="logo white"
            />
          </Link>
          <ul className="flex items-center  gap-8 mt-8 lg:gap-3 text-xl lg:text-center lg:justify-center">
            <li>
              <Link href={"/"} className="text-[--colorWhite]">
                <FaFacebookF />
              </Link>
            </li>
            <li>
              <Link href={"/"} className="text-[--colorWhite]">
                <FaLinkedinIn />
              </Link>
            </li>
            <li>
              <Link href={"/"} className="text-[--colorWhite]">
                <FaInstagram />
              </Link>
            </li>
            <li>
              <Link href={"/"} className="text-[--colorWhite]">
                <FaYoutube />
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-span-9 lg:col-span-12 lg:mt-5">
          <div className="grid grid-cols-12 gap-6 lg:gap-0">
            <div className="col-span-3 xl:col-span-4 lg:col-span-6 md:col-span-12 lg:pt-4">
              <ul className="flex flex-col justify-center  h-full gap-6 lg:gap-0 lg:text-center ">
                <li className="lg:pb-4">
                  <Link href={"/"} className="text-[--colorWhite]">
                    Become a Partner
                  </Link>
                </li>
                <li className="lg:pb-4">
                  <Link href={"/"} className="text-[--colorWhite]">
                    Travel Tips
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-span-3 xl:col-span-4 lg:col-span-6 md:col-span-12">
              <ul className="flex flex-col justify-center  h-full gap-6 lg:gap-0 lg:text-center ">
                <li className="lg:pb-4">
                  <Link href={"/"} className="text-[--colorWhite]">
                    Destinations
                  </Link>
                </li>
                <li className="lg:pb-4">
                  <Link href={"/"} className="text-[--colorWhite]">
                    Activities
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-span-3 xl:col-span-4 lg:col-span-6 md:col-span-12">
              <ul className="flex flex-col justify-center  h-full gap-6 lg:gap-0 lg:text-center ">
                <li className="lg:pb-4">
                  <Link href={"/"} className="text-[--colorWhite]">
                    LeadTour Agency
                  </Link>
                </li>
                <li className="lg:pb-4">
                  <Link href={"/"} className="text-[--colorWhite]">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-span-3 xl:col-span-4 lg:col-span-6 md:col-span-12">
              <ul className="flex flex-col justify-center  h-full gap-6 lg:gap-0 lg:text-center ">
                <li className="lg:pb-4">
                  <Link href={"/"} className="text-[--colorWhite]">
                    Privacy Policy
                  </Link>
                </li>
                <li className="">
                  <Link href={"/"} className="text-[--colorWhite]">
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
