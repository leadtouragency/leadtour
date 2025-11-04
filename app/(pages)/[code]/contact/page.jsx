import ContactPage from "@/app/(componnets)/(pages)/ContactPage/ContactPage";
import Footer from "@/app/(componnets)/Layout/Footer/Footer";
import Header from "@/app/(componnets)/Layout/Header/Header";
import { fetchData, fetchTranslations } from "@/app/(fetchData.)/fetchData";

const getData = async (params) => {
  const contact = await fetchData(params?.code, "contact");
  const data_settings = await fetchData(params?.code, "settings");
  const tr = await fetchTranslations(params?.code);
  return { contact, tr, data_settings };
};

export default async function page({ params }) {
  const { contact, tr, data_settings } = await getData(params);
  const header_1 = tr?.header_1;
  const header_2 = tr?.header_2;
  const header_3 = tr?.header_3;
  const header_4 = tr?.header_4;
  const header_5 = tr?.header_5;
  const travel_services = tr?.travel_services;
  const contact_form_text1 = tr?.contact_form_text1;
  const contact_form_text2 = tr?.contact_form_text2;
  const contact_form_text3 = tr?.contact_form_text3;
  const fullname_form = tr?.fullname_form;
  const enter_your_name = tr?.enter_your_name;
  const email_form = tr?.email_form;
  const email_address = tr?.email_address;
  const number_form = tr?.number_form;
  const your_message = tr?.your_message;
  return (
    <>
      <Header
        code={params?.code}
        header_1={header_1}
        header_2={header_2}
        header_3={header_3}
        header_4={header_4}
        header_5={header_5}
        header_menu_data={contact?.header_menu}
        header_activity={contact?.header_activity}
      />
      <ContactPage
        tr={tr}
        code={params?.code}
        data_contact={contact?.contact}
        data_settings={data_settings}
        data_service={contact?.service}
        travel_services={travel_services}
        contact_form_text1={contact_form_text1}
        contact_form_text2={contact_form_text2}
        contact_form_text3={contact_form_text3}
        fullname_form={fullname_form}
        enter_your_name={enter_your_name}
        email_form={email_form}
        email_address={email_address}
        number_form={number_form}
        your_message={your_message}
      />
      <Footer />
    </>
  );
}
