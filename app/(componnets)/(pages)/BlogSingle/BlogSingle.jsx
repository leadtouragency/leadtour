import { TbReplace } from "react-icons/tb";
import SharedBtn from "../../Shared/SharedBtn/SharedBtn";
import { FaEye } from "react-icons/fa";
import { FaFacebookF, FaTiktok, FaInstagram } from "react-icons/fa";
import { IoIosLink } from "react-icons/io";
import SahredSocials from "../../Shared/SharedSocials/SahredSocials";

import Image from "next/image";

import BlogSingleMap from "./BlogSingleMap";
import Link from "next/link";
import Connect from "../Home/HomeComponents/Connect";
import GlobalImage from "../../Shared/GlobalImage/GlobalImage";
import HeadText from "../../Shared/Headtext/HeadText";

const BlogSingle = ({
  code,
  advantages,
  follow_us_instagram,
  data,
  plan_your_visit_now,
  places_to_see,
  looking_for_something,
  looking_for_something_long,
  looking_for_something_link_text,
  secret,
}) => {
  const socials = [
    {
      id: 1,
      link: "/",
      icon: <FaFacebookF />,
    },
    {
      id: 2,
      link: "/",
      icon: <FaTiktok />,
    },
    {
      id: 3,
      link: "/",
      icon: <FaInstagram />,
    },
    {
      id: 4,
      link: "/",
      icon: <IoIosLink />,
    },
  ];
  return (
    <section className={secret?.section25 === 0 ? "mt-[100px]" : ""}>
      <div className="mx-8 py-8 lg:mx-0">
        {secret?.section25 === 1 && (
          <GlobalImage
            secret={secret?.section25}
            img={`${process.env.NEXT_PUBLIC_PICTURE}/${data?.cover}`}
            imgClass="h-[800px] 1xl:h-[600px] lg:h-[600px] md:h-[400px]"
          />
        )}

        <div className="px-24 mt-10 mb-10 1xl:px-6 lg:px-4">
          <div className="flex justify-between items-center lg:flex-col lg:gap-6 lg:items-start">
            <div className="flex items-center  gap-6 lg:justify-between w-full">
              <SharedBtn
                text={places_to_see}
                bgColor={`var(--color914)`}
                coloWhite={`coloWhite`}
                icon={<TbReplace />}
              />
              <SharedBtn
                text={`2 people's read`}
                bgColor={`var(--plan)`}
                coloWhite={`coloWhite`}
                icon={<FaEye />}
              />
            </div>
            <SahredSocials data={socials} />
          </div>
          <div className="mt-10 ">
            <HeadText
              textColor={`colorOrange`}
              text={data?.name}
              customClass="font-semibold text-4xl lg:text-2xl"
            />
            <div
              className="text-[--colorBlue] mt-4 mb-10 lg:mb-4"
              dangerouslySetInnerHTML={{ __html: `${data?.text}` }}
            />

            <div className="grid grid-cols-12 gap-4 mt-6">
              <div className="col-span-6 lg:col-span-12">
                <Image
                  width={1000}
                  height={300}
                  src={`${process.env.NEXT_PUBLIC_PICTURE}/${data?.image}`}
                  alt="pic2"
                  className="w-full h-[600px] 1xl:h-[400px] object-cover rounded-xl"
                />
              </div>
              <div className="col-span-6 lg:col-span-12 pl-10 lg:pl-0 lg:pt-5">
                <HeadText
                  textColor={`colorOrange`}
                  text={data?.paragraph_1}
                  customClass="font-semibold text-4xl lg:text-2xl"
                />
                <div
                  className="text-[--colorBlue] mt-4 mb-10 lg:mb-0"
                  dangerouslySetInnerHTML={{ __html: `${data?.head_text_1}` }}
                />
              </div>
            </div>
            <div className="mt-10">
              <HeadText
                textColor={`colorOrange`}
                text={data?.paragraph_2}
                customClass="font-semibold text-4xl lg:text-2xl"
              />
              <div
                className="text-[--colorBlue] mt-4 mb-10"
                dangerouslySetInnerHTML={{ __html: `${data?.head_text_2}` }}
              />
              {secret?.section26 === 1 && (
                <GlobalImage
                  secret={secret?.section26}
                  img={`${process.env.NEXT_PUBLIC_PICTURE}/${data?.image_2}`}
                  imgClass="h-[800px] 1xl:h-[600px] lg:h-[600px] md:h-[400px]"
                />
              )}

              <div className="bg-[--colorWhite] p-4 mt-6 rounded-xl">
                <HeadText
                  textColor={`plan`}
                  text={data?.paragraph_3}
                  customClass="font-semibold text-4xl lg:text-2xl"
                />
                <div
                  className="mt-4 text-[--colorBlue]"
                  dangerouslySetInnerHTML={{ __html: `${data?.head_text_3}` }}
                />
              </div>

              {secret?.section15 === 1 && (
                <BlogSingleMap
                  video={data?.blog_video}
                  map={data?.blog_map}
                  looking_for_something_link_text={
                    looking_for_something_link_text
                  }
                  looking_for_something_long={looking_for_something_long}
                  img={`${process.env.NEXT_PUBLIC_PICTURE}/${data?.image_3}`}
                  looking_for_something={looking_for_something}
                />
              )}

              <div className="mt-6">
                <HeadText
                  textColor={`colorOrange`}
                  text={data?.paragraph_4}
                  customClass="font-semibold text-4xl lg:text-2xl"
                />
                <div
                  className="mt-4 text-[--colorBlue]"
                  dangerouslySetInnerHTML={{ __html: `${data?.head_text_4}` }}
                />

                <div className="my-6">
                  <HeadText
                    textColor={`plan`}
                    text={data?.paragraph_5}
                    customClass="font-semibold text-4xl lg:text-2xl"
                  />
                  <div
                    className="mt-4 text-[--colorBlue]"
                    dangerouslySetInnerHTML={{ __html: `${data?.head_text_5}` }}
                  />
                  <div className="my-6">
                    <HeadText
                      textColor={`colorOrange`}
                      text={data?.paragraph_6}
                      customClass="font-semibold text-4xl lg:text-2xl"
                    />
                  </div>
                  <div
                    className="mt-4 text-[--colorBlue]"
                    dangerouslySetInnerHTML={{ __html: `${data?.head_text_6}` }}
                  />

                  <Link
                    href={"/"}
                    className="bg-[--plan] capitalize text-[--colorWhite] px-8 py-2 mt-8 inline-flex "
                  >
                    {plan_your_visit_now}
                  </Link>
                  <div className="mt-8">
                    <SahredSocials data={socials} />
                  </div>
                  {secret?.section8 === 1 && (
                    <Connect
                      code={code}
                      follow_us_instagram={follow_us_instagram}
                      advantages={advantages}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSingle;
