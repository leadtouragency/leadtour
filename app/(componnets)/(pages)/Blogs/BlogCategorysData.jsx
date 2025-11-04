import { Provider } from "@/components/ui/provider";
import { Tabs } from "@chakra-ui/react";
import "../../style/bootstrap.css";
import ServerPackage from "../Home/HomeComponents/PackageComps/ServerPackage";
import HeadText from "../../Shared/Headtext/HeadText";

const BlogCategorysData = ({
  data,
  hrefStart,
  featured_blogs,
  checkAll,
  published_on,
  code,
}) => {
  const defaultTabValue = data?.[0]?.title;

  return (
    <div className="mt-5">
      <Provider>
        <Tabs.Root defaultValue={defaultTabValue}>
          <Tabs.List className=" flex items-center justify-center flex-wrap px-20 2xl:px-0">
            {data?.map((item, i) => {
              return (
                <Tabs.Trigger
                  key={item?.id || i}
                  value={item?.title}
                  className="col-xl-3 col-lg-4 col-md-12 col-sm-12 col-12  px-2   mb-4 lg:mb-2 catSelect header-transition w-max"
                >
                  <div
                    className=" h-full text-[--plan] header-transition text-[18px] 
                  border  w-full border-[--borderCtg] px-3  py-2 flex items-center gap-4 rounded-md
                    lg:flex lg:justify-center
                  "
                  >
                    <img
                      src={`${process.env.NEXT_PUBLIC_PICTURE}/${item?.image}`}
                      alt={`${item?.title}`}
                    />

                    <h3 className="w-max header-transition lg:text-[14px]">
                      {item?.title}
                    </h3>
                  </div>
                </Tabs.Trigger>
              );
            })}
          </Tabs.List>
          {data?.map((item, i) => (
            <Tabs.Content
              key={i}
              value={item?.title}
              className="outline-none border-none pt-0 mt-0"
            >
              <div className="flex items-center justify-center my-8 lg:my-4">
                <HeadText
                  textColor={`colorOrange`}
                  text={featured_blogs}
                  customClass="font-semibold text-4xl lg:text-2xl"
                />
              </div>
              <ServerPackage
                products={item?.products}
                code={code}
                checkAll={checkAll}
                published_on={published_on}
                customGrid={`col-span-12`}
                customImgSize={`h-[380px] 2xl:h-[230px] `}
                customFlex="items-center"
                hrefTo="tips"
                customMainGrid={`col-span-3 xl:col-span-4 lg:col-span-6 md:col-span-12  sm:col-span-12`}
              />
            </Tabs.Content>
          ))}
        </Tabs.Root>
      </Provider>
    </div>
  );
};

export default BlogCategorysData;
