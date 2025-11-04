import HeadText from "../Headtext/HeadText";
import SingleAccordion from "../../(pages)/Destinations/Single/SingleAccordion";

const SinglePageGrid1 = ({
  h3text,
  ptext,
  headText,
  tags,
  slider,
  headText2,
  what1,
  headText3,
  what2,
  headText4,
  what3,
  headText5,
  what4,
  headText6,
  what5,
  accordionsData,
}) => {
  return (
    <>
      <div className="col-span-8  text-black xl:col-span-12">
        <div className="section1 bg-[--colorWhite] shadow rounded-xl px-8 py-6 xl:px-4">
          <h3 className="text-[--colorOrange] text-3xl font-semibold mb-3">
            {h3text}
          </h3>
          <div
            className="text-[--colorDark]"
            dangerouslySetInnerHTML={{ __html: `${ptext}` }}
          />
        </div>
        <div className="section2 bg-[--colorWhite] shadow rounded-xl px-8 py-6 mt-6 xl:px-4">
          <HeadText
            textColor={`plan`}
            customClass="text-4xl 1xl:text-3xl lg:text-2xl md:text-xl"
            text={headText}
          />
          {tags && (
            <ul className="flex flex-wrap gap-4 mt-6">
              {tags &&
                tags?.map((tag) => (
                  <li
                    className="border border-[--plan]  px-4 py-3 lg:px-2 lg:py-2 text-[--plan] capitalize text-xl lg:text-sm rounded-md"
                    key={tag.id}
                  >
                    {tag?.title}
                  </li>
                ))}
            </ul>
          )}

          <ul className="grid grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 mt-6">
            {slider?.map((item) => (
              <li key={item.id}>
                <img
                  src={`${process.env.NEXT_PUBLIC_PICTURE}/${item?.image}`}
                  alt="slider"
                  className="w-full h-[200px] rounded-xl"
                />
              </li>
            ))}
          </ul>
        </div>
        <div className="section3 bg-[--colorWhite] shadow rounded-xl px-8 py-6 lg:px-3  lg:py-3 mt-6">
          <HeadText
            textColor={`bg-green-wp`}
            text={headText2}
            customClass="text-4xl 1xl:text-3xl  lg:text-2xl md:text-xl"
          />
          <div
            className="mt-4"
            dangerouslySetInnerHTML={{ __html: `${what1}` }}
          />
        </div>
        <div className="section4 bg-[--colorWhite] shadow rounded-xl px-8 py-6 mt-6 lg:px-3  lg:py-3">
          <HeadText
            textColor={`colorOrange`}
            text={headText3}
            customClass="text-4xl 1xl:text-3xl lg:text-2xl md:text-xl"
          />
          <div
            className="mt-4"
            dangerouslySetInnerHTML={{ __html: `${what2}` }}
          />
        </div>
        <div className="section5 bg-[--colorWhite] shadow rounded-xl px-8 py-6 mt-6 lg:px-3  lg:py-3">
          <HeadText
            textColor={`plan`}
            text={headText4}
            customClass="text-4xl 1xl:text-3xl lg:text-2xl md:text-xl"
          />
          <div
            className="mt-4"
            dangerouslySetInnerHTML={{ __html: `${what3}` }}
          />
        </div>
        <div className="section5 bg-[--colorWhite] shadow rounded-xl px-8 py-6 mt-6 lg:px-3  lg:py-3">
          <HeadText
            textColor={`plan`}
            text={headText5}
            customClass="text-4xl 1xl:text-3xl lg:text-2xl md:text-xl"
          />
          <div
            className="mt-4"
            dangerouslySetInnerHTML={{ __html: `${what4}` }}
          />
        </div>
        <div className="section6 bg-[--colorWhite] shadow rounded-xl px-8 py-6 mt-6 lg:px-3  lg:py-3">
          <HeadText
            textColor={`plan`}
            text={headText6}
            customClass="text-4xl lg:text-2xl md:text-xl"
          />
          <div
            className="mt-4"
            dangerouslySetInnerHTML={{ __html: `${what5}` }}
          />
        </div>
        <div className="section7 bg-[--colorWhite] shadow rounded-xl px-8 py-6 mt-6 lg:px-3  lg:py-3">
          <SingleAccordion data={accordionsData} />
        </div>
      </div>
    </>
  );
};

export default SinglePageGrid1;
