import { FaWhatsapp, FaRegEnvelope, FaInstagram } from "react-icons/fa";
import ContactForm from "../../Forms/PagesForms/ContactForm/ContactForm";
import SharedTravelServices from "../../Shared/SharedTravelServices/SharedTravelServices";
import HeadText from "../../Shared/Headtext/HeadText";
import Image from "next/image";

const ContactPage = ({
  data_service,
  data_settings,
  tr,
  travel_services,
  contact_form_text1,
  contact_form_text2,
  contact_form_text3,
  fullname_form,
  enter_your_name,
  email_form,
  email_address,
  number_form,
  your_message,
  data_contact,
  code,
}) => {
  const connections = [
    {
      id: 1,
      icon: <FaWhatsapp />,
      text: "whatsapp",
      href: `tel:${data_settings?.settings?.number}`,
      number: data_settings?.settings?.number,
    },
    {
      id: 2,
      icon: <FaRegEnvelope />,
      text: "Email",
      href: `mailto:${data_settings?.settings?.email}`,
      number: data_settings?.settings?.email,
    },
    {
      id: 3,
      icon: <FaWhatsapp />,
      text: "Whatsapp",
      href: `tel:${data_settings?.settings?.number_2}`,
      number: data_settings?.settings?.number_2,
    },
    {
      id: 4,
      icon: <FaInstagram />,
      text: "Instagram",
      href: `https://www.instagram.com/${data_settings?.settings?.instagram}`,
      number: data_settings?.settings?.instagram,
    },
  ];
  return (
    <section className=" mt-8 ">
      <div className="relative my-6">
        <div
          className=" p-8 m-8 lg:p-2 lg:m-0 bg-[--destibg] rounded !bg-[100%_100%] h-[700px] lg:h-full !bg-no-repeat"
          style={{
            backgroundImage: `url(${process.env.NEXT_PUBLIC_PICTURE}/${data_contact?.image})`,
          }}
        >
          <div className=" w-full flex items-center justify-center mt-32 lg:mt-20 flex-col lg:px-4 ">
            <HeadText
              text={data_contact?.title}
              textColor={`colorOrange`}
              customClass="font-bold text-5xl lg:text-2xl"
            />
            <div
              className="text-[--colorBlue] mt-5 w-[70%] lg:w-full text-center"
              dangerouslySetInnerHTML={{ __html: `${data_contact?.text}` }}
            />
            <div className="mt-6 w-full">
              <ul className="grid grid-cols-12 gap-4  w-full max-w-[1000px] m-auto">
                {connections?.map((item, i) => (
                  <li
                    key={i}
                    className="flex gap-4  col-span-6 lg:col-span-12 bg-[--plan] px-6 py-4 rounded-lg"
                  >
                    <span className="text-[--colorWhite] text-5xl flex h-full justify-center items-center">
                      {item?.icon}
                    </span>
                    <div className="flex flex-col gap-2 text-[--colorWhite] ">
                      <h3 className="capitalize">{item?.text}</h3>
                      <a target="_blank" href={item?.href}>
                        {item?.number}
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Image
          src={`${process.env.NEXT_PUBLIC_PICTURE}/${data_contact?.image2}`}
          className=" w-full h-full mt-[-7rem] xl:mt-5 lg:h-full relative z-30"
          width={1000}
          height={600}
          alt="baku"
        />
      </div>

      <div className="mb-10 ">
        <ContactForm
          code={code}
          tr={tr}
          contact_form_text1={contact_form_text1}
          contact_form_text2={contact_form_text2}
          contact_form_text3={contact_form_text3}
          fullname_form={fullname_form}
          enter_your_name={enter_your_name}
          email_form={email_form}
          email_address={email_address}
          number_form={number_form}
          your_message={your_message}
          customClass="mt-[-7rem] relative z-[50] mx-36 2xl:mt-16 2xl:mb-8 2xl:mx-16 xl:mx-4"
        />
      </div>
      <div className="px-8 mb-20 mt-20 lg:mt-10 lg:px-4">
        <div className="flex items-center justify-center mb-6">
          <HeadText
            text={travel_services}
            textColor={`colorOrange`}
            customClass="font-bold text-5xl lg:text-2xl"
          />
        </div>
        <SharedTravelServices data={data_service} />
      </div>
    </section>
  );
};

export default ContactPage;
