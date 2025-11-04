import Image from "next/image";
import HeadText from "../Headtext/HeadText";

const GlobalImage = ({
  img = "",
  img2 = "",
  text1 = "",
  text2 = "",
  imgClass = "",
  imgInnerClass = "",
}) => {
  return (
    <>
      <div className={` ${imgClass}  relative`}>
        {img && (
          <Image
            src={img}
            className={`w-full h-full object-cover rounded-xl ${imgInnerClass}`}
            width={1000}
            height={800}
            alt="mountain"
          />
        )}
        {img2 && (
          <img
            src={img2}
            className="absolute bottom-0 left-0 right-0 w-full"
            alt="bg_bottom"
          />
        )}
        {text1 && (
          <div className="absolute top-[25%] lg:top-[15%] left-[50%] translate-x-[-50%] lg:w-full lg:px-8 flex flex-col items-center justify-center">
            <HeadText
              textColor={`colorOrange`}
              text={text1}
              customClass="font-semibold lg:w-full lg:text-center text-4xl lg:text-2xl"
            />
            <p
              className="text-[--colorBlue] text-center mt-4  lg:w-full"
              dangerouslySetInnerHTML={{ __html: `${text2}` }}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default GlobalImage;
