import ActivitesSingle from "@/app/(componnets)/(pages)/Activites/Single/ActivitesSingle";
import Footer from "@/app/(componnets)/Layout/Footer/Footer";
import Header from "@/app/(componnets)/Layout/Header/Header";
import {
  fetchData,
  fetchData2,
  fetchTranslations,
} from "@/app/(fetchData.)/fetchData";

const getData = async (params) => {
  const data = await fetchData(
    params?.code,
    `activites/${params?.id}/${params?.slug}`
  );
  const secret = await fetchData2("home_sections");
  const tr = await fetchTranslations(params?.code);
  return { data, tr, secret };
};

export default async function page({ params }) {
  const { data, tr, secret } = await getData(params);
  const header_1 = tr?.header_1;
  const header_2 = tr?.header_2;
  const header_3 = tr?.header_3;
  const header_4 = tr?.header_4;
  const header_5 = tr?.header_5;
  const follow_us_instagram = tr?.follow_us_instagram;
  const whatsapp_booking = tr?.whatsapp_booking;
  const starting_from = tr?.starting_from;
  const description_tour = tr?.description_tour;
  const going_too_see = tr?.going_too_see;
  const included_tour = tr?.Included_tour;
  const important_notes = tr?.important_notes;
  const pricing_tour = tr?.pricing_tour;
  const payment_tour = tr?.payment_tour;
  const contact_us = tr?.contact_us;
  const whatsApp_tour = tr?.whatsApp_tour;
  const got_questions = tr?.got_questions;
  const plan_together = tr?.plan_together;
  const from_arrival = tr?.from_arrival;
  const departure_form = tr?.departure_form;
  const private_when_came = tr?.private_when_came;
  const choose_from_date = tr?.choose_from_date;
  const number_people_form = tr?.number_people_form;
  const enter_number_of_people = tr?.enter_number_of_people;
  const fullname_form = tr?.fullname_form;
  const enter_your_name = tr?.enter_your_name;
  const email_form = tr?.email_form;
  const email_address = tr?.email_address;
  const number_form = tr?.number_form;
  const preffered_form = tr?.preffered_form;
  const need_form1 = tr?.need_form1;
  const tour_price_form = tr?.tour_price_form;
  const total_tour = tr?.total_tour;
  const privacy_policy = tr?.privacy_policy;
  const book_now = tr?.book_now;
  const quick_booking = tr?.quick_booking;
  const chat_whatsApp = tr?.chat_whatsApp;
  const plan_success = tr.plan_success;
  const plan_ok = tr?.plan_ok;
  const plan_error = tr?.plan_error;
  const include_fees = tr?.include_fees;
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
      <ActivitesSingle
        secret={secret?.sections}
        code={params?.code}
        advantages={data?.advantages}
        follow_us_instagram={follow_us_instagram}
        data={data?.activity}
        whatsapp_booking={whatsapp_booking}
        starting_from={starting_from}
        description_tour={description_tour}
        going_too_see={going_too_see}
        included_tour={included_tour}
        important_notes={important_notes}
        pricing_tour={pricing_tour}
        payment_tour={payment_tour}
        contact_us={contact_us}
        whatsApp_tour={whatsApp_tour}
        got_questions={got_questions}
        plan_together={plan_together}
        from_arrival={from_arrival}
        departure_form={departure_form}
        private_when_came={private_when_came}
        choose_from_date={choose_from_date}
        number_people_form={number_people_form}
        enter_number_of_people={enter_number_of_people}
        fullname_form={fullname_form}
        enter_your_name={enter_your_name}
        email_form={email_form}
        email_address={email_address}
        number_form={number_form}
        preffered_form={preffered_form}
        need_form1={need_form1}
        tour_price_form={tour_price_form}
        total_tour={total_tour}
        privacy_policy={privacy_policy}
        book_now={book_now}
        quick_booking={quick_booking}
        chat_whatsApp={chat_whatsApp}
        plan_success={plan_success}
        plan_ok={plan_ok}
        plan_error={plan_error}
        include_fees={include_fees}
      />
      <Footer />
    </>
  );
}
