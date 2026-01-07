import Image from "next/image";
import Link from "next/link";

const GetAFreeComponent = ({
  src,
  src2,
  alt1,
  alt2,
  h2text,
  btnText,
  ptext,
  link,
  myClassSrc1 = "",
  myClassDiv = "",
  myClassSrc2 = "",
}) => {
  return (
    <>
      <div className="w-full flex flex-col destination relative overflow-hidden rounded-2xl">
        <div className={`${myClassDiv}`}>
          {src && (
            <Image
              src={src}
              width={1000}
              height={300}
              alt={`${alt1}`}
              className={`${myClassSrc1}`}
            />
          )}
          {src2 && (
            <img
              className="absolute top-0 left-0 right-0 w-full h-full"
              src={src2}
              alt={`${alt2 || "alt"}`}
            />
          )}
        </div>

        <div className="flex flex-col gap-2 absolute justify-between xl:justify-center h-full lg:h-auto top-0 left-4 xl:left-0 px-3">
          <div className="flex flex-col gap-2 mt-10 xl:mt-4 xl:mb-4 ">
            <h2 className="text-[--colorWhite] text-4xl xl:text-xl lg:text-lg">
              {h2text}
            </h2>
            <div
              className="text-[--colorWhite] xl:text-sm "
              dangerouslySetInnerHTML={{ __html: `${ptext}` }}
            />
          </div>
          <Link
            className="flex mb-10 xl:mb-0  lg:mt-4   w-max px-4 py-2 border border-[--colorWhite]   text-[--colorWhite]  bg-[--plan] rounded-md"
            href={link}
          >
            {btnText}
          </Link>
        </div>
      </div>
    </>
  );
};

export default GetAFreeComponent;
