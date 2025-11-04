import GlobalTopImageComponent from "@/app/(componnets)/Shared/GlobalTopImageComponent/GlobalTopImageComponent";
import SinglePageGrid1 from "@/app/(componnets)/Shared/SinglePageGrids/SinglePageGrid1";
import Connect from "../../Home/HomeComponents/Connect";
import SingleGridTop from "@/app/(componnets)/Shared/SinglePageGrids/Componnets/SingleGridTop";
import SharedWhatsApp from "@/app/(componnets)/Shared/SharedWhatsApp/SharedWhatsApp";
import ActsForm from "@/app/(componnets)/Forms/PagesForms/ActsForm/ActsForm";

const ActivitesSingle = ({
  advantages,
  code,
  follow_us_instagram,
  data,
  whatsapp_booking,
  starting_from,
  description_tour,
  going_too_see,
  included_tour,
  important_notes,
  pricing_tour,
  payment_tour,
  contact_us,
  whatsApp_tour,
  got_questions,
  plan_together,
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
  tour_price_form,
  total_tour,
  privacy_policy,
  book_now,
  quick_booking,
  chat_whatsApp,
  plan_success,
  plan_ok,
  plan_error,
  include_fees,
}) => {
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
    <section>
      <div className="big_img xl:mt-16">
        <GlobalTopImageComponent
          img={`${process.env.NEXT_PUBLIC_PICTURE}/${data?.cover}`}
          cityName={data?.name}
          wpText={whatsapp_booking}
          wpLink="/az"
          text2={starting_from}
          price="$59/per person"
          text3={data?.tour_day}
        />
        <div className="grid grid-cols-12 gap-6 px-24 mb-16 1xl:px-10 lg:px-4">
          <SinglePageGrid1
            h3text={description_tour}
            ptext={data?.tour_ltineray}
            headText={going_too_see}
            tags={``}
            slider={data?.gallery}
            headText2={included_tour}
            what1={data?.tour_included}
            headText3={important_notes}
            what2={data?.tour_not_included}
            headText4={pricing_tour}
            what3={data?.tour_pricingboking}
            headText5={payment_tour}
            headText6={contact_us}
            what4={data?.tour_payment_policy}
            what5={data?.tour_contact}
            numberText={whatsApp_tour}
            accordionsData={data?.faqs}
          />
          <div className="col-span-4 xl:col-span-12">
            <div className="flex flex-col bg-[--colorWhite] shadow rounded-xl px-4 py-6 h-max">
              <SingleGridTop
                quetion1={got_questions}
                quetion2={plan_together}
              />
              <ActsForm
                code={code}
                cityName={data?.name}
                from_arrival={from_arrival}
                private_when_came={private_when_came}
                departure_form={departure_form}
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
                newprice={newprice}
                newprice_tax={newprice_tax}
                total_tour={total_tour}
                privacy_policy={privacy_policy}
                book_now={book_now}
                plan_success={plan_success}
                plan_ok={plan_ok}
                plan_error={plan_error}
                include_fees={include_fees}
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
        <div className="px-8 lg:px-0">
          <Connect
            advantages={advantages}
            code={code}
            follow_us_instagram={follow_us_instagram}
          />
        </div>
      </div>
    </section>
  );
};

export default ActivitesSingle;
