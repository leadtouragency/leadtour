import GetAFreeComponent from "@/app/(componnets)/Shared/GetAFreeComponent/GetAFreeComponent";
import { getDestinationStyles } from "@/app/(componnets)/Shared/getDestinationStyles/GetDestinationStyles";
import Image from "next/image";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";

const HomeDestination = ({
  data_category,
  code,
  stils2,
  top_destinations,
  looking_for_something,
  looking_for_something_long,
  looking_for_something_link_text,
}) => {
  const { mainGrid, promoCard, itemCard, imageHeight, linearImg, spanArrow } =
    getDestinationStyles(stils2);

  return (
    <section className="px-8 py-8 1xl:mt-6 lg:mt-4 lg:px-4 lg:py-0">
      <h2 className="text-center mb-10 text-[--colorOrange] text-4xl lg:text-3xl md:text-2xl">
        {top_destinations}
      </h2>

      {/* 2. ADIM: Belirlediğimiz değişkeni buraya veriyoruz */}
      <div className={`grid gap-4 ${mainGrid}`}>
        {data_category &&
          data_category?.map((cur) => (
            <div
              key={cur?.id}
              className={`${itemCard}   h-full transition-all hover:scale-[1.020] `}
            >
              <Link
                href={`/${code}/destinations/${cur?.slug}`}
                className="w-full flex flex-col relative h-full"
              >
                <Image
                  src={`${process.env.NEXT_PUBLIC_PICTURE}/${cur?.image_2}`}
                  width={1000}
                  height={100}
                  alt={`${cur?.title}`}
                  className={`${imageHeight}  object-cover`}
                />
                <img
                  className={`absolute top-0 left-0 right-0 bottom-0 w-full h-full ${linearImg}`}
                  src="/fakedata/destination/after.png"
                  alt={`${cur?.alt_title}`}
                />
                <div className="flex flex-col gap-2 absolute bottom-8 left-4 px-3">
                  <h2 className="text-[--colorWhite] text-4xl lg:text-2xl ">
                    {cur?.title}
                  </h2>
                  <p className="text-[--colorWhite] lg:text-sm line-clamp-2">
                    {cur?.alt_title}
                  </p>
                </div>
                <span
                  className={`rounded-full bg-[--colorWhite] absolute w-[40px] h-[40px] flex items-center justify-center text-2xl text-[--plan] ${spanArrow}`}
                >
                  <GoArrowUpRight />
                </span>
              </Link>
            </div>
          ))}
        <div className={`${promoCard} md:h-64 overflow-hidden rounded-3xl`}>
          <GetAFreeComponent
            src={`/fakedata/destination/picture8.png`}
            alt1={`picture8`}
            src2={`/fakedata/destination/after.png`}
            alt2={looking_for_something}
            h2text={looking_for_something}
            ptext={looking_for_something_long}
            link={`#`}
            btnText={looking_for_something_link_text}
          />
        </div>
      </div>
    </section>
  );
};

export default HomeDestination;
