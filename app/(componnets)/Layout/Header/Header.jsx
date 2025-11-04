"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import Language from "./HeaderComponents/Language";
import Vlayuta from "./HeaderComponents/Vlayuta";
import Menu from "./HeaderComponents/Menu";
import Whatsapp from "./HeaderComponents/Whatsapp";
import Link from "next/link";
import { IoClose } from "react-icons/io5";
import { TbMenuDeep } from "react-icons/tb";
import MobileMenu from "./HeaderComponents/MobileMenu/MobileMenu";
import { useSearchParams, useRouter, usePathname } from "next/navigation";

const Header = ({
  code,
  header_menu_data,
  header_activity,
  header_1,
  header_2,
  header_3,
  header_4,
  header_5,
}) => {
  const [scrolledFromTop, setScrollTop] = useState(false);
  const [open, setOpen] = useState(false);

  const menuRef = useRef();
  const overlayDiv = useRef();
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", scrollHandler);
    }

    return function () {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", scrollHandler);
      }
    };
  }, []);

  function scrollHandler() {
    if (typeof window !== "undefined") {
      window.pageYOffset >= 50 ? setScrollTop(true) : setScrollTop(false);
    }
  }

  let language;
  if (typeof window !== "undefined") {
    language = localStorage.getItem("leadtour");
  }

  const langSwitcher = async () => {
    setOpen(false);
  };

  const langs = ["en", "az", "ru"];
  const vals = ["usd", "aed", "azn"];

  const langChecker = useCallback((lang = "en") => {
    if (typeof localStorage !== "undefined") {
      return lang !== localStorage.getItem("leadtour");
    }
  }, []);

  const myLang = langs?.filter(langChecker);

  function openMenu() {
    const menuClassList = menuRef?.current?.classList;
    if (menuClassList?.contains("xl:left-[-100%]")) {
      menuClassList?.replace("xl:left-[-100%]", "xl:left-0");
      overlayDiv?.current?.classList?.add("active");
    }
  }

  function closeMenu() {
    const menuClassList = menuRef?.current?.classList;
    if (menuClassList?.contains("xl:left-0")) {
      menuClassList?.replace("xl:left-0", "xl:left-[-100%]");
      overlayDiv?.current?.classList?.remove("active");
    }
  }

  const header_menu = [
    {
      id: 3,
      title: header_3,
      href: `/${code}/travels`,
      subMenu: null,
    },
    {
      id: 4,
      title: header_4,
      href: `/${code}/contact`,
      subMenu: null,
    },
    {
      id: 5,
      title: header_5,
      href: `/${code}/about`,
      subMenu: null,
    },
  ];
  const [currentCurrency, setCurrentCurrency] = useState("usd");
  const searchParams = useSearchParams(); // Query parametrelerini okumak için

  // Sayfa ilk yüklendiğinde localStorage'dan değeri oku

  useEffect(() => {
    // 1. Öncelik: URL'deki '?c=' parametresi
    const currencyFromUrl = searchParams.get("c");
    // 2. Öncelik: localStorage'daki değer
    const currencyFromStorage = localStorage.getItem("leadtour-vals");

    // Geçerli para birimleri listesi
    const validCurrencies = ["usd", "aed", "azn"];

    let initialCurrency = "usd"; // 3. Öncelik: Varsayılan değer

    if (currencyFromUrl && validCurrencies.includes(currencyFromUrl)) {
      initialCurrency = currencyFromUrl;
    } else if (
      currencyFromStorage &&
      validCurrencies.includes(currencyFromStorage)
    ) {
      initialCurrency = currencyFromStorage;
    }

    setCurrentCurrency(initialCurrency);

    if (localStorage.getItem("leadtour-vals") !== initialCurrency) {
      localStorage.setItem("leadtour-vals", initialCurrency);
    }
  }, [searchParams]);
  const router = useRouter();
  const pathname = usePathname(); //
  const handleCurrencyChange = (newCurrency) => {
    setCurrentCurrency(newCurrency);
    localStorage.setItem("leadtour-vals", newCurrency);

    // Mevcut hash'i al, örneğin "#baku" veya "#qebele"
    const currentHash = window.location.hash;

    // Hash'in içinde zaten bir '?' olup olmadığını kontrol et
    // ve ana hash parçasını ayır (örneğin #baku?foo=bar -> #baku)
    const hashBase = currentHash.split("?")[0];

    // Yeni hash'i oluştur
    const newHash = `${hashBase}?c=${newCurrency}`;

    // URL'in ana query parametrelerini alalım.
    // 'c' parametresini buradan çıkarmalıyız ki hash'e eklenebilsin.
    const currentParams = new URLSearchParams(
      Array.from(searchParams.entries())
    );
    currentParams.delete("c"); // Ana query'den 'c'yi sil

    const paramsString = currentParams.toString();
    // Eğer başka query parametresi varsa başına '?' koy, yoksa boş bırak
    const queryPrefix = paramsString ? "?" : "";

    // Son URL'i oluştur: pathname + (varsa)diğer query'ler + yeni hash
    // Sonuç: /en/desti/d#baku?c=usd
    router.replace(`${pathname}${queryPrefix}${paramsString}${newHash}`);
  };

  return (
    <header
      className={`fixed  shadow-md left-0 right-0 z-[999] header-transition mx-28  lg:mx-0 bg-[--colorWhite]  ${
        scrolledFromTop
          ? " top-0 shadow-md mx-[0px] "
          : " top-16  rounded-xl 2xl:mx-16 xl:top-4 lg:top-0 "
      }`}
    >
      <nav className="grid grid-cols-12 gap-6 2xl:gap-0 1xl:gap-0  py-4 px-8 lg:px-4">
        <div className="col-span-1 xl:col-span-12  xl:flex xl:justify-between ">
          <div className="flex items-center h-full">
            <div
              className={` relative langbefore imgbefore
                pr-6 1xl:pr-2`}
            >
              <Link href={`/${code}`}>
                <img
                  className="max-w-[100px] 1xl:max-w-[70px]"
                  src="/logo.svg"
                  alt="lead tour logo"
                />
              </Link>
            </div>
          </div>
          <div className="hidden xl:flex">
            <button onClick={openMenu} className="bg-transparent">
              <TbMenuDeep className="text-[--colorDark] text-3xl" />
            </button>
          </div>
        </div>
        <div
          ref={menuRef}
          className="col-span-11 xl:fixed xl:top-0 xl:bg-[--plan] xl:left-[-100%] z-[250] transitioncss xl:h-full xl:w-[400px] md:w-full xl:p-10"
        >
          <div className="grid grid-cols-12 ga-2">
            <div className="col-span-2 xl:col-span-12">
              <ul className="flex items-center xl:items-start h-full xl:gap-4 xl:py-6">
                <li className="flex items-center h-full  justify-center xl:justify-start gap-6 1xl:gap-2 relative langbefore">
                  <Language
                    toggle={() => setOpen(!open)}
                    langs={langs}
                    switchLang={
                      open && (
                        <div className="absolute  mt-6 right-[10px] top-6 h-[50px] uppercase flex flex-col text-left items-center justify-center">
                          {myLang?.map((lang, index) => (
                            <button
                              className="text-[--colorDark] xl:text-[--colorWhite]  z-[200] uppercase 
                           overflow-hidden px-6 py-1"
                              key={index}
                              onClick={() => langSwitcher(lang)}
                            >
                              {lang}
                            </button>
                          ))}
                        </div>
                      )
                    }
                  />
                </li>
                <Vlayuta
                  vals={vals}
                  currentCurrency={currentCurrency}
                  onCurrencyChange={handleCurrencyChange}
                />
              </ul>
            </div>
            <div className="col-span-9 1xl:col-span-8 xl:col-span-12  flex  items-center xl:items-start justify-center  1xl:pl-0 xl:pl-0 gap-10 1xl:gap-2  w-full xl:order-[-1] xl:flex-col">
              <div className="hidden xl:flex xl:mb-10">
                <Link href={`/${code}`}>
                  <img
                    className="max-w-[100px] "
                    src="/fakedata/logo/logo.svg"
                    alt="lead tour logo"
                  />
                </Link>
              </div>
              <ul className="flex items-center xl:items-start h-full justify-center  gap-10 2xl:gap-4 xl:gap-2 xl:flex-col xl:hidden">
                <Menu
                  scrolledFromTop={scrolledFromTop}
                  menu={header_menu}
                  header_1={header_1}
                  header_2={header_2}
                  code={code}
                  header_menu_data={header_menu_data}
                  header_activity={header_activity}
                />
              </ul>
              <ul className="hidden xl:flex items-center xl:items-start h-full justify-center  gap-10 2xl:gap-4 xl:gap-2 xl:flex-col">
                <MobileMenu menu={header_menu} />
              </ul>
            </div>
            <div className="col-span-1 1xl:col-span-2 xl:col-span-12">
              <div className=" flex items-center justify-center xl:items-start xl:justify-start pr-10 1xl:pr-0 1xl:pl-5 xl:pl-0">
                <Whatsapp />
              </div>
            </div>
          </div>
          <span
            onClick={closeMenu}
            className="hidden xl:flex absolute top-6 right-6 text-4xl cursor-pointer"
          >
            <IoClose />
          </span>
        </div>
        <div
          ref={overlayDiv}
          className="mobile-menu-overlay  overflow-x-hidden block fixed left-0 top-0 bottom-0 right-0 z-[100] overlay "
        ></div>
      </nav>
    </header>
  );
};

export default Header;
