import Choose from "./HomeComponents/Choose";
import Connect from "./HomeComponents/Connect";
import HomeDestination from "./HomeComponents/HomeDestination";
import HomeGuests from "./HomeComponents/HomeGuests";
import HomeMountain from "./HomeComponents/HomeMountain";
import HomeServices from "./HomeComponents/HomeServices";
import HomeSlider from "./HomeComponents/HomeSlider";
import PackagesPage from "./HomeComponents/Package";

const HomePage = ({
  data_slayder,
  data_category,
  code,
  data_package,
  tr,
  data_why,
  advantages,
  follow_us_instagram,
  data_service,
  data_letus,
  recommed,
}) => {
  const per_person = tr?.per_person;
  const checkAll = tr?.checkAll;
  const find_your = tr?.find_your;
  const travel_services = tr?.travel_services;
  const mountain_text1 = tr?.mountain_text1;
  const mountain_text2 = tr?.mountain_text2;
  const mountain_link1 = tr?.mountain_link1;
  const mountain_link2 = tr?.mountain_link2;
  const what_our_guests_says = tr?.what_our_guests_says;
  const looking_for_something = tr?.looking_for_something;
  const looking_for_something_link_text = tr?.looking_for_something_link_text;
  const looking_for_something_long = tr?.looking_for_something_long;
  const top_destinations = tr?.top_destinations;

  return (
    <>
      <HomeSlider tr={tr} data_slayder={data_slayder} code={code} />
      <HomeDestination
        data_category={data_category}
        code={code}
        top_destinations={top_destinations}
        looking_for_something={looking_for_something}
        looking_for_something_link_text={looking_for_something_link_text}
        looking_for_something_long={looking_for_something_long}
      />
      <PackagesPage
        data_package={data_package}
        code={code}
        per_person={per_person}
        checkAll={checkAll}
        find_your={find_your}
      />
      <Choose
        img={`${process.env.NEXT_PUBLIC_PICTURE}/${data_why?.image2}`}
        data_why={data_why}
      />
      <HomeServices
        travel_services={travel_services}
        data_service={data_service}
      />
      <HomeMountain
        data_letus={data_letus}
        code={code}
        mountain_text1={mountain_text1}
        mountain_text2={mountain_text2}
        mountain_link1={mountain_link1}
        mountain_link2={mountain_link2}
      />
      <HomeGuests
        recommed={recommed}
        what_our_guests_says={what_our_guests_says}
      />
      <Connect
        code={code}
        follow_us_instagram={follow_us_instagram}
        advantages={advantages}
      />
    </>
  );
};

export default HomePage;
