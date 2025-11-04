import React from "react";
import { FiPhone } from "react-icons/fi";
import InputFrom from "../Inputs/InputFrom";

const SharedNumber = ({
  text1,
  onClikOpen,
  olkeler,
  form1,
  handleItemChange,
  handleSelect,
  form2,
  dropdownOpen,
  idInp,
  myName,
  sahredCllass = "",
  py = "",
}) => {
  return (
    <>
      <label htmlFor="number">
        <h3 className={`text-[--colorBlue] ${sahredCllass} `}>
          {text1}
          <span className="text-red-600">*</span>
        </h3>
        <div className=" flex items-center bg-[--colorF9] border border-[--plan] rounded-[5px]  relative">
          <span className="pl-2">
            <FiPhone className="text-[--plan] text-2xl" />
          </span>
          <div className=" py-1 px-3 outline-none text-black  cursor-pointer ">
            <div className="flex justify-between items-center text-[--colorBlue]">
              <div onClick={onClikOpen} className="flex  items-center">
                <span className="pr-2">
                  <img
                    src={`https://flagsapi.com/${
                      olkeler?.find((cur) => cur.id === form2)?.alpha2Code ||
                      olkeler?.[14]?.alpha2Code
                    }/flat/64.png`}
                    alt={`${
                      olkeler?.find((cur) => cur.id === form2)?.alpha2Code ||
                      olkeler?.[14]?.alpha2Code
                    }`}
                  />
                </span>
                <h3>
                  {olkeler?.find((cur) => cur.id === form2)?.alpha3Code ||
                    olkeler?.[14]?.alpha3Code}
                </h3>

                <span className="ml-3">
                  <img
                    src="/fakedata/down.png"
                    className={` header-transition w-6 ${
                      dropdownOpen ? "rotate-180" : ""
                    }`}
                    alt="down"
                  />
                </span>
              </div>
              <InputFrom
                myValue={form1}
                idInp={idInp}
                type={`text`}
                handleItemChange={handleItemChange}
                myName={myName}
                placeholder="(XXX) XXX-XXXX"
                styleClass={`bg-[--colorF9] w-full border-none outline-none pl-2 pr-2 ${py} text-[--colorDark] `}
              />
            </div>
          </div>
          {dropdownOpen && (
            <ul className="absolute top-full left-0 w-full bg-[--background] shadow-md z-10 cavid h-[300px] overflow-y-scroll">
              {olkeler &&
                olkeler?.map((cur, i) => (
                  <li
                    key={i}
                    id="country_code"
                    className="py-2 px-4 hover:bg-gray-200 cursor-pointer text-[--colorBlue] flex items-center gap-3"
                    onClick={() => handleSelect(cur?.callingCode, cur?.id)} // cur.id'yi de gönderiyoruz
                  >
                    <img
                      src={`https://flagsapi.com/${cur?.alpha2Code}/flat/32.png`}
                      alt={`${cur?.alpha3Code}`}
                    />
                    <h3> {cur?.alpha3Code}</h3>
                    <h3> {cur?.callingCode}</h3>
                  </li>
                ))}
            </ul>
          )}
        </div>
      </label>
    </>
  );
};

export default SharedNumber;
