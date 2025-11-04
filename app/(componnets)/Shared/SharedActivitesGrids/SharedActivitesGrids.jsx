import React from "react";
import SharedLink from "../SharedLink/SharedLink";
import Image from "next/image";
import { icons } from "../../(pages)/Home/HomeComponents/PackageComps/ServerPackage";
import ClientValyuta from "../../(pages)/Home/HomeComponents/PackageComps/ClientValyuta";

const SharedActivitesGrids = ({
  data_activity,
  per_person,
  checkAll,
  code,
}) => {
  return (
    <>
      {data_activity?.map((product, i) => (
        <div
          className={`px-4 py-4 col-span-3 xl:col-span-4 lg:col-span-6 md:col-span-12  sm:col-span-12} border flex flex-col bg-[--colorWhite] border-[--gray100] rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200`}
        >
          <div className="grid grid-cols-12">
            <div className={`col-span-12 mb-4 lg:mb-0`}>
              {product?.image && (
                <div className={`h-[380px] 2xl:h-[230px]`}>
                  <Image
                    width={1000}
                    height={380}
                    src={`${process.env.NEXT_PUBLIC_PICTURE}/${product?.image}`}
                    alt={`${product?.name}`}
                    priority={i < 4}
                    className="w-full h-full"
                  />
                </div>
              )}
            </div>
            <div className={`col-span-12`}>
              {product?.name && (
                <h4 className="text-lg 2xl:text-sm lg:pt-4 font-semibold text-[--colorOrange] mb-1 line-clamp-2">
                  {product?.name}
                </h4>
              )}
              {product?.title && (
                <p className="text-base text-[--colorBlue]  my-2 2xl:text-sm  line-clamp-3">
                  {product?.title}
                </p>
              )}

              {icons && (
                <ul className="flex items-center justify-between my-4 gap-2">
                  {icons?.map((cur, i) => (
                    <li
                      key={i}
                      className="icons pr-3  flex items-center justify-center w-full"
                    >
                      <img
                        src={cur?.img}
                        alt="icons"
                        className="max-w-6 2xl:max-w-5"
                      />
                    </li>
                  ))}
                </ul>
              )}
              <div
                className={` font-bold text-[--colorDark] flex justify-between  items-center  border-t border-[--gray200] pt-3`}
              >
                <div className="flex flex-col gap-1">
                  {per_person && (
                    <span className="text-[--colorBlue] text-xs font-normal">
                      {per_person}
                    </span>
                  )}
                  {product?.published && (
                    <h4 className="text-[--colorBlue] text-xs capitalize font-medium">
                      {product?.published}
                    </h4>
                  )}

                  <div className="flex items-baseline gap-1">
                    {product?.personprice && (
                      <h4 className="text-[--colorBlue] text-2xl 2xl:text-xl font-medium">
                        {product?.personprice}
                      </h4>
                    )}
                    <ClientValyuta
                      currency={product}
                      color="text-[--colorBlue]"
                    />

                    {product?.date && (
                      <h4 className="text-[--colorBlue] text-lg font-medium 2xl:text-sm">
                        {product?.date}
                      </h4>
                    )}
                  </div>
                </div>
                <div className="">
                  <SharedLink
                    btnText={checkAll}
                    code={code}
                    hrefTo={`activites/${product?.id}/${product?.slug}`}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default SharedActivitesGrids;
