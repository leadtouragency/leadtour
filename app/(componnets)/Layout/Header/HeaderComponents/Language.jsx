"use client";
import { FaAngleDown } from "react-icons/fa6";
import { useEffect, useState } from "react";

import { useRouter, usePathname } from "next/navigation";

const Language = ({ toggle, switchLang, langs }) => {
  const [language, setLanguage] = useState("en");
  const [selectedLangs, setSelectedLangs] = useState([]);
  const router = useRouter();
  const pathname = usePathname();

  // URL'den veya LocalStorage'dan dili belirle
  useEffect(() => {
    const pathLang = pathname.split("/")[1];
    const savedLang = localStorage.getItem("leadtour") || "en";
    const validLang = langs.includes(pathLang) ? pathLang : savedLang;

    if (validLang !== language) {
      setLanguage(validLang);

      localStorage.setItem("leadtour", validLang);
    }
  }, [pathname, language, langs]);

  // Seçilen dili filtrele
  useEffect(() => {
    setSelectedLangs(langs.filter((lang) => lang !== language));
  }, [language, langs]);

  // Dil değiştir ve URL'yi güncelle
  const langSwitcher = async (lang) => {
    setLanguage(lang);
    localStorage.setItem("leadtour", lang);

    // URL'deki mevcut path'i koruyarak sadece dili değiştir
    const currentPath = pathname.split("/").slice(2).join("/") || "";
    router.replace(`/${lang}/${currentPath}`);
    toggle(false);
    document.documentElement.setAttribute("lang", lang);
  };

  return (
    <div className="relative text-[--colorDark] xl:text-[--colorWhite]  px-4 1xl:px-2 xl:px-0   uppercase">
      <div
        onClick={toggle}
        className="flex items-center cursor-pointer justify-center"
      >
        <button className="text-[--colorDark] xl:text-[--colorWhite]  text-xl 1xl:text-lg uppercase">
          {language}
        </button>
        <p className="flex pl-3">
          <FaAngleDown />
        </p>
      </div>
      {switchLang && (
        <div className="absolute mt-6 right-[-10px]  top-10 xl:top-6 xl:right-[0px] xl:left-0 h-[50px] flex flex-col text-left items-center justify-center uppercase">
          {selectedLangs?.map((lang, index) => (
            <button
              className="text-[--colorWhite] z-[200] font-semibold uppercase bg-[--plan] xl:bg-black langbtn
               h-16 w-24 px-2 py-2 flex justify-center items-center hover:bg-[--colorOrange] transitioncss"
              key={index}
              onClick={() => langSwitcher(lang)}
            >
              {lang}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Language;
