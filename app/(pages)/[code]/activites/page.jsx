import Activites from "@/app/(componnets)/(pages)/Activites/Activites";
import Footer from "@/app/(componnets)/Layout/Footer/Footer";
import Header from "@/app/(componnets)/Layout/Header/Header";
import {
  fetchData,
  fetchData2,
  fetchTranslations,
} from "@/app/(fetchData.)/fetchData";

const getData = async (params) => {
  const data = await fetchData(params?.code, `activites`);
  const tr = await fetchTranslations(params?.code);
  const secret = await fetchData2("home_sections");
  return { data, tr, secret };
};

export default async function page({ params }) {
  const { data, tr, secret } = await getData(params);
  const header_1 = tr?.header_1;
  const header_2 = tr?.header_2;
  const header_3 = tr?.header_3;
  const header_4 = tr?.header_4;
  const header_5 = tr?.header_5;
  const per_person = tr?.per_person;
  const checkAll = tr?.checkAll;
  const follow_us_instagram = tr?.follow_us_instagram;
  const top_activities = tr?.top_activities;
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
        header_menu_data={data?.header_menu}
        header_activity={data?.header_activity}
      />
      <Activites
        tr={tr}
        secret={secret?.sections}
        code={params?.code}
        advantages={data?.advantages}
        per_person={per_person}
        checkAll={checkAll}
        data_activity={data?.activity}
        video_data={data?.video}
        follow_us_instagram={follow_us_instagram}
        ac_header={data?.ac_header}
        top_activities={top_activities}
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
