"use client";
import ClientValyuta from "../../(pages)/Home/HomeComponents/PackageComps/ClientValyuta";

const GlobalTopImageComponent = ({
  img = "",
  cityName = "",
  text1 = "",
  wpText = "",
  wpLink = "",
  text2 = "",
  text3 = "",
  price = "",
  secret = "",
  cityName2 = "",
}) => {
  console.log("secret", secret);

  return (
    <>
      <div
        style={{
          backgroundImage: secret === 1 ? `url(${img})` : "none",
        }}
        className={`${
          secret === 1
            ? "h-[800px] xl:h-[600px] lg:h-[500px] md:h-[400px] m-8 1xl:m-4 lg:m-0 rounded-2xl lg:rounded-none !bg-cover !bg-center !bg-no-repeat"
            : "w-full pt-[180px] pb-[50px] bg-[--destibg] "
        }`}
      >
        <div className="flex flex-col justify-center h-full px-20 1xl:px-10 lg:px-4 lg:items-center">
          {secret === 1 && cityName && (
            <div
              className="text-[--colorWhite] text-7xl 1xl:text-6xl lg:text-2xl font-semibold capitalize"
              dangerouslySetInnerHTML={{ __html: `${cityName}` }}
            />
          )}
          {secret === 0 && (
            <h3 className=" capitalize text-[--colorOrange] text-center font-bold text-5xl 1xl:text-4xl lg:text-3xl mt-8 xl:mt-3 ">
              {cityName2}
            </h3>
          )}
          {text1 && (
            <h3 className="italic capitalize text-[--colorWhite] text-6xl 1xl:text-6xl lg:text-3xl mt-8 xl:mt-3 font-extralight">
              {text1}
            </h3>
          )}
          {wpText && (
            <a
              target="_blank"
              href={`${wpLink}`}
              className={`bg-[--bg-green-wp] text-[--colorWhite] w-max mt-8 xl:mt-3 px-4 py-2 capitalize rounded-lg ${
                secret === 0 ? "mx-auto" : ""
              }`}
            >
              {wpText}
            </a>
          )}
          {text2 && (
            <div
              className={`flex items-center gap-4  mt-6 lg:mt-3 text-xl ${
                secret === 0
                  ? "mx-auto text-[--colorOrange]"
                  : "text-[--colorWhite]"
              }`}
            >
              <h4>{text2}</h4>
              <div
                className={`text-[--colorWhite] ${
                  secret === 0 ? "text-[--colorOrange]" : "text-[--colorWhite]"
                }`}
              >
                <ClientValyuta
                  currency={price}
                  color={`${
                    secret === 0
                      ? "text-[--colorOrange]"
                      : "text-[--colorWhite]"
                  }`}
                />
              </div>
            </div>
          )}
          {text3 && (
            <h4
              className={` mt-4 ${
                secret === 0
                  ? "text-[--colorOrange] mx-auto"
                  : "text-[--colorWhite]"
              }`}
            >
              {text3}
            </h4>
          )}
        </div>
      </div>
    </>
  );
};

export default GlobalTopImageComponent;
