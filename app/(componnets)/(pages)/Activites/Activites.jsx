"use client";
import GlobalTopImageComponent from "../../Shared/GlobalTopImageComponent/GlobalTopImageComponent";
import HeadText from "../../Shared/Headtext/HeadText";
import BlogVideos from "../Blogs/BlogVideos";
import ContactForm from "../../Forms/PagesForms/ContactForm/ContactForm";
import Connect from "../Home/HomeComponents/Connect";
import SharedActivitesGrids from "../../Shared/SharedActivitesGrids/SharedActivitesGrids";

const Activites = ({
  code,
  tr,
  advantages,
  follow_us_instagram,
  data_activity,
  per_person,
  checkAll,
  video_data,
  ac_header,
  top_activities,
  contact_form_text1,
  contact_form_text2,
  contact_form_text3,
  fullname_form,
  enter_your_name,
  email_form,
  email_address,
  number_form,
  your_message,
  secret,
}) => {
  const allProducts = data_activity?.flatMap((item) => item.products);

  return (
    <section className="">
      <GlobalTopImageComponent
        img={`${process?.env.NEXT_PUBLIC_PICTURE}/${ac_header?.image}`}
        cityName={ac_header?.text}
        cityName2={ac_header?.text2}
        secret={secret?.section14}
      />

      <div>
        <div className={`flex items-center justify-center 1xl:mt-10 `}>
          <HeadText
            text={top_activities}
            textColor="colorOrange"
            customClass={`text-4xl 1xl:text-3xl lg:text-2xl font-semibold ${
              secret?.section14 === 0 ? "mt-[30px]" : ""
            }`}
          />
        </div>
        <div
          className={`px-8 lg:px-0 ${
            secret?.section8 === 0 ? "mb-[50px]" : ""
          }`}
        >
          <div className="grid grid-cols-12 gap-6 mt-6">
            <SharedActivitesGrids
              data_activity={allProducts}
              per_person={per_person}
              code={code}
              checkAll={checkAll}
            />
          </div>
          {secret?.section15 === 1 && (
            <div className="mt-44 1xl:mt-20 lg:px-4">
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
            </div>
          )}
          {secret?.section10 === 1 && (
            <div
              className={`mb-14 ${secret?.section15 === 0 ? "pt-[40px]" : ""}`}
            >
              <ContactForm
                code={code}
                tr={tr}
                contact_form_text1={contact_form_text1}
                contact_form_text2={contact_form_text2}
                contact_form_text3={contact_form_text3}
                fullname_form={fullname_form}
                enter_your_name={enter_your_name}
                email_form={email_form}
                email_address={email_address}
                number_form={number_form}
                your_message={your_message}
                customClass={`mx-36 1xl:mx-16 g:mx-6 lg:mx-2 shadow`}
              />
            </div>
          )}

          {secret?.section8 === 1 && (
            <Connect
              follow_us_instagram={follow_us_instagram}
              code={code}
              advantages={advantages}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default Activites;
