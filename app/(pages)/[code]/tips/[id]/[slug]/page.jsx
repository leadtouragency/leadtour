import BlogSingle from "@/app/(componnets)/(pages)/BlogSingle/BlogSingle";
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
    `tips/${params?.id}/${params?.slug}`
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
  const looking_for_something_long = tr?.looking_for_something_long;
  const plan_your_visit_now = tr?.plan_your_visit_now;
  const places_to_see = tr?.places_to_see;
  const looking_for_something = tr?.looking_for_something;
  const looking_for_something_link_text = tr?.looking_for_something_link_text;
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
      <BlogSingle
        code={params?.code}
        secret={secret?.sections}
        advantages={data?.advantages}
        follow_us_instagram={follow_us_instagram}
        data={data?.blog}
        plan_your_visit_now={plan_your_visit_now}
        places_to_see={places_to_see}
        looking_for_something={looking_for_something}
        looking_for_something_long={looking_for_something_long}
        looking_for_something_link_text={looking_for_something_link_text}
      />
      <Footer />
    </>
  );
}
