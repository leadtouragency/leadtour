"use client";
import { Tabs } from "@chakra-ui/react";
import { Provider } from "@/components/ui/provider";
import { useEffect, useState } from "react";
import ServerPackage from "../Home/HomeComponents/PackageComps/ServerPackage";
import { toSlug } from "../../Shared/ConvertToSlug/ConvertToSlug";

const DestinationMenu = ({
  data_desti,
  code,
  per_person,
  checkAll,
  explore_destinations,
}) => {
  const [activeTabName, setActiveTabName] = useState(null);
  const [isClient, setIsClient] = useState(false);
  let initialSlug;
  initialSlug = code?.slug?.[0];
  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient || !data_desti || data_desti.length === 0) {
      return;
    }

    let initialTabName = data_desti?.[0]?.title;

    if (initialSlug) {
      const matchingItem = data_desti.find(
        (item) => item?.slug === initialSlug
      );

      if (matchingItem) {
        initialTabName = matchingItem.title;
      }
    }

    if (activeTabName !== initialTabName) {
      setActiveTabName(initialTabName);
    }
  }, [isClient, data_desti, initialSlug]);

  useEffect(() => {
    if (
      activeTabName &&
      data_desti &&
      !data_desti?.some((item) => item?.title === activeTabName)
    ) {
      setActiveTabName(data_desti?.[0]?.title);
    }
  }, [data_desti, activeTabName]);

  const handleTabChange = (newTitle) => {
    if (newTitle && newTitle !== activeTabName) {
      setActiveTabName(newTitle);

      const newSlug = data_desti.find((item) => item.title === newTitle)?.slug;
      if (newSlug) {
        const newPath = `/${code?.code}/destinations/${newSlug}`;
        window.history.pushState({ path: newPath }, "", newPath);
      }
    }
  };

  const activeCategory = data_desti?.find(
    (item) => item?.title === activeTabName
  );

  const activeTabImg = activeCategory?.icon;
  const activeTabImg2 = activeCategory?.image;

  if (!isClient || !activeTabName) {
    return null;
  }

  return (
    <div className="min-h-screen">
      <Provider>
        <Tabs.Root
          value={activeTabName}
          onValueChange={(details) => {
            const value =
              typeof details === "object" &&
              details !== null &&
              "value" in details
                ? details.value
                : details;
            if (typeof value === "string") {
              handleTabChange(value);
            }
          }}
        >
          <h3 className="text-[--colorOrange] text-center text-7xl 2xl:text-5xl lg:text-3xl mb-10 xl:mb-5 font-bold">
            {explore_destinations}
          </h3>
          <Tabs.List className=" flex items-center justify-center gap-4 lg:gap-2  flex-wrap">
            {data_desti?.map((item, i) => {
              return (
                <Tabs.Trigger
                  key={item?.id || i}
                  value={item?.title}
                  className="buttonTrigger text-[--colorOrange] px-8 py-2 border border-[--borderDF] h-full flex items-center justify-center rounded-lg 
                  hover:bg-[--colorOrange] hover:text-[--colorWhite]
                  "
                >
                  {item?.title}
                </Tabs.Trigger>
              );
            })}
          </Tabs.List>
          {activeTabImg && (
            <div className="flex justify-center items-center mt-16 mb-16 lg:mt-4 lg:mb-0 h-[370px] lg:px-5">
              <img
                key={activeTabImg}
                src={`${process.env.NEXT_PUBLIC_PICTURE}/${activeTabImg}`}
                alt={`${activeTabName || "Destination"} Map`}
                width={800}
                height={450}
                className={`object-contain max-w-[500px] lg:h-[250px]`}
                priority={false}
              />
            </div>
          )}
          <div className=" bg-[--background]">
            {data_desti?.map((item, i) => {
              const itemToSlug = toSlug(item?.title);

              return (
                <Tabs.Content
                  key={i}
                  value={item?.title}
                  className="outline-none border-none "
                >
                  <ServerPackage
                    products={item?.products}
                    itemToSlug={itemToSlug}
                    customGrid={`col-span-12`}
                    code={code?.code}
                    checkAll={checkAll}
                    per_person={per_person}
                    customFlex="items-center"
                    customMainGrid={`col-span-3 xl:col-span-4 lg:col-span-6 md:col-span-12  sm:col-span-12`}
                    customImgSize={`h-[380px] 2xl:h-[230px] `}
                    hrefTo={`d`}
                  />
                </Tabs.Content>
              );
            })}
          </div>

          {activeTabImg2 && (
            <div className="bg-[--colorWhite] pt-12">
              <img
                key={activeTabImg2}
                src={`${process.env.NEXT_PUBLIC_PICTURE}/${activeTabImg2}`}
                alt={`${activeTabName || "Destination"} Map`}
                width={1000}
                height={400}
                className="w-full h-[500px] object-cover"
              />
            </div>
          )}
        </Tabs.Root>
      </Provider>
    </div>
  );
};

export default DestinationMenu;
