import React from "react";
import GlobalImage from "../../Shared/GlobalImage/GlobalImage";
import HeadText from "../../Shared/Headtext/HeadText";
import Image from "next/image";
import BlogVideos from "../Blogs/BlogVideos";
import Choose from "../Home/HomeComponents/Choose";
import Connect from "../Home/HomeComponents/Connect";

const AboutPage = ({
  why_data,
  data_process,
  head_title,
  data_about,
  data_team,
  data_mission,
  meet_our_team,
  meet_our_team_long,
  advantages,
  follow_us_instagram,
  video_data,
  code,
}) => {
  const animation = [
    {
      id: 1,
      text: data_process?.name1,
      title: data_process?.text1,
      src: `${process.env.NEXT_PUBLIC_PICTURE}/${data_process?.image1}`,
    },
    {
      id: 2,
      text: data_process?.name2,
      title: data_process?.text2,
      src: `${process.env.NEXT_PUBLIC_PICTURE}/${data_process?.image2}`,
    },
    {
      id: 3,
      text: data_process?.name3,
      title: data_process?.text3,
      src: `${process.env.NEXT_PUBLIC_PICTURE}/${data_process?.image3}`,
    },
  ];

  return (
    <section className="min-h-screen mt-40 lg:mt-16">
      <div className="m-8 lg:m-0">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-6 lg:col-span-12">
            <GlobalImage
              img={`${process.env.NEXT_PUBLIC_PICTURE}/${data_about?.image}`}
              imgClass="h-[700px] 1xl:h-[600px] lg:h-[600px] md:h-[400px]"
            />
          </div>
          <div className="col-span-6 lg:col-span-12 lg:mt-[-4rem] relative z-10 lg:m-4">
            <div className="bg-[--destibg] h-full rounded-xl p-16 lg:p-6">
              <HeadText
                text={data_about?.title}
                customClass="text-5xl font-bold 1xl:text-4xl lg:text-3xl"
                textColor="colorOrange"
              />
              <div
                className="mt-6 text-[--colorBlue] text-xl lg:text-sm"
                dangerouslySetInnerHTML={{ __html: `${data_about?.text}` }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="px-8 mt-16 lg:px-0">
        <div className="flex items-center justify-center flex-col ">
          <HeadText
            text={meet_our_team}
            customClass="text-5xl font-semibold 1xl:text-4xl lg:text-3xl"
            textColor="colorOrange"
          />
          <p className="mt-6 text-[--colorBlue] text-xl w-[60%]  lg:w-full text-center lg:text-lg md:text-sm">
            {meet_our_team_long}
          </p>
        </div>
        <div className="max-w-[1500px] m-auto pb-20 pt-10 lg:px-4">
          <div className="grid grid-cols-12 gap-6">
            {data_team &&
              data_team?.map((item, i) => (
                <div
                  key={i}
                  className="col-span-3 lg:col-span-4 md:col-span-12 relative team_before"
                >
                  <Image
                    width={1000}
                    height={300}
                    alt={`${item?.name}`}
                    className="w-full h-[450px] lg:h-[350px] object-cover rounded-xl"
                    src={`${process.env.NEXT_PUBLIC_PICTURE}/${item?.file}`}
                  />
                  <div className="absolute bottom-4 left-0 right-0 w-full px-8  ">
                    <h3 className="text-2xl text-[--colorDark] pb-3">{}</h3>
                    <p className="text-[--colorDark]">{item?.position}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div className="px-4 mb-10 lg:px-4">
          <div className="grid grid-cols-12 gap-16 lg:gap-0">
            <div className="col-span-6 lg:col-span-12 bg-[--destibg] rounded-xl flex items-center justify-center h-full pt-32 pb-32 lg:pt-12 lg:pb-12">
              <Image
                width={1000}
                height={300}
                alt={`${data_mission?.title}`}
                src={`${process.env.NEXT_PUBLIC_PICTURE}/${data_mission?.image}`}
                className="w-[400px] object-cover lg:max-w-[200px]"
              />
            </div>
            <div className="col-span-6 lg:col-span-12 flex  justify-center flex-col lg:mt-6">
              <HeadText
                text={data_mission?.title}
                customClass="text-5xl font-semibold  1xl:text-4xl lg:text-3xl"
                textColor="colorOrange"
              />
              <div
                className="mt-6 text-[--colorBlue] text-xl lg:text-lg md:text-sm"
                dangerouslySetInnerHTML={{ __html: `${data_mission?.text}` }}
              />
            </div>
          </div>
          <BlogVideos
            src="/fakedata/blogs/blog/video/small0.png"
            alt1={video_data?.link_text}
            alt2={video_data?.title1}
            h2text={video_data?.title1}
            ptext={video_data?.text1}
            link={video_data?.link}
            btnText={video_data?.link_text}
            myClassDiv="h-[350px] relative 2xl:h-[300px] xl:h-[250px]"
            myClassSrc1="absolute bottom-0 left-0 right-0 w-full h-[200px]"
            src2={`${process?.env.NEXT_PUBLIC_PICTURE}/${video_data?.image}`}
            alt3={video_data?.link_text}
            imgClass="h-[350px] object-cover 2xl:h-[300px] xl:h-[250px]"
            video1={video_data?.video1}
            src3={`${process?.env.NEXT_PUBLIC_PICTURE}/${video_data?.image2}`}
            alt4={`big`}
            imgClass2={`w-full h-[715px] 2xl:h-[620px] xl:h-[520px] lg:h-[300px] object-cover rounded-xl`}
            video2={video_data?.video2}
          />
          <div className="max-w-[1500px] m-auto">
            <div className="flex items-center justify-center flex-col">
              <HeadText
                text={head_title}
                customClass="text-5xl  1xl:text-4xl lg:text-3xl"
                textColor="colorOrange"
              />
              <div className="grid grid-cols-12 gap-8 mt-10">
                {animation?.map((item, i) => (
                  <div
                    key={i}
                    className="col-span-4 lg:col-span-6 md:col-span-12"
                  >
                    <Image
                      src={item?.src}
                      width={1000}
                      height={300}
                      alt={`${item?.name}`}
                    />
                    <HeadText
                      text={item?.text}
                      customClass="text-2xl mt-3 lg:text-lg font-semibold"
                      textColor="colorOrange"
                    />
                    <p className="text-[--colorBlue] lg:text-sm">
                      {item?.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div>
          <Choose data_why={why_data} />
        </div>
        <div className="pt-4">
          <Connect
            follow_us_instagram={follow_us_instagram}
            code={code}
            advantages={advantages}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
