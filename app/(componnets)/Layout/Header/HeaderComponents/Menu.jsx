import Link from "next/link";
import { FaCaretDown } from "react-icons/fa6";
import { LuMoveRight } from "react-icons/lu";

const Menu = ({
  menu,
  header_menu_data,
  header_1,
  header_2,
  code,
  header_activity,
}) => {
  return (
    <>
      <li
        className={`flex items-center gap-2 w-max text-[--colorDark] xl:text-[--colorWhite] relative cursor-pointer destinationLi header-transition xl:flex-col`}
      >
        <div className="flex gap-2 items-center">
          <h3>{header_1}</h3>
          <span className="text-sm mt-1">
            <FaCaretDown />
          </span>
        </div>
        <ul
          className={`absolute top-8 -left-6  xl:static bg-[#fff]  xl:bg-transparent  header-transition
           z-40 w-[200px] rounded-lg px-4 py-2 capitalize text-xl flex flex-col gap-3 xl:gap-0 xl:m-0
           opacity-0 invisible bottomMenu xl:w-full `}
        >
          {header_menu_data?.map((elem, i) => {
            return (
              <li key={i} className=" hoverMenu pb-2 header-transition">
                <Link
                  href={`/${code}/destinations/${elem?.slug}`}
                  className="flex justify-between items-center text-[--plan] "
                >
                  <h3 className="header-transition ">{elem?.title}</h3>
                  <span className="text-[--plan]">
                    <LuMoveRight />
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </li>
      <li
        className={`flex items-center gap-2 w-max text-[--colorDark] xl:text-[--colorWhite] relative cursor-pointer destinationLi header-transition xl:flex-col`}
      >
        <div className="flex gap-2 items-center">
          <Link href={`/${code}/activites`}>{header_2}</Link>
          {/* <span className="text-sm mt-1">
            <FaCaretDown />
          </span> */}
        </div>
        {/* <ul
          className={`absolute top-8 -left-6  xl:static bg-[#fff]  xl:bg-transparent  header-transition
           z-40 w-[330px] rounded-lg px-4 py-2 capitalize text-xl flex flex-col gap-3 xl:gap-0 xl:m-0
           opacity-0 invisible bottomMenu xl:w-full `}
        >
          {header_activity?.map((elem, i) => {
            return (
              <li key={i} className=" hoverMenu pb-2 header-transition">
                <Link
                  href={`/${code}/activites`}
                  className="flex justify-between items-center text-[--plan] "
                >
                  <h3 className="header-transition w-max">{elem?.title}</h3>
                  <span className="text-[--plan]">
                    <LuMoveRight />
                  </span>
                </Link>
              </li>
            );
          })}
        </ul> */}
      </li>
      {menu?.map((item, i) => (
        <li
          key={i}
          className={`flex items-center gap-2 w-max text-[--colorDark] xl:text-[--colorWhite] relative cursor-pointer destinationLi header-transition xl:flex-col`}
        >
          <Link href={`${item?.href}/`} className="flex gap-2 items-center asd">
            <h3>{item?.title}</h3>
          </Link>
        </li>
      ))}
    </>
  );
};

export default Menu;
