import BlogCategorysData from "./BlogCategorysData";
import BlogVideos from "./BlogVideos";
import ServerPackage from "../Home/HomeComponents/PackageComps/ServerPackage";
import ContactForm from "../../Forms/PagesForms/ContactForm/ContactForm";
import Connect from "../Home/HomeComponents/Connect";
import GlobalImage from "../../Shared/GlobalImage/GlobalImage";
import HeadText from "../../Shared/Headtext/HeadText";

const BlogsPage = ({
  video_data,
  code,
  data_cats,
  explore_category,
  advantages,
  follow_us_instagram,
  blog_header,
  latest_travel_guides,
  contact_form_text1,
  contact_form_text2,
  contact_form_text3,
  fullname_form,
  enter_your_name,
  email_form,
  email_address,
  number_form,
  your_message,
  guides,
  read_more,
  published_on,
  featured_blogs,
  tr,
  secret,
}) => {
  return (
    <section className="">
      <GlobalImage
        img={`${process?.env.NEXT_PUBLIC_PICTURE}/${blog_header?.image}`}
        imgClass={`${
          secret?.section13 === 1 ? "h-[800px] 1xl:h-[600px] lg:h-[600px]" : ""
        }`}
        img2={`/fakedata/blogs/bg_bottom.png`}
        text1={blog_header?.title}
        text2={blog_header?.text}
        secret={secret?.section13}
      />

      <div className="flex items-center justify-center mt-8 px-8 flex-col lg:px-2">
        <HeadText
          textColor={`colorOrange`}
          text={explore_category}
          customClass="font-semibold text-4xl lg:text-2xl"
        />
        <BlogCategorysData
          data={data_cats}
          featured_blogs={featured_blogs}
          code={code}
          published_on={published_on}
          hrefStart="tips"
          checkAll={read_more}
        />
        {secret?.section15 === 1 && (
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
        )}
        {secret?.section16 === 1 && (
          <div className="mb-10">
            <div className="flex items-center justify-center">
              <HeadText
                text={latest_travel_guides}
                textColor={`colorOrange`}
                customClass="font-semibold mb-0 text-4xl lg:text-2xl"
              />
            </div>

            <ServerPackage
              products={guides}
              checkAll={read_more}
              hrefTo={"g"}
              code={code}
              hiddenBtn="hidden"
              published_on={published_on}
              customMainGrid={`col-span-6 xl:col-span-6 md:col-span-12`}
              customGrid={`col-span-6 lg:col-span-12`}
              order={
                "order-[-1] lg:order-[0] pr-10 lg:pr-0 pl-6 lg:pl-0  lg:flex lg:justify-center lg:flex-col "
              }
              customImgSize={`h-[300px] 2xl:h-[230px] `}
              customFlex="items-start flex-col gap-10 2xl:gap-4"
            />
          </div>
        )}

        <div className="mb-10">
          {secret?.section10 === 1 && (
            <ContactForm
              contact_form_text1={contact_form_text1}
              contact_form_text2={contact_form_text2}
              contact_form_text3={contact_form_text3}
              enter_your_name={enter_your_name}
              fullname_form={fullname_form}
              email_form={email_form}
              email_address={email_address}
              number_form={number_form}
              your_message={your_message}
              tr={tr}
              customClass={`mt-10 mx-36 2xl:mt-16 2xl:mb-8 2xl:mx-8 xl:mx-4 lg:mx-0`}
            />
          )}

          {secret?.section8 === 1 && (
            <Connect
              advantages={advantages}
              code={code}
              follow_us_instagram={follow_us_instagram}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default BlogsPage;
