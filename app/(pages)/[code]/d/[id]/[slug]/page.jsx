import DestinationSingle from "@/app/(componnets)/(pages)/Destinations/Single/DestinationSingle";
import Footer from "@/app/(componnets)/Layout/Footer/Footer";
import Header from "@/app/(componnets)/Layout/Header/Header";
import {
  fetchData,
  fetchData2,
  fetchTranslations,
} from "@/app/(fetchData.)/fetchData";

const getData = async (params) => {
  const data = await fetchData(params?.code, `d/${params?.id}/${params?.slug}`);
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
  const follow_us_instagram = tr?.follow_us_instagram;
  const what_our_guests_says = tr?.what_our_guests_says;
  const city_tour = tr?.city_tour;
  const whatsapp_booking = tr?.whatsapp_booking;
  const starting_from = tr?.starting_from;
  const description_tour = tr?.description_tour;
  const going_too_see = tr?.going_too_see;
  const Included_tour = tr?.Included_tour;
  const not_included_tour = tr?.not_included_tour;
  const pricing_tour = tr?.pricing_tour;
  const payment_tour = tr?.payment_tour;
  const whatsApp_tour = tr?.whatsApp_tour;
  const contact_us = tr?.contact_us;
  const got_questions = tr?.got_questions;
  const plan_together = tr?.plan_together;
  const quick_booking = tr?.quick_booking;
  const chat_whatsApp = tr?.chat_whatsApp;
  const from_arrival = tr?.from_arrival;
  const departure_form = tr?.departure_form;
  const number_form = tr?.number_form;
  const fullname_form = tr?.fullname_form;
  const email_form = tr?.email_form;
  const number_form2 = tr?.number_form;
  const private_when_came = tr?.private_when_came;
  const choose_from_date = tr?.choose_from_date;
  const number_people_form = tr?.number_people_form;
  const enter_your_name = tr?.enter_your_name;
  const enter_number_of_people = tr?.enter_number_of_people;
  const email_address = tr?.email_address;
  const preffered_form = tr?.preffered_form;
  const need_form1 = tr?.need_form1;
  const need_form2 = tr?.need_form2;
  const tour_price_form = tr?.tour_price_form;
  const include_fees = tr?.include_fees;
  const total_tour = tr?.total_tour;
  const privacy_policy = tr?.privacy_policy;
  const book_now = tr?.book_now;
  const plan_success = tr?.plan_success;
  const plan_ok = tr?.plan_ok;
  const plan_error = tr?.plan_error;

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
      <DestinationSingle
        secret={secret?.sections}
        advantages={data?.advantages}
        code={params?.code}
        data={data?.translatedTour}
        recommed={data?.recommed}
        city_tour={city_tour}
        whatsapp_booking={whatsapp_booking}
        starting_from={starting_from}
        what_our_guests_says={what_our_guests_says}
        follow_us_instagram={follow_us_instagram}
        description_tour={description_tour}
        going_too_see={going_too_see}
        Included_tour={Included_tour}
        not_included_tour={not_included_tour}
        pricing_tour={pricing_tour}
        payment_tour={payment_tour}
        whatsApp_tour={whatsApp_tour}
        contact_us={contact_us}
        got_questions={got_questions}
        plan_together={plan_together}
        quick_booking={quick_booking}
        chat_whatsApp={chat_whatsApp}
        from_arrival={from_arrival}
        departure_form={departure_form}
        number_form={number_form}
        fullname_form={fullname_form}
        email_form={email_form}
        number_form2={number_form2}
        private_when_came={private_when_came}
        choose_from_date={choose_from_date}
        number_people_form={number_people_form}
        enter_your_name={enter_your_name}
        enter_number_of_people={enter_number_of_people}
        email_address={email_address}
        preffered_form={preffered_form}
        need_form1={need_form1}
        need_form2={need_form2}
        tour_price_form={tour_price_form}
        include_fees={include_fees}
        total_tour={total_tour}
        privacy_policy={privacy_policy}
        book_now={book_now}
        tr={tr}
        plan_success={plan_success}
        plan_ok={plan_ok}
        plan_error={plan_error}
      />
      <Footer />
    </>
  );
}
