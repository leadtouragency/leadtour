
"use client";
import { useState } from "react";
import { FaCaretDown } from "react-icons/fa6";

const Vlayuta = ({ vals, currentCurrency, onCurrencyChange = () => {} }) => {
  const [isOpen, setIsOpen] = useState(false);
  const otherVals = vals.filter((v) => v !== currentCurrency);
  const handleSwitch = (newVal) => {
    onCurrencyChange(newVal);
    setIsOpen(false);
  };

  return (
    <div className="relative text-[--colorDark] xl:text-[--colorWhite] px-4 uppercase">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center cursor-pointer justify-center"
      >
        <button className="text-[--colorDark] xl:text-[--colorWhite] text-xl 1xl:text-lg uppercase">
          {currentCurrency}
        </button>
        <p className="flex pl-3">
          <FaCaretDown />
        </p>
      </div>

      {isOpen && (
        <div className="absolute z-[205] mt-6 right-[0px] top-4 flex flex-col text-left items-center justify-center">
          {otherVals.map((val) => (
            <button
              key={val}
              onClick={() => handleSwitch(val)}
              className="text-[--colorWhite] z-[200] font-semibold uppercase bg-[--plan] xl:bg-black 
                         h-16 w-24 px-2 py-2 flex justify-center items-center hover:bg-[--colorOrange] transition-all"
            >
              {val}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Vlayuta;
