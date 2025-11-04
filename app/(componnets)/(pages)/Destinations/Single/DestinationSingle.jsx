import HomeGuests from "../../Home/HomeComponents/HomeGuests";
import Connect from "../../Home/HomeComponents/Connect";
import GlobalTopImageComponent from "@/app/(componnets)/Shared/GlobalTopImageComponent/GlobalTopImageComponent";
import SinglePageGrid1 from "@/app/(componnets)/Shared/SinglePageGrids/SinglePageGrid1";
import SingleGridTop from "@/app/(componnets)/Shared/SinglePageGrids/Componnets/SingleGridTop";

import SharedWhatsApp from "@/app/(componnets)/Shared/SharedWhatsApp/SharedWhatsApp";
import DestinationForm from "@/app/(componnets)/Forms/PagesForms/DestinationForm/DestinationForm";
import { transformTourTags } from "@/app/(componnets)/Shared/transformTourTags/transformTourTags";

const DestinationSingle = ({
  advantages,
  code,
  follow_us_instagram,
  recommed,
  what_our_guests_says,
  data,
  city_tour,
  whatsapp_booking,
  starting_from,
  description_tour,
  going_too_see,
  Included_tour,
  not_included_tour,
  pricing_tour,
  payment_tour,
  whatsApp_tour,
  contact_us,
  got_questions,
  plan_together,
  quick_booking,
  chat_whatsApp,
  from_arrival,
  number_form,
  departure_form,
  fullname_form,
  email_form,
  number_form2,
  private_when_came,
  choose_from_date,
  number_people_form,
  enter_your_name,
  enter_number_of_people,
  email_address,
  preffered_form,
  need_form1,
  need_form2,
  tour_price_form,
  include_fees,
  total_tour,
  privacy_policy,
  book_now,
  tr,
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

  return (
    <section className=" text-black xl:mt-16">
      <div>
        <GlobalTopImageComponent
          img={`${process.env.NEXT_PUBLIC_PICTURE}/${data?.image}`}
          cityName={`${data?.name}`}
          text1={city_tour}
          wpText={whatsapp_booking}
          wpLink={"/test"}
          price={data}
          text2={starting_from}
          text3={data?.tour_day}
        />
        <div className="grid grid-cols-12 gap-6 px-24 mb-16 1xl:px-10 lg:px-4 1xl:mt-6">
          <SinglePageGrid1
            h3text={description_tour}
            ptext={data?.tour_ltineray}
            headText={going_too_see}
            tags={transformedTags}
            slider={data?.gallery}
            headText2={Included_tour}
            what1={data?.tour_included}
            accordionsData={data?.faqs}
            headText3={not_included_tour}
            what2={data?.tour_not_included}
            headText4={pricing_tour}
            what3={data?.tour_pricingboking}
            headText5={payment_tour}
            headText6={contact_us}
            what4={data?.tour_payment_policy}
            what5={data?.tour_contact}
            numberText={whatsApp_tour}
          />
          <div className="col-span-4 lg:col-span-12">
            <div className="flex flex-col bg-[--colorWhite] shadow rounded-xl px-4 py-6 h-max">
              <SingleGridTop
                quetion1={got_questions}
                quetion2={plan_together}
              />
              <DestinationForm
                tr={tr}
                code={code}
                cityName={data?.name}
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
                newprice={newprice}
                newprice_tax={newprice_tax}
                include_fees={include_fees}
                total_tour={total_tour}
                privacy_policy={privacy_policy}
                book_now={book_now}
                plan_success={plan_success}
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

export default DestinationSingle;
