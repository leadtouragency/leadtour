"use client";
import TourForm from "../../Forms/PagesForms/TourForm/TourForm";
import GlobalTopImageComponent from "../../Shared/GlobalTopImageComponent/GlobalTopImageComponent";
import SharedWhatsApp from "../../Shared/SharedWhatsApp/SharedWhatsApp";
import SingleGridTop from "../../Shared/SinglePageGrids/Componnets/SingleGridTop";
import SinglePageGrid1 from "../../Shared/SinglePageGrids/SinglePageGrid1";
import { transformTourTags } from "../../Shared/transformTourTags/transformTourTags";
import Connect from "../Home/HomeComponents/Connect";
import HomeGuests from "../Home/HomeComponents/HomeGuests";

const TourSingle = ({
  data,
  advantages,
  code,
  recommed,
  follow_us_instagram,
  what_our_guests_says,
  tour_itinerary,
  going_too_see,
  included_tour,
  not_included_tour,
  pricing_tour,
  whatsapp_booking,
  starting_from,
  contact_us,
  payment_tour,
  got_questions,
  plan_together,
  quick_booking,
  chat_whatsApp,
  from_arrival,
  departure_form,
  private_when_came,
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
  plan_success,
  plan_ok,
  plan_error,
}) => {
  const originalTags = data?.tour_tags;

  const transformedTags = transformTourTags(originalTags, code);

  const newprice = {
    azn_price: data?.azn_price,
    aed_price: data?.aed_price,
    usd_price: data?.usd_price,
  };
  const newprice_tax = {
    azn_tax: data?.azn_tax,
    aed_tax: data?.aed_tax,
    usd_tax: data?.usd_tax,
  };

  const priceArray = JSON.parse(data?.price);

  return (
    <section className="text-black">
      <div>
        <GlobalTopImageComponent
          img="/fakedata/t/big_img.png"
          cityName={data?.name}
          text1={``}
          wpText={whatsapp_booking}
          wpLink={data?.tour_link}
          price={newprice}
          text2={starting_from}
          text3={data?.tour_day}
        />
        <div className="grid grid-cols-12 gap-6 px-24 mb-16 2xl:px-12">
          <SinglePageGrid1
            h3text={`${data?.name} ${tour_itinerary}`}
            ptext={data?.tour_ltineray}
            headText={going_too_see}
            tags={transformedTags}
            slider={data?.gallery}
            headText2={included_tour}
            what1={data?.tour_included}
            accordionsData={data?.faqs}
            headText3={not_included_tour}
            what2={data?.tour_not_included}
            headText4={pricing_tour}
            what3={data?.tour_pricingboking}
            headText6={contact_us}
            headText5={payment_tour}
            what4={data?.tour_payment_policy}
            what5={data?.tour_contact}
          />
          <div className="col-span-4">
            <div className="flex flex-col bg-[--colorWhite] shadow rounded-xl px-4 py-6 h-max">
              <SingleGridTop
                quetion1={got_questions}
                quetion2={plan_together}
              />
              <TourForm
                code={code}
                cityName={data?.name}
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
                newprice={newprice}
                newprice_tax={newprice_tax}
                plan_success={plan_success}
                priceOptions={priceArray}
                plan_ok={plan_ok}
                plan_error={plan_error}
              />
            </div>
            <div className="bg-[--colorWhite] shadow rounded-xl mt-8 overflow-hidden">
              <SharedWhatsApp
                text={quick_booking}
                btnLink={"/"}
                btnText={chat_whatsApp}
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <HomeGuests
          recommed={recommed}
          what_our_guests_says={what_our_guests_says}
        />
        <Connect
          advantages={advantages}
          code={code}
          follow_us_instagram={follow_us_instagram}
        />
      </div>
    </section>
  );
};

export default TourSingle;
