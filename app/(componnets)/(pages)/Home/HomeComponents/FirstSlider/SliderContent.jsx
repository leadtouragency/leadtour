import Image from "next/image";
import SliderButtonModal from "./SliderButtonModal";

const SliderContent = ({ item, tr, code }) => {
  return (
    <div className="relative rounded-3xl px-8 py-8 lg:px-4 md:px-0 md:rounded-none">
      <Image
        width={1000}
        height={800}
        className="w-full h-[900px] lg:h-[650px] md:h-[450px] object-cover rounded-3xl md:rounded-none"
        src={`${process.env.NEXT_PUBLIC_PICTURE}/${item?.image}`}
        alt={`${item?.text}`}
      />
      <div className="absolute top-48 left-32 lg:left-[50%]   flex flex-col gap-10 lg:top-[50%] lg:translate-x-[-50%] lg:translate-y-[-50%] lg:text-center lg:w-full lg:px-4">
        <div
          className="text-7xl 2xl:text-6xl xl:text-4xl text-[--colorWhite]  lg:text-2xl  font-bold lg:text-center  "
          dangerouslySetInnerHTML={{ __html: `${item?.text}` }}
        />

        <SliderButtonModal tr={tr} title={item?.button_title} code={code} />
      </div>
    </div>
  );
};

export default SliderContent;
