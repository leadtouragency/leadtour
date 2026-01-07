import DestinationMenu from "./DestinationMenu";
import PackagesPage from "../Home/HomeComponents/Package";
import HomeGuests from "../Home/HomeComponents/HomeGuests";
import Connect from "../Home/HomeComponents/Connect";
import Activities from "../../Shared/Activities/Activities";
import ContactForm from "../../Forms/PagesForms/ContactForm/ContactForm";

const Destinations = async ({
  data_desti,
  code,
  per_person,
  checkAll,
  data_package,
  find_your,
  data_activity,
  advantages,
  follow_us_instagram,
  what_our_guests_says,
  explore_destinations,
  recommed,
  top_activities,
  contact_form_text1,
  contact_form_text2,
  contact_form_text3,
  fullname_form,
  enter_your_name,
  email_form,
  email_address,
  number_form,
  your_message,
  secret,
}) => {
  const allProducts = data_activity?.flatMap((item) => item?.products);
  return (
    <section className=" min-h-screen">
      <div className=" mx-8 lg:mx-0 rounded-xl">
        <DestinationMenu
          data_desti={data_desti}
          code={code}
          per_person={per_person}
          checkAll={checkAll}
          secretimg={secret?.section11}
          secretimg2={secret?.section12}
          explore_destinations={explore_destinations}
        />
      </div>
      {secret?.section3 === 1 && (
        <div className="lg:px-4">
          <PackagesPage
            data_package={data_package}
            code={code?.code}
            per_person={per_person}
            checkAll={checkAll}
            find_your={find_your}
          />
        </div>
      )}

      {secret?.section9 === 1 && (
        <Activities
          data_activity={allProducts}
          per_person={per_person}
          checkAll={checkAll}
          code={code?.code}
          top_activities={top_activities}
        />
      )}
      {secret?.section10 === 1 && (
        <ContactForm
          contact_form_text1={contact_form_text1}
          contact_form_text2={contact_form_text2}
          contact_form_text3={contact_form_text3}
          fullname_form={fullname_form}
          enter_your_name={enter_your_name}
          email_form={email_form}
          email_address={email_address}
          number_form={number_form}
          your_message={your_message}
          customClass={`mt-20 ${
            secret?.section9 === 0 ? "mb-[50px]" : ""
          } mx-36 2xl:mt-16 2xl:mb-8 2xl:mx-16 xl:mx-4`}
        />
      )}

      {secret?.section7 === 1 && (
        <HomeGuests
          recommed={recommed}
          what_our_guests_says={what_our_guests_says}
        />
      )}
      {secret?.section8 === 1 && (
        <Connect
          advantages={advantages}
          code={code?.code}
          follow_us_instagram={follow_us_instagram}
        />
      )}
    </section>
  );
};

export default Destinations;
