import Link from "next/link";
import React, { useState } from "react";
import { FaCaretDown } from "react-icons/fa6";
import { LuMoveRight } from "react-icons/lu";

const MobileMenu = ({ menu }) => {
  const [openCategory, setOpenCategory] = useState(null);
  const handleOpen = (name) => () => {
    setOpenCategory((prev) => (prev === name ? null : name));
  };
  return (
    <>
      {menu?.map((item, i) => (
        <li
          key={i}
          onClick={handleOpen(item?.title)}
          className={`flex  gap-2 cursor-pointer text-[--colorDark] xl:text-[--colorWhite] relative destinationLi header-transition xl:flex-col`}
        >
          {item?.href === null ? (
            <div className="flex gap-2 items-center">
              <h3>{item?.title}</h3>
              {item?.subMenu !== null && (
                <span className="text-sm mt-1">
                  <FaCaretDown />
                </span>
              )}
            </div>
          ) : (
            <Link href={`${item?.href}`} className="flex gap-2 items-center">
              <h3>{item?.title}</h3>
              {item?.subMenu !== null && (
                <span className="text-sm mt-1">
                  <FaCaretDown />
                </span>
              )}
            </Link>
          )}

          {item?.subMenu !== null && (
            <ul
              className={` header-transition capitalize text-xl flex-col ${
                openCategory === item?.title
                  ? "flex visible h-full flex-col  ml-4   "
                  : " invisible h-0 "
              }`}
            >
              {item &&
                openCategory === item?.title &&
                item?.subMenu?.map((elem, i) => {
                  return (
                    <li key={i} className=" header-transition">
                      <Link
                        href={`${elem?.href}`}
                        className="flex justify-between items-center gap-4 pb-1 text-[--colorWhite] "
                      >
                        <h3 className="header-transition text-lg">
                          {elem?.title}
                        </h3>
                        <span className="text-[--colorWhite]">
                          <LuMoveRight />
                        </span>
                      </Link>
                    </li>
                  );
                })}
            </ul>
          )}
        </li>
      ))}
    </>
  );
};

export default MobileMenu;
