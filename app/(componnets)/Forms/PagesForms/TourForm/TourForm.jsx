"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import CustomLabel from "../../Components/Label/CustomLabel";
import SharedNumber from "../../Components/SharedNumber/SharedNumber";
import CustomTotal from "../../Components/Label/CustomTotal";
import { olkeler } from "../ContactForm/ContactForm";
import CustomCheckBox from "../../Components/Label/CustomCheckBox";
import SharedDataPicker from "@/app/(componnets)/Shared/SharedDataPicker/SharedDataPicker";
import { useSearchParams } from "next/navigation";
import { format } from "date-fns";
const TourForm = ({
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
  need_form2,
  entrance_fees,
  tour_price_form,
  total_tour,
  privacy_policy,
  book_now,
  newprice,
  newprice_tax,
  code,
  cityName,
  plan_success,
  plan_ok,
  plan_error,
  priceOptions,
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [form2, setForm2] = useState(olkeler?.[45]?.id || "+994");

  const [formTourP, setFormTourP] = useState({
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
    adam_sayi: "",
  });

  const searchParams = useSearchParams();
  const [selectedPriceObject, setSelectedPriceObject] = useState(null);
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

    setFormTourP((prev) => ({
      ...prev,
      toplam_qiymet: selectedPrice,
    }));
  }, [newprice, searchParams]);

  const handleSelect = (id, countryId) => {
    setFormTourP((prev) => ({
      ...prev,
      olke_kodu: `${id}`,
    }));
    setForm2(countryId);
    setDropdownOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "adam_sayi") {
      // priceOptions dizisinden seçilen değere (value) sahip objeyi bul
      const selectedObject =
        priceOptions.find((p) => p.person_count === value) || null;
      // Bulunan objeyi selectedPriceObject state'ine ata
      setSelectedPriceObject(selectedObject);
    }

    if (name === "nomre") {
      const newValue = value.replace(/[^0-9]/g, "");
      setFormTourP((prev) => ({
        ...prev,
        [name]: newValue,
      }));
    } else {
      setFormTourP((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    axios({
      method: "post",
      url: `${process.env.NEXT_PUBLIC_MAIN_URL}/${code}/tour_packages_post`,
      data: formTourP,
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
          setFormTourP({
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
          setForm={setFormTourP}
          customClass={`w-full bg-[--colorF9] px-[40px] py-[10px] text-[18px] outline-none   placeholder:text-[16px] placeholder:capitalize`}
          customStyle="absolute left-[10px] top-[12px] z-[50] "
          form_type={formTourP?.gelme_tarix}
          onChange={(date) =>
            setFormTourP((prev) => ({
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
          setForm={setFormTourP}
          customClass={`w-full bg-[--colorF9] px-[40px] py-[10px] text-[18px] outline-none  placeholder:text-[16px] placeholder:capitalize`}
          customStyle="absolute left-[10px] top-[12px] z-[50] "
          form_type={formTourP?.cixis_tarix}
          onChange={(date) =>
            setFormTourP((prev) => ({
              ...prev,
              cixis_tarix: formatDate(date), // Formatlıyoruz
            }))
          }
        />
      </div>
      <div className="my-[10px]">
        <h3 className="text-[--colorBlue] mb-2">{number_people_form}</h3>
        <select
          id="adam_sayi"
          name="adam_sayi"
          value={formTourP.adam_sayi}
          onChange={handleChange}
          className="w-full bg-[--colorF9] px-4 py-3 text-[18px] outline-none border border-gray-200 rounded"
          required // Kullanıcının seçim yapmasını zorunlu kılabiliriz
        >
          {/* Başlangıçta görünen ve seçilemeyen opsiyon */}
          <option value="" disabled>
            {enter_number_of_people}
          </option>

          {/* priceOptions dizisindeki her eleman için bir option oluşturuyoruz */}
          {priceOptions?.map((priceInfo, index) => (
            <option key={index} value={priceInfo.person_count}>
              {priceInfo.person_count}
            </option>
          ))}
        </select>
      </div>
      <CustomLabel
        htmlFor="ad_soyad"
        h3Text={fullname_form}
        myValue={formTourP.ad_soyad}
        idInp={`ad_soyad`}
        type={"text"}
        handleChange={handleChange}
        myName={`ad_soyad`}
        placeholder={enter_your_name}
      />
      <CustomLabel
        htmlFor="email"
        h3Text={email_form}
        myValue={formTourP.email}
        idInp={`email`}
        type={"text"}
        handleChange={handleChange}
        myName={`email`}
        placeholder={email_address}
      />
      <SharedNumber
        py="py-3"
        sahredCllass={`mb-2 mt-4`}
        text1={number_form}
        idInp={"nomre"}
        myName={`nomre`}
        olkeler={olkeler}
        handleItemChange={handleChange}
        onClikOpen={() => setDropdownOpen(!dropdownOpen)}
        form1={formTourP.nomre}
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
        setData={setFormTourP}
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
        setData={setFormTourP}
        label1Text={need_form2}
        customkey={"text_2"}
      />
      <CustomTotal
        tourPriceSum={selectedPriceObject}
        tourPriceText={tour_price_form}
        enterence={entrance_fees}
        enterancePrice={newprice_tax}
        totalPerson={total_tour}
        accept={privacy_policy}
        acceptId="accid"
        accName="accept1"
        setData={setFormTourP}
        bookNow={book_now}
        customkey={"text_3"}
      />
    </form>
  );
};

export default TourForm;
