"use client";
import { usePathname } from "next/navigation";

const PackageBlogDate = ({ code, blogFullDate }) => {
  const location = usePathname();
  return (
    <>
      {location === `/${code}` || location?.includes("destinations") ? (
        <></>
      ) : (
        blogFullDate && (
          <h4 className="text-[--plan] text-[25px] font-semibold capitalize ">
            {blogFullDate}
          </h4>
        )
      )}
    </>
  );
};

export default PackageBlogDate;
