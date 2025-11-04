"use client"; // Client Component olduğunu belirtmek için bu satırı ekleyin

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import ClientTax from "@/app/(componnets)/(pages)/Home/HomeComponents/PackageComps/ClientTax";
import ClientValyuta from "@/app/(componnets)/(pages)/Home/HomeComponents/PackageComps/ClientValyuta";

const CustomTotal = ({
  tourPriceText,
  enterence,
  tourPriceSum,
  enterancePrice,
  totalPerson,
  accept,
  bookNow,
  acceptId,
  accName,
  setData,
  customkey,
}) => {
  const searchParams = useSearchParams();
  const [calculatedTotal, setCalculatedTotal] = useState(0);

  // useEffect kullanarak fiyatlar veya para birimi değiştiğinde toplamı hesapla
  useEffect(() => {
    // URL'den aktif para birimini al, yoksa varsayılan olarak 'usd' kullan
    const activeCurrency = searchParams.get("c") || "usd";

    // Gerekli veriler yoksa hesaplama yapma
    if (!tourPriceSum) {
      // Sadece tourPriceSum'ın varlığını kontrol ediyoruz
      setCalculatedTotal(0);
      return;
    }

    // Aktif para birimine göre doğru anahtarları oluştur
    const priceKey = `${activeCurrency}_price`;
    const taxKey = `${activeCurrency}_tax`;

    // Değerleri alırken sayıya çevir (parseFloat) ve eğer değer yoksa 0 olarak kabul et
    const priceValue = parseFloat(tourPriceSum[priceKey]) || 0;
    const taxValue = parseFloat(enterancePrice?.[taxKey]) || 0; // enterancePrice'ın varlığını kontrol ediyoruz

    // Toplamı hesapla ve state'i güncelle
    let total = priceValue;
    if (taxValue) {
      total += taxValue;
    }

    setCalculatedTotal(total);

    // Bu effect'in ne zaman tekrar çalışacağını belirten bağımlılıklar
  }, [tourPriceSum, enterancePrice, searchParams]);

  const handleAcceptChange = (e) => {
    if (e.target.checked) {
      setData((prev) => ({
        ...prev,
        [customkey]: accept,
      }));
    } else {
      setData((prev) => ({
        ...prev,
        [customkey]: "", // Checkbox işaretli değilse accept1'i temizle
      }));
    }
  };

  // Aktif para birimini büyük harflerle göstermek için (USD, AZN, AED)
  const activeCurrencyLabel = (searchParams.get("c") || "usd").toUpperCase();

  return (
    <>
      <div className="mt-6 mb-2">
        <ul className="flex gap-2 flex-col">
          {tourPriceText && (
            <li
              className={`flex justify-between border-t border-[--borderColor] ${
                enterence === "" ? "border-b  border-[--borderColor] pb-3" : ""
              }  pt-2`}
            >
              <h3 className="text-[--colorBlue] text-xl capitalize">
                {tourPriceText}
              </h3>
              <ClientValyuta
                currency={tourPriceSum}
                color="text-[--colorBlue] 2"
              />
            </li>
          )}
          {enterence && (
            <li className="flex justify-between border-b border-[--borderColor] pb-2">
              <h3 className="text-[--colorBlue] text-xl capitalize">
                {enterence}
              </h3>
              <ClientTax
                currency={enterancePrice}
                color="text-[--colorBlue] uppercase 2"
              />
            </li>
          )}
        </ul>
      </div>
      {totalPerson && (
        <div className="flex justify-between mt-2">
          <h3 className="text-[--colorOrange] text-xl font-semibold capitalize">
            {totalPerson}
          </h3>
          {/* HESAPLANAN TOPLAMI BURADA GÖSTER */}
          <h3 className="text-[--colorOrange] text-xl font-semibold uppercase">
            {`${calculatedTotal.toFixed(0)} ${activeCurrencyLabel}`}
          </h3>
        </div>
      )}
      {accept && (
        <div className="custom-checkbox-wrapper mt-4 cursor-pointer">
          <input
            type="checkbox"
            name={accName}
            id={acceptId}
            className="check2 cursor-pointer"
            onChange={handleAcceptChange}
          />
          <label
            htmlFor={acceptId}
            className="check2-label cursor-pointer"
          ></label>

          <label
            htmlFor={acceptId}
            className="text-[--colorOrange] pl-2 text-xl cursor-pointer"
          >
            {accept}
          </label>
        </div>
      )}
      {bookNow && (
        <button className="bg-[--plan] text-[--colorWhite] w-full mt-4 px-2 py-4 rounded capitalize">
          {bookNow}
        </button>
      )}
    </>
  );
};

export default CustomTotal;
