import HomePage from "@/app/(componnets)/(pages)/Home/HomePage";
import Footer from "@/app/(componnets)/Layout/Footer/Footer";
import Header from "@/app/(componnets)/Layout/Header/Header";
import {
  fetchData,
  fetchData2,
  fetchTranslations,
} from "@/app/(fetchData.)/fetchData";

const getData = async (params) => {
  const main = await fetchData(params?.code, "main_page");
  const secret = await fetchData2("home_sections");
  const tr = await fetchTranslations(params?.code);
  return { main, tr, secret };
};

export async function generateMetadata({ params }) {
  const data = await fetchData(params?.code, "settings");
  const tr = await fetchTranslations(params?.code);
  const baseUrl = "https://leadtouragency.com/";
  const pictureBaseUrl = process.env.NEXT_PUBLIC_PICTURE;
  const logoUrl = `${pictureBaseUrl}/${data?.settings?.logo}`;
  const faviconUrl = `${pictureBaseUrl}/${data?.settings?.favicon}`;
  const home_page = tr?.home_page;
  return {
    title: `${data?.settings?.title} - ${home_page}`,
    description: data?.settings?.description,
    icons: {
      icon: faviconUrl, // Dinamik favicon URL-i
      apple: faviconUrl, // Əgər apple-touch-icon da eynidirsə
    },
    openGraph: {
      title: data?.settings?.title,
      description: data?.settings?.meta_description,
      url: baseUrl,
      siteName: "leadtouragency.com",
      images: [
        {
          url: logoUrl, // Dinamik logo URL-i
          secure_url: logoUrl, // Dinamik logo URL-i
          width: 600,
          height: 600,
        },
      ],
    },
  };
}

export default async function page({ params }) {
  const { main, tr, secret } = await getData(params);
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
        header_menu_data={main?.header_menu}
        header_activity={main?.header_activity}
      />
      <HomePage
        code={params?.code}
        data_slayder={main?.slayder}
        data_category={main?.category}
        data_package={main?.package}
        data_why={main?.why}
        advantages={main?.advantages}
        recommed={main?.recommed}
        follow_us_instagram={follow_us_instagram}
        data_service={main?.service}
        data_letus={main?.letUs}
        secret={secret?.sections}
        stils={secret?.stils}
        tr={tr}
      />
      <Footer />
    </>
  );
}
