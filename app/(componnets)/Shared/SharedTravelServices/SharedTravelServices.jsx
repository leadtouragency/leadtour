import Image from "next/image";
import "../../style/bootstrap.css";
const SharedTravelServices = ({ data }) => {
  return (
    <>
      <div className="flex items-center justify-center">
        <div className="flex flex-wrap  justify-center  ">
          {data &&
            data?.map((cur, i) => (
              <div
                key={i}
                className="col-xl-3 col-lg-4 col-md-6 col-sm-12  p-2 overflow-hidden  lg:w-full"
              >
                <div className="  rounded-2xl  p-4  h-full border-service">
                  <div className=" flex items-center justify-center p-9 2xl:p-4 lg:p-3  bg-[--colorWhite] lg:justify-start h-full rounded-2xl">
                    <div className="flex items-center justify-center flex-col gap-4 lg:items-start">
                      <Image
                        width={1000}
                        height={200}
                        src={`${process.env.NEXT_PUBLIC_PICTURE}/${cur?.image}`}
                        alt={`${cur?.title}`}
                        className="w-full h-10 2xl:h-6 object-contain lg:hidden"
                      />
                      <h2 className="text-[--plan] text-3xl 2xl:text-xl text-center lg:text-start lg:text-xl">
                        {cur?.title}
                      </h2>
                      <div
                        className="text-[--colorBlue] text-xl text-center lg:text-start 2xl:text-lg lg:text-sm"
                        dangerouslySetInnerHTML={{
                          __html: `${cur?.description}`,
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default SharedTravelServices;
