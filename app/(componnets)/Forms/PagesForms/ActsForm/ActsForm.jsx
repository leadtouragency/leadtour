"use client";

import { useEffect, useState } from "react";

import axios from "axios";
import Swal from "sweetalert2";
import CustomLabel from "../../Components/Label/CustomLabel";
import SharedNumber from "../../Components/SharedNumber/SharedNumber";
import CustomCheckBox from "../../Components/Label/CustomCheckBox";
import CustomTotal from "../../Components/Label/CustomTotal";
import { olkeler } from "../ContactForm/ContactForm";
import SharedDataPicker from "@/app/(componnets)/Shared/SharedDataPicker/SharedDataPicker";
import { useSearchParams } from "next/navigation";
import { format } from "date-fns"; // date-fns kütüphanesinden format fonksiyonunu ekledik

const ActsForm = ({
  from_arrival,
  private_when_came,
  departure_form,
  choose_from_date,
  number_people_form,
  enter_number_of_people,
  fullname_form,
  enter_your_name,
  email_form,
  email_address,
  number_form,
  preffered_form,
  need_form1,
  tour_price_form,
  newprice,
  newprice_tax,
  total_tour,
  privacy_policy,
  book_now,
  cityName,
  plan_success,
  plan_ok,
  plan_error,
  include_fees,
  code,
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [form2, setForm2] = useState(olkeler?.[45]?.id || "+994");
  const [formActs, setFormActs] = useState({
    activite_adi: cityName ? cityName : "",
    gelme_tarix: "",
    cixis_tarix: "",
    adam_sayi: "",
    ad_soyad: "",
    email: "",
    olke_kodu: "",
    nomre: "",
    text_1: "",
    text_2: "",
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

    setFormActs((prev) => ({
      ...prev,
      toplam_qiymet: selectedPrice,
    }));
  }, [newprice, searchParams]);

  const handleSelect = (id, countryId) => {
    setFormActs((prev) => ({
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
      setFormActs((prev) => ({
        ...prev,
        [name]: newValue,
      }));
    } else {
      setFormActs((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    axios({
      method: "post",
      url: `${process.env.NEXT_PUBLIC_MAIN_URL}/${code}/activity_post`,
      data: formActs,
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
          setFormActs({
            activite_adi: "",
            gelme_tarix: "",
            cixis_tarix: "",
            adam_sayi: "",
            ad_soyad: "",
            email: "",
            olke_kodu: "",
            nomre: "",
            text_1: "",
            text_2: "",
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
    <>
      <form onSubmit={handleSubmit}>
        <div className="user_select  ">
          <SharedDataPicker
            label={from_arrival}
            text={private_when_came}
            setForm={setFormActs}
            customClass={`w-full bg-[--colorF9] px-[40px] py-[10px] text-[--plan] text-[18px] outline-none   placeholder:text-[16px] placeholder:capitalize`}
            customStyle="absolute left-[10px] top-[12px] z-[50] "
            form_type={formActs?.gelme_tarix}
            onChange={(date) =>
              setFormActs((prev) => ({
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
            setForm={setFormActs}
            customClass={`w-full bg-[--colorF9] px-[40px] py-[10px] text-[--plan] text-[18px] outline-none  placeholder:text-[16px] placeholder:capitalize`}
            customStyle="absolute left-[10px] top-[12px] z-[50] "
            form_type={formActs?.cixis_tarix}
            onChange={(date) =>
              setFormActs((prev) => ({
                ...prev,
                cixis_tarix: formatDate(date), // Formatlıyoruz
              }))
            }
          />
        </div>

        <CustomLabel
          htmlFor="adam_sayi"
          h3Text={number_people_form}
          myValue={formActs.adam_sayi}
          idInp={`adam_sayi`}
          type={"text"}
          handleChange={handleChange}
          myName={`adam_sayi`}
          placeholder={enter_number_of_people}
        />
        <CustomLabel
          htmlFor="ad_soyad"
          h3Text={fullname_form}
          myValue={formActs.ad_soyad}
          idInp={`ad_soyad`}
          type={"text"}
          handleChange={handleChange}
          myName={`ad_soyad`}
          placeholder={enter_your_name}
        />
        <CustomLabel
          htmlFor="email"
          h3Text={email_form}
          myValue={formActs.email}
          idInp={`email`}
          type={"text"}
          handleChange={handleChange}
          myName={`email`}
          placeholder={email_address}
        />
        <SharedNumber
          sahredCllass={`mb-2 mt-4`}
          py="py-3"
          text1={number_form}
          idInp={"nomre"}
          myName={`nomre`}
          olkeler={olkeler}
          handleItemChange={handleChange}
          onClikOpen={() => setDropdownOpen(!dropdownOpen)}
          form1={formActs.nomre}
          handleSelect={handleSelect}
          form2={form2}
          dropdownOpen={dropdownOpen}
        />
        <p className="text-[--colorBlue] mt-1">{preffered_form}</p>
        <CustomCheckBox
          mt={"mt-3"}
          id={`text_1`}
          name={`text_1`}
          htmlFor={`text_1`}
          className1={`check1`}
          className2={`check1-label`}
          type={`checkbox`}
          setData={setFormActs}
          label1Text={need_form1}
          customkey={"text_1"}
        />
        <CustomTotal
          tourPriceText={tour_price_form}
          tourPriceSum={newprice}
          enterence={include_fees}
          enterancePrice={newprice_tax}
          totalPerson={total_tour}
          totalSum=""
          accept={privacy_policy}
          acceptId="accid"
          accName="accept1"
          setData={setFormActs}
          bookNow={book_now}
          customkey={"text_2"}
        />
      </form>
    </>
  );
};

export default ActsForm;
