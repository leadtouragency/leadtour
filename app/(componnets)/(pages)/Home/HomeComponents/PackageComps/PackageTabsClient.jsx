"use client";

import React from "react";
import ServerPackage from "./ServerPackage";
import { Tabs } from "@chakra-ui/react";
import { Provider } from "@/components/ui/provider";
import { toSlug } from "@/app/(componnets)/Shared/ConvertToSlug/ConvertToSlug";

const PackageTabsClient = ({ data_package, code, per_person, checkAll }) => {
  if (!data_package || data_package?.length === 0) {
    return <p className="text-center">No packages available.</p>;
  }

  const defaultTabValue = data_package?.[0]?.title;

  return (
    <Provider>
      <Tabs.Root className="bg-transparent" defaultValue={defaultTabValue}>
        <div className="flex items-center justify-center">
          <Tabs.List
            className="bg-transparent  flex-wrap " // Added flex-wrap and adjusted gap/margin
            aria-label="Package duration tabs"
          >
            {data_package &&
              data_package?.map((item) => (
                <Tabs.Trigger
                  key={item?.id}
                  value={item?.title}
                  asChild
                  className="buttonTrigger mx-4 lg:mb-4 md:mb-2"
                >
                  <h3 className="text-[--colorOrange] px-4 md:py-2 border  h-full flex items-center justify-center rounded-lg md:w-full">
                    {item?.title}
                  </h3>
                </Tabs.Trigger>
              ))}
          </Tabs.List>
        </div>

        {data_package &&
          data_package?.map((elem) => {
            const slug = toSlug(elem?.title);
            return (
              <Tabs.Content
                key={elem?.id}
                value={elem?.title}
                className="outline-none border-none pt-0 mt-0"
              >
                <ServerPackage
                  products={elem?.products}
                  customGrid={`col-span-12`}
                  customImgSize={`h-[380px] 2xl:h-[230px] `}
                  customFlex="items-center"
                  hrefTo={`t`}
                  code={code}
                  per_person={per_person}
                  checkAll={checkAll}
                  customMainGrid={`col-span-3 xl:col-span-4 lg:col-span-6 md:col-span-12  sm:col-span-12`}
                />
              </Tabs.Content>
            );
          })}
      </Tabs.Root>
    </Provider>
  );
};

export default PackageTabsClient;
