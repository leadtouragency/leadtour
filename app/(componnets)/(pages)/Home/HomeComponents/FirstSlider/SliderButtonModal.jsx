"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { IoMdClose } from "react-icons/io";
import { IoPersonSharp } from "react-icons/io5";
import { MdChildCare } from "react-icons/md";
import { FaBabyCarriage } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

import SharedDataPicker from "@/app/(componnets)/Shared/SharedDataPicker/SharedDataPicker";
import CustomCheckBox from "@/app/(componnets)/Forms/Components/Label/CustomCheckBox";
import SharedNumber from "@/app/(componnets)/Forms/Components/SharedNumber/SharedNumber";
import { olkeler } from "@/app/(componnets)/Forms/PagesForms/ContactForm/ContactForm";
import axios from "axios";
import Swal from "sweetalert2";

const Modal = ({ onClose, tr, code }) => {
  if (typeof window === "undefined") return null;
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [form2, setForm2] = useState(olkeler?.[45]?.id || "+994"); // form2'yi tanımladık. Başlangıç değeri olarak 223. indexteki ülkenin id'sini atadık.
  const [formPlan, setFormPlan] = useState({
    gelme_tarix: "",
    cixis_tarix: "",
    text1: "",
    text2: "",
    text3: "",
    text4: "",
    text5: "",
    text6: "",
    boyuk_adam_sayi: "",
    kicik_adam_sayi: "",
    usaq_sayi: "",
    ad: "",
    soyad: "",
    email: "",
    ad: "",
    olke_kodu: "",
    nomre: "",
  });
  const totalSteps = 4;
  const progress = ((step - 1) / (totalSteps - 1)) * 100;

  const [isNextDisabled, setIsNextDisabled] = useState(false);
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(false);

  useEffect(() => {
    // Step 1 için kontrol
    if (step === 1) {
      setIsNextDisabled(!formPlan.gelme_tarix || !formPlan.cixis_tarix);
    }

    // Step 2 için kontrol
    if (step === 2) {
      setIsNextDisabled(
        !formPlan.text1 &&
          !formPlan.text2 &&
          !formPlan.text3 &&
          !formPlan.text4 &&
          !formPlan.text5 &&
          !formPlan.text6
      );
    }

    // Step 3 için kontrol
    if (step === 3) {
      setIsNextDisabled(
        !formPlan.boyuk_adam_sayi &&
          !formPlan.kicik_adam_sayi &&
          !formPlan.usaq_sayi
      );
    }

    // Step 4 için kontrol
    if (step === 4) {
      setIsSubmitDisabled(
        !formPlan.ad || !formPlan.soyad || !formPlan.email || !formPlan.nomre
      );
    }
  }, [step, formPlan]);

  const handleNext = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    }
  };

  const handlePrevious = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };
  const progressBarVariants = {
    initial: { width: 0 },
    animate: {
      width: `${progress}%`,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  const handleSelect = (id, countryId) => {
    // countryId parametresini ekledik
    setFormPlan((prev) => ({
      ...prev,
      olke_kodu: `${id}`,
    }));
    setForm2(countryId); // form2'yi countryId ile güncelledik
    setDropdownOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "number") {
      const newValue = value.replace(/[^0-9]/g, "");
      setFormPlan((prev) => ({
        ...prev,
        [name]: newValue,
      }));
    } else {
      setFormPlan((prev) => ({
        ...prev,
        [name]: value,
      }));
    }

    // Herhangi bir input değiştiğinde buton durumunu güncelle
    if (step === 1) {
      setIsNextDisabled(!formPlan.gelme_tarix || !formPlan.cixis_tarix);
    }

    if (step === 3) {
      setIsNextDisabled(
        !formPlan.boyuk_adam_sayi &&
          !formPlan.kicik_adam_sayi &&
          !formPlan.usaq_sayi
      );
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    onClose();
    axios({
      method: "post",
      url: `${process.env.NEXT_PUBLIC_MAIN_URL}/${code}/plane_post`,
      data: formPlan,
    })
      .then((response) => {
        if (response.data.success) {
          Swal.fire({
            icon: "success",
            title: tr?.plan_success,
            text: "",
            confirmButtonText: tr?.plan_ok,
            customClass: { confirmButton: "text-black-700" },
          });
          setFormPlan({
            gelme_tarix: "",
            cixis_tarix: "",
            text1: "",
            text2: "",
            text3: "",
            text4: "",
            text5: "",
            text6: "",
            boyuk_adam_sayi: "",
            kicik_adam_sayi: "",
            usaq_sayi: "",
            ad: "",
            soyad: "",
            email: "",
            ad: "",
            olke_kodu: "",
            nomre: "",
          });
        }
      })
      .catch(() => {
        Swal.fire(tr?.plan_error, ``, "error");
      });
  };

  return createPortal(
    <AnimatePresence>
      <>
        {/* Arka plan */}
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-70 z-[50000]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        />

        {/* Modal */}
        <motion.div
          className="fixed z-[60000] top-1/2 left-1/2 bg-white rounded-lg px-[40px] py-[30px] w-[700px] shadow-lg"
          initial={{ opacity: 0, scale: 0.9, x: "-50%", y: "-50%" }}
          animate={{ opacity: 1, scale: 1, x: "-50%", y: "-50%" }}
          exit={{ opacity: 0, scale: 0.9, x: "-50%", y: "-50%" }}
          transition={{ duration: 0.3 }}
        >
          {/* Kapatma butonu */}
          <button
            onClick={onClose}
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
          >
            <IoMdClose />
          </button>

          {/* Progress Bar */}
          <div className="w-full bg-gray-200 rounded-full h-[4px] mb-4">
            <motion.div
              className="bg-[--plan] h-[4px] rounded-full"
              variants={progressBarVariants}
              initial="initial"
              animate="animate"
            />
          </div>

          {/* Step Content */}
          <form className="mt-4" onSubmit={handleSubmit}>
            {step === 1 && (
              <div>
                <h2 className="capitalize text-[48px] text-[--colorOrange]">
                  {tr?.plan_head_text_1}
                </h2>
                <p className="text-[--colorBlue]">{tr?.plan_head_text_2}</p>
                <div className="grid grid-cols-12 gap-[20px] mt-[20px]">
                  <div className="col-span-6">
                    <div className="user_select  ">
                      <SharedDataPicker
                        ngClass=" "
                        label={tr?.from_arrival}
                        text={tr?.private_when_came}
                        setForm={setFormPlan}
                        customClass={`w-full bg-[--colorF9] px-[40px] text-[--plan]  py-[10px] text-[18px] outline-none   placeholder:text-[16px] placeholder:capitalize`}
                        customStyle="absolute left-[10px] top-[12px] z-[50] "
                        form_type={formPlan?.gelme_tarix}
                        onChange={(date) =>
                          setFormPlan((prev) => ({
                            ...prev,
                            gelme_tarix: date?.toISOString().split("T")[0], // sadece "YYYY-MM-DD"
                          }))
                        }
                      />
                    </div>
                  </div>
                  <div className="col-span-6">
                    <div className="user_select  ">
                      <SharedDataPicker
                        label={tr?.departure_form}
                        text={tr?.choose_from_date}
                        setForm={setFormPlan}
                        customClass={`w-full bg-[--colorF9] px-[40px] py-[10px] text-[--plan] text-[18px] outline-none   placeholder:text-[16px] placeholder:capitalize`}
                        customStyle="absolute left-[10px] top-[12px] z-[50] "
                        form_type={formPlan?.cixis_tarix}
                        onChange={(date) =>
                          setFormPlan((prev) => ({
                            ...prev,
                            cixis_tarix: date?.toISOString().split("T")[0], // sadece "YYYY-MM-DD"
                          }))
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {step === 2 && (
              <div>
                <h2 className="capitalize text-[48px] text-[--colorOrange]">
                  {tr?.plan_head_text_3}
                </h2>
                <p className="text-[--colorBlue]"> {tr?.plan_head_text_4}</p>

                <div className="grid grid-cols-12 gap-[16px] mt-[20px]">
                  <div className="col-span-4">
                    <div className="border border-[--colorOrange2] rounded-[4px] px-[10px]">
                      <CustomCheckBox
                        id={`text1`}
                        name={`text1`}
                        htmlFor={`text1`}
                        className1={`check1`}
                        className2={`check1-label`}
                        type={`checkbox`}
                        customkey="text1"
                        setData={setFormPlan}
                        label1Text={tr?.plan_label_1}
                      />
                    </div>
                  </div>
                  <div className="col-span-4">
                    <div className="border border-[--colorOrange2] rounded-[4px] px-[10px]">
                      <CustomCheckBox
                        id={`text2`}
                        name={`text2`}
                        htmlFor={`text2`}
                        className1={`check1`}
                        className2={`check1-label`}
                        type={`checkbox`}
                        customkey="text2"
                        setData={setFormPlan}
                        label1Text={tr?.plan_label_2}
                      />
                    </div>
                  </div>
                  <div className="col-span-4">
                    <div className="border border-[--colorOrange2] rounded-[4px] px-[10px]">
                      <CustomCheckBox
                        id={`text3`}
                        name={`text3`}
                        htmlFor={`text3`}
                        className1={`check1`}
                        className2={`check1-label`}
                        type={`checkbox`}
                        customkey="text3"
                        setData={setFormPlan}
                        label1Text={tr?.plan_label_3}
                      />
                    </div>
                  </div>
                  <div className="col-span-4">
                    <div className="border border-[--colorOrange2] rounded-[4px] px-[10px]">
                      <CustomCheckBox
                        id={`text4`}
                        name={`text4`}
                        htmlFor={`text4`}
                        className1={`check1`}
                        className2={`check1-label`}
                        type={`checkbox`}
                        customkey="text4"
                        setData={setFormPlan}
                        label1Text={tr?.plan_label_4}
                      />
                    </div>
                  </div>
                  <div className="col-span-4">
                    <div className="border ">
                      <CustomCheckBox
                        mt="border-[--colorOrange2] rounded-[4px] px-[10px] colorOrangediv"
                        id={`text5`}
                        name={`text5`}
                        htmlFor={`text5`}
                        className1={`check1`}
                        className2={`check1-label`}
                        type={`checkbox`}
                        customkey="text5"
                        setData={setFormPlan}
                        label1Text={tr?.plan_label_5}
                      />
                    </div>
                  </div>

                  <div className="col-span-4">
                    <div className="border border-[--colorOrange2] rounded-[4px] px-[10px]">
                      <CustomCheckBox
                        id={`text6`}
                        name={`text6`}
                        htmlFor={`text6`}
                        className1={`check1`}
                        className2={`check1-label`}
                        type={`checkbox`}
                        customkey="text6"
                        setData={setFormPlan}
                        label1Text={tr?.plan_label_6}
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {step === 3 && (
              <div>
                <h2 className="capitalize text-[48px] text-[--colorOrange]">
                  {tr?.plan_head_text_5}
                </h2>
                <p className="text-[--colorBlue]"> {tr?.plan_head_text_6}</p>
                <div className="grid grid-cols-12 gap-[20px] mt-[20px]">
                  <div className="col-span-4">
                    <label className="block mb-2 text-[--colorBlue]">
                      {tr?.plan_adult}
                      <div className="relative">
                        <input
                          value={formPlan?.boyuk_adam_sayi}
                          id="boyuk_adam_sayi"
                          type="text"
                          name="boyuk_adam_sayi"
                          placeholder={tr?.plan_adult_place}
                          className="w-full border border-[--plan] bg-[--colorF9] outline-none text-[--plan] rounded-md py-2 px-[30px] placeholder:capitalize"
                          onChange={handleChange}
                        />
                        <span className="absolute left-[5px] top-[10px] text-[--plan] text-[20px]">
                          <IoPersonSharp />
                        </span>
                      </div>
                    </label>
                  </div>
                  <div className="col-span-4">
                    <label className="block mb-2 text-[--colorBlue]">
                      {tr?.plan_kids}
                      <div className="relative">
                        <input
                          value={formPlan?.kicik_adam_sayi}
                          id="kicik_adam_sayi"
                          type="text"
                          name="kicik_adam_sayi"
                          placeholder={tr?.plan_kids_place}
                          className="w-full border border-[--plan] bg-[--colorF9] outline-none text-[--plan] rounded-md py-2 px-[30px] placeholder:capitalize"
                          onChange={handleChange}
                        />
                        <span className="absolute left-[5px] top-[10px] text-[--plan] text-[20px]">
                          <MdChildCare />
                        </span>
                      </div>
                    </label>
                  </div>
                  <div className="col-span-4">
                    <label className="block mb-2 text-[--colorBlue]">
                      {tr?.plan_infants}
                      <div className="relative">
                        <input
                          id="usaq_sayi"
                          type="text"
                          name="usaq_sayi"
                          value={formPlan?.usaq_sayi}
                          placeholder={tr?.plan_infants_place}
                          className="w-full border border-[--plan] bg-[--colorF9] outline-none text-[--plan] rounded-md py-2 px-[30px] placeholder:capitalize"
                          onChange={handleChange}
                        />
                        <span className="absolute left-[8px] top-[10px] text-[--plan] text-[20px]">
                          <FaBabyCarriage />
                        </span>
                      </div>
                    </label>
                  </div>
                </div>
              </div>
            )}

            {step === 4 && (
              <div>
                <h2 className="capitalize text-[48px] text-[--colorOrange]">
                  {tr?.plan_head_text_7}
                </h2>
                <p className="text-[--colorBlue] mb-[20px]">
                  {tr?.plan_head_text_8}
                </p>
                <div className="grid grid-cols-12 gap-[10px]">
                  <div className="col-span-6">
                    <label className="block  text-[--colorBlue]">
                      {tr?.plan_first_name}
                      <div className="relative">
                        <input
                          id="ad"
                          type="text"
                          name="ad"
                          value={formPlan?.ad}
                          placeholder={tr?.plan_name_place}
                          className="w-full border border-[--plan] bg-[--colorF9] outline-none text-[--plan] rounded-md py-2 px-[30px] placeholder:capitalize"
                          onChange={handleChange}
                        />
                        <span className="absolute left-2 top-[10px] text-[--plan] text-[20px]">
                          <IoPersonSharp />
                        </span>
                      </div>
                    </label>
                  </div>
                  <div className="col-span-6">
                    <label className="block text-[--colorBlue]">
                      {tr?.plan_last_name}
                      <div className="relative">
                        <input
                          id="soyad"
                          type="text"
                          name="soyad"
                          value={formPlan?.soyad}
                          placeholder={tr?.plan_name_place_2}
                          className="w-full border border-[--plan] bg-[--colorF9] outline-none text-[--plan] rounded-md py-2 px-[30px] placeholder:capitalize"
                          onChange={handleChange}
                        />
                        <span className="absolute left-2 top-[10px] text-[--plan] text-[20px]">
                          <FaRegEnvelope />
                        </span>
                      </div>
                    </label>
                  </div>
                  <div className="col-span-6">
                    <label className="block  text-[--colorBlue]">
                      {tr?.email_form}
                      <div className="relative">
                        <input
                          id="email"
                          type="text"
                          name="email"
                          value={formPlan?.email}
                          placeholder={tr?.email_address}
                          className="w-full border border-[--plan] bg-[--colorF9] outline-none text-[--plan] rounded-md py-2 px-[30px] placeholder:capitalize"
                          onChange={handleChange}
                        />
                        <span className="absolute left-2 top-[10px] text-[--plan] text-[20px]">
                          <AiOutlineMail />
                        </span>
                      </div>
                    </label>
                  </div>
                  <div className="col-span-6">
                    <SharedNumber
                      py="py-1"
                      text1={tr?.number_form}
                      idInp={"nomre"}
                      myName={`nomre`}
                      olkeler={olkeler}
                      handleItemChange={handleChange}
                      onClikOpen={() => setDropdownOpen(!dropdownOpen)}
                      form1={formPlan.nomre}
                      handleSelect={handleSelect}
                      form2={form2}
                      dropdownOpen={dropdownOpen}
                    />
                  </div>
                </div>
              </div>
            )}
          </form>

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-6">
            {step < totalSteps && step > 1 && (
              <button
                onClick={handlePrevious}
                className="border border-[--plan] text-[--plan]  py-2 px-[40px] rounded"
              >
                {tr?.prev_btn}
              </button>
            )}

            {step < totalSteps ? (
              <button
                onClick={handleNext}
                disabled={isNextDisabled}
                className={`bg-[--plan]  text-white font-bold py-2 px-[40px] rounded ${
                  isNextDisabled ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {tr?.next_btn}
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={isSubmitDisabled}
                className={`bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ${
                  isSubmitDisabled ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {tr?.submit_btn}
              </button>
            )}
          </div>
        </motion.div>
      </>
    </AnimatePresence>,
    document.body
  );
};

const SliderButtonModal = ({ title, tr, code }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="lg:flex lg:items-center lg:justify-center">
        <button
          onClick={() => setIsOpen(true)}
          className="bg-[--plan] text-[--colorWhite] px-6 py-3 lg:px-4 lg:py-2 lg:text-sm w-max rounded-md"
        >
          {title}
        </button>
      </div>

      {isOpen && <Modal tr={tr} code={code} onClose={() => setIsOpen(false)} />}
    </>
  );
};

export default SliderButtonModal;
