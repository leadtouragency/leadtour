import SharedLink from "@/app/(componnets)/Shared/SharedLink/SharedLink";
import Image from "next/image";
import ClientValyuta from "./ClientValyuta";
import ServerIcons from "./ServerIcons";
import { toSlug } from "@/app/(componnets)/Shared/ConvertToSlug/ConvertToSlug";
import PackageBlogDate from "./PackageBlogDate";
export const icons = [
  {
    id: 1,
    img: "/fakedata/package/icons/icon1.png",
  },
  {
    id: 2,
    img: "/fakedata/package/icons/icon2.png",
  },
  {
    id: 3,
    img: "/fakedata/package/icons/icon3.png",
  },
  {
    id: 4,
    img: "/fakedata/package/icons/icon4.png",
  },
  {
    id: 5,
    img: "/fakedata/package/icons/icon5.png",
  },
];
const ServerPackage = ({
  products,
  customGrid,
  customMainGrid,
  order = "",
  customImgSize,
  customFlex,
  hrefTo,
  code,
  itemToSlug = "",
  per_person,
  checkAll,
  published_on = "",
  hiddenBtn = "",
}) => {
  return (
    <div className="grid gap-6 grid-cols-12  mt-6 lg:mt-2 lg:px-4 pb-[30px]">
      {products?.map((product, i) => {
        const blogDate = product?.created_at;
        let date = new Date(blogDate);
        let blogFullDate =
          date?.getDate() + "." + date?.getMonth() + "." + date?.getFullYear();
        itemToSlug = toSlug(product?.name);
        return (
          <div
            key={i}
            className={`px-4 py-4 lg:px-2 ${customMainGrid} border flex flex-col bg-[--colorWhite] border-[--gray100] rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200`}
          >
            <div className="grid grid-cols-12">
              <div className={`${customGrid} mb-4 lg:mb-0`}>
                <div className={`${customImgSize}`}>
                  <Image
                    width={1000}
                    height={380}
                    src={`${process.env.NEXT_PUBLIC_PICTURE}/${product?.cover}`}
                    alt={`${product?.name}`}
                    priority={i < 4}
                    className="w-full h-full rounded-[16px] object-cover"
                  />
                </div>
              </div>
              <div className={`${customGrid} ${order}`}>
                {product?.name && (
                  <h4 className="text-lg 2xl:text-sm lg:pt-4 font-semibold text-[--colorOrange] mb-1 line-clamp-2">
                    {product?.name}
                  </h4>
                )}
                {product?.tour_short_title && (
                  <div
                    className="text-base text-[--colorBlue]  my-2 2xl:text-sm  line-clamp-3"
                    dangerouslySetInnerHTML={{
                      __html: `${product?.tour_short_title}`,
                    }}
                  />
                )}
                {product?.guides_title && (
                  <div
                    className="text-base text-[--colorBlue]  my-2 2xl:text-sm  line-clamp-3"
                    dangerouslySetInnerHTML={{
                      __html: `${product?.guides_title}`,
                    }}
                  />
                )}
                {product?.text && (
                  <div
                    className="text-base text-[--colorBlue]  my-2 2xl:text-sm  line-clamp-3"
                    dangerouslySetInnerHTML={{
                      __html: `${product?.text}`,
                    }}
                  />
                )}

                <ServerIcons icons={icons} url={product?.url} />

                <div
                  className={` font-bold text-[--colorDark] flex justify-between  ${customFlex}  border-t border-[--gray200] pt-3`}
                >
                  <div className="flex flex-col gap-1">
                    {per_person && (
                      <span className="text-[--colorBlue] text-xs font-normal">
                        {per_person}
                      </span>
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
                      <div className="flex flex-col">
                        {published_on && (
                          <h4 className="text-[--colorBlue] text-xs capitalize font-medium">
                            {published_on}
                          </h4>
                        )}
                        <PackageBlogDate
                          code={code}
                          blogFullDate={blogFullDate}
                        />
                      </div>
                    </div>
                  </div>
                  <div className={hiddenBtn}>
                    <SharedLink
                      btnText={checkAll}
                      hrefTo={`${hrefTo}/${product?.id}/${itemToSlug}`}
                      code={code}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ServerPackage;
