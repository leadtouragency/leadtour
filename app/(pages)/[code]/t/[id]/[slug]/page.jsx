import TourSingle from "@/app/(componnets)/(pages)/TourSingle/TourSingle";
import Footer from "@/app/(componnets)/Layout/Footer/Footer";
import Header from "@/app/(componnets)/Layout/Header/Header";
import { fetchData, fetchTranslations } from "@/app/(fetchData.)/fetchData";

const getData = async (params) => {
  const data = await fetchData(params?.code, `t/${params?.id}/${params?.slug}`);
  const tr = await fetchTranslations(params?.code);
  return { data, tr };
};

export default async function page({ params }) {
  const { data, tr } = await getData(params);
  const header_1 = tr?.header_1;
  const header_2 = tr?.header_2;
  const header_3 = tr?.header_3;
  const header_4 = tr?.header_4;
  const header_5 = tr?.header_5;
  const follow_us_instagram = tr?.follow_us_instagram;
  const what_our_guests_says = tr?.what_our_guests_says;
  const tour_itinerary = tr?.tour_itinerary;
  const going_too_see = tr?.going_too_see;
  const included_tour = tr?.Included_tour;
  const not_included_tour = tr?.not_included_tour;
  const pricing_tour = tr?.pricing_tour;
  const whatsapp_booking = tr?.whatsapp_booking;
  const starting_from = tr?.starting_from;
  const contact_us = tr?.contact_us;
  const payment_tour = tr?.payment_tour;
  const got_questions = tr?.got_questions;
  const plan_together = tr?.plan_together;
  const quick_booking = tr?.quick_booking;
  const chat_whatsApp = tr?.chat_whatsApp;

  // form ucun olanlar
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
  const need_form2 = tr?.need_form2;
  const entrance_fees = tr?.entrance_fees;
  const tour_price_form = tr?.tour_price_form;
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
      <TourSingle
        advantages={data?.advantages}
        code={params?.code}
        recommed={data?.recommed}
        follow_us_instagram={follow_us_instagram}
        what_our_guests_says={what_our_guests_says}
        tour_itinerary={tour_itinerary}
        data={data?.tour}
        going_too_see={going_too_see}
        included_tour={included_tour}
        not_included_tour={not_included_tour}
        pricing_tour={pricing_tour}
        whatsapp_booking={whatsapp_booking}
        starting_from={starting_from}
        contact_us={contact_us}
        payment_tour={payment_tour}
        got_questions={got_questions}
        plan_together={plan_together}
        quick_booking={quick_booking}
        chat_whatsApp={chat_whatsApp}
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
        need_form2={need_form2}
        entrance_fees={entrance_fees}
        tour_price_form={tour_price_form}
        total_tour={total_tour}
        privacy_policy={privacy_policy}
        book_now={book_now}
        plan_success={plan_success}
        plan_ok={plan_ok}
        plan_error={plan_error}
      />
      <Footer />
    </>
  );
}
