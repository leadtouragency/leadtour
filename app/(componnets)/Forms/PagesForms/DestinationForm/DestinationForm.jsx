"use client";

import axios from "axios";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import CustomLabel from "../../Components/Label/CustomLabel";
import SharedNumber from "../../Components/SharedNumber/SharedNumber";
import CustomTotal from "../../Components/Label/CustomTotal";
import { olkeler } from "../ContactForm/ContactForm";
import CustomCheckBox from "../../Components/Label/CustomCheckBox";
import SharedDataPicker from "@/app/(componnets)/Shared/SharedDataPicker/SharedDataPicker";
import { useSearchParams } from "next/navigation";
import { format } from "date-fns"; // date-fns kütüphanesinden format fonksiyonunu ekledik

const DestinationForm = ({
  from_arrival,
  private_when_came,
  choose_from_date,
  departure_form,
  number_people_form,
  fullname_form,
  enter_your_name,
  enter_number_of_people,
  email_form,
  email_address,
  number_form,
  preffered_form,
  need_form1,
  need_form2,
  tour_price_form,
  newprice,
  newprice_tax,
  include_fees,
  total_tour,
  privacy_policy,
  book_now,
  cityName,
  tr,
  code,
  plan_success,
  plan_ok,
  plan_error,
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [form2, setForm2] = useState(olkeler?.[45]?.id || "+994");
  const [formDestination, setFormDestination] = useState({
    tur_adi: cityName ? cityName : "",
    gelme_tarix: "",
    cixis_tarix: "",
    adam_sayi: "",
    ad_soyad: "",
    email: "",
    olke_kodu: "",
    nomre: "",
    text_1: "",
    text_2: "",
    text_3: "",
    toplam_qiymet: "",
  });

  const searchParams = useSearchParams();
  useEffect(() => {
    const currencyParam = searchParams.get("c");
    let selectedPrice = "";

    if (currencyParam === "aed" && newprice?.aed_price) {
      selectedPrice = newprice.aed_price;
    } else if (currencyParam === "azn" && newprice?.azn_price) {
      selectedPrice = newprice.azn_price;
    } else if (newprice?.usd_price) {
      selectedPrice = newprice.usd_price;
    }

    setFormDestination((prev) => ({
      ...prev,
      toplam_qiymet: selectedPrice,
    }));
  }, [newprice, searchParams]);

  const handleSelect = (id, countryId) => {
    setFormDestination((prev) => ({
      ...prev,
      olke_kodu: `${id}`,
    }));
    setForm2(countryId);
    setDropdownOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "nomre") {
      const newValue = value.replace(/[^0-9]/g, "");
      setFormDestination((prev) => ({
        ...prev,
        [name]: newValue,
      }));
    } else {
      setFormDestination((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    axios({
      method: "post",
      url: `${process.env.NEXT_PUBLIC_MAIN_URL}/${code}/tour_post`,
      data: formDestination,
    })
      .then((response) => {
        if (response.data.success) {
          Swal.fire({
            icon: "success",
            title: plan_success,
            text: "",
            confirmButtonText: plan_ok,
            customClass: { confirmButton: "text-black-700" },
          });
          setFormDestination({
            tur_adi: "",
            gelme_tarix: "",
            cixis_tarix: "",
            adam_sayi: "",
            ad_soyad: "",
            email: "",
            olke_kodu: "",
            nomre: "",
            text_1: "",
            text_2: "",
            text_3: "",
            toplam_qiymet: "",
          });
        }
      })
      .catch(() => {
        Swal.fire(plan_error, ``, "error");
      });
  };

  const formatDate = (date) => {
    return date ? format(date, "yyyy-MM-dd") : "";
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="user_select  ">
        <SharedDataPicker
          label={from_arrival}
          text={private_when_came}
          setForm={setFormDestination}
          customClass={`w-full bg-[--colorF9] px-[40px] py-[10px] text-[18px] outline-none   placeholder:text-[16px] placeholder:capitalize`}
          customStyle="absolute left-[10px] top-[12px] z-[50] "
          form_type={formDestination?.gelme_tarix}
          onChange={(date) =>
            setFormDestination((prev) => ({
              ...prev,
              gelme_tarix: formatDate(date), // Formatlıyoruz
            }))
          }
        />
      </div>
      <div className="user_select  my-[10px] ">
        <SharedDataPicker
          label={departure_form}
          text={choose_from_date}
          setForm={setFormDestination}
          customClass={`w-full bg-[--colorF9] px-[40px] py-[10px] text-[18px] outline-none  placeholder:text-[16px] placeholder:capitalize`}
          customStyle="absolute left-[10px] top-[12px] z-[50] "
          form_type={formDestination?.cixis_tarix}
          onChange={(date) =>
            setFormDestination((prev) => ({
              ...prev,
              cixis_tarix: formatDate(date), // Formatlıyoruz
            }))
          }
        />
      </div>

      <CustomLabel
        htmlFor="adam_sayi"
        h3Text={number_people_form}
        myValue={formDestination.adam_sayi}
        idInp={`adam_sayi`}
        type={"text"}
        handleChange={handleChange}
        myName={`adam_sayi`}
        placeholder={enter_number_of_people}
      />
      <CustomLabel
        htmlFor="ad_soyad"
        h3Text={fullname_form}
        myValue={formDestination.ad_soyad}
        idInp={`ad_soyad`}
        type={"text"}
        handleChange={handleChange}
        myName={`ad_soyad`}
        placeholder={enter_your_name}
      />
      <CustomLabel
        htmlFor="email"
        h3Text={email_form}
        myValue={formDestination.email}
        idInp={`email`}
        type={"text"}
        handleChange={handleChange}
        myName={`email`}
        placeholder={email_address}
      />
      <SharedNumber
        py="py-1"
        text1={tr?.number_form}
        idInp={"nomre"}
        myName={`nomre`}
        olkeler={olkeler}
        handleItemChange={handleChange}
        onClikOpen={() => setDropdownOpen(!dropdownOpen)}
        form1={formDestination.nomre}
        handleSelect={handleSelect}
        form2={form2}
        dropdownOpen={dropdownOpen}
      />
      <p className="text-[--colorBlue] mt-1">{preffered_form}</p>
      <CustomCheckBox
        mt="mt-3"
        id={`text_1`}
        name={`text_1`}
        htmlFor={`text_1`}
        className1={`check1`}
        className2={`check1-label`}
        type={`checkbox`}
        setData={setFormDestination}
        label1Text={need_form1}
        customkey={"text_1"}
      />
      <CustomCheckBox
        mt="mt-3"
        id={`text_2`}
        name={`text_2`}
        htmlFor={`text_2`}
        className1={`check2`}
        className2={`check2-label`}
        type={`checkbox`}
        setData={setFormDestination}
        label1Text={need_form2}
        customkey={"text_2"}
      />
      <CustomTotal
        tourPriceText={tour_price_form}
        tourPriceSum={newprice}
        enterence={include_fees}
        enterancePrice={newprice_tax}
        totalPerson={total_tour}
        privacy_policy={privacy_policy} // Corrected typo here
        book_now={book_now}
        acceptId="accid"
        accName="accept1"
        customkey={"text_3"}
        setData={setFormDestination}
      />
    </form>
  );
};

export default DestinationForm;
