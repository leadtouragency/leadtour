import AboutPage from "@/app/(componnets)/(pages)/About/AboutPage";
import Footer from "@/app/(componnets)/Layout/Footer/Footer";
import Header from "@/app/(componnets)/Layout/Header/Header";
import { fetchData, fetchTranslations } from "@/app/(fetchData.)/fetchData";

const getData = async (params) => {
  const about = await fetchData(params?.code, "about");
  const tr = await fetchTranslations(params?.code);
  return { about, tr };
};

export default async function page({ params }) {
  const { about, tr } = await getData(params);
  const head_title = tr?.more_from_lead_tour;
  const meet_our_team = tr?.meet_our_team;
  const meet_our_team_long = tr?.meet_our_team_long;
  const header_1 = tr?.header_1;
  const header_2 = tr?.header_2;
  const header_3 = tr?.header_3;
  const header_4 = tr?.header_4;
  const header_5 = tr?.header_5;
  const follow_us_instagram = tr?.follow_us_instagram;
  return (
    <>
      <Header
        code={params?.code}
        header_1={header_1}
        header_2={header_2}
        header_3={header_3}
        header_4={header_4}
        header_5={header_5}
        header_menu_data={about?.header_menu}
        header_activity={about?.header_activity}
      />
      <AboutPage
        head_title={head_title}
        code={params?.code}
        why_data={about?.why}
        data_process={about?.process}
        data_about={about?.about}
        data_team={about?.team}
        data_mission={about?.mission}
        meet_our_team={meet_our_team}
        meet_our_team_long={meet_our_team_long}
        advantages={about?.advantages}
        follow_us_instagram={follow_us_instagram}
        video_data={about?.video}
      />
      <Footer />
    </>
  );
}
