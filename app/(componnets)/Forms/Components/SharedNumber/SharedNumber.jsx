import React, { useState } from "react";
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
  const [searchTerm, setSearchTerm] = useState("");

  // 1. Önce Arama Filtresi Uygula
  const searchResults = olkeler?.filter((cur) => {
    const text = searchTerm.toLowerCase();
    // null kontrolü yaparak hata almayı engelliyoruz
    const code = cur.alpha3Code ? cur.alpha3Code.toLowerCase() : "";
    const calling = cur.callingCode ? cur.callingCode : "";

    return code.includes(text) || calling.includes(text);
  });

  // 2. Sonuçları Tekilleştir (Aynı alpha3Code varsa sadece ilkini al)
  const uniqueFilteredOlkeler = searchResults?.filter(
    (value, index, self) =>
      index === self.findIndex((t) => t.alpha3Code === value.alpha3Code)
  );

  return (
    <>
      <label htmlFor="number">
        <h3 className={`text-[--colorBlue] ${sahredCllass} `}>
          {text1}
          <span className="text-red-600">*</span>
        </h3>
        <div className=" flex items-center bg-[--colorF9] border border-[--plan] rounded-[5px] relative">
          <span className="pl-2">
            <FiPhone className="text-[--plan] text-2xl" />
          </span>
          <div className=" py-1 px-3 outline-none text-black cursor-pointer w-full">
            <div className="flex justify-between items-center text-[--colorBlue]">
              {/* Seçili Olan Ülke */}
              <div onClick={onClikOpen} className="flex items-center min-w-max">
                <span className="pr-2">
                  <img
                    src={`https://flagsapi.com/${
                      olkeler?.find((cur) => cur.id === form2)?.alpha2Code ||
                      olkeler?.[14]?.alpha2Code
                    }/flat/64.png`}
                    alt="flag"
                    className="w-8 h-8 object-contain"
                  />
                </span>
                <h3>
                  {olkeler?.find((cur) => cur.id === form2)?.alpha3Code ||
                    olkeler?.[14]?.alpha3Code}
                </h3>

                <span className="ml-3">
                  <img
                    src="/fakedata/down.png"
                    className={`header-transition w-4 ${
                      dropdownOpen ? "rotate-180" : ""
                    }`}
                    alt="down"
                  />
                </span>
              </div>

              {/* Telefon Input */}
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

          {/* Dropdown Alanı */}
          {dropdownOpen && (
            <div className="absolute top-full left-0 w-full bg-[--background] shadow-md z-10 rounded-b-md border border-[--plan] mt-1">
              {/* Arama Inputu */}
              <div
                className="p-2 bg-white border-b border-gray-200 sticky top-0 z-20"
                onClick={(e) => e.stopPropagation()}
              >
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full border bg-[#f6f6f6] border-gray-300 rounded px-2 py-2 text-sm text-[--colorDark] outline-none focus:border-[--plan]"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  autoFocus
                />
              </div>

              {/* Listeleme - Artık uniqueFilteredOlkeler kullanıyoruz */}
              <ul className="cavid h-[250px] overflow-y-scroll bg-[--background]">
                {uniqueFilteredOlkeler && uniqueFilteredOlkeler.length > 0 ? (
                  uniqueFilteredOlkeler.map((cur, i) => (
                    <li
                      key={cur.id || i}
                      className="py-2 px-4 hover:bg-gray-200 cursor-pointer text-[--colorBlue] flex items-center gap-3 border-b border-gray-100 last:border-0"
                      onClick={() => {
                        handleSelect(cur?.callingCode, cur?.id);
                        setSearchTerm("");
                      }}
                    >
                      <img
                        src={`https://flagsapi.com/${cur?.alpha2Code}/flat/32.png`}
                        alt={`${cur?.alpha3Code}`}
                        className="w-6 h-6 object-contain"
                      />
                      <span className="font-semibold w-10">
                        {cur?.alpha3Code}
                      </span>
                      <span className="text-gray-500">{cur?.callingCode}</span>
                    </li>
                  ))
                ) : (
                  <li className="py-2 px-4 text-gray-500 text-center text-sm">
                    Not Found...
                  </li>
                )}
              </ul>
            </div>
          )}
        </div>
      </label>
    </>
  );
};

export default SharedNumber;
