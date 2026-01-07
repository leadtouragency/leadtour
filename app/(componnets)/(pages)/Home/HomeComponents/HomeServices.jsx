import "../../../style/bootstrap.css";
import SharedTravelServices from "@/app/(componnets)/Shared/SharedTravelServices/SharedTravelServices";

const HomeServices = ({ data_service, travel_services }) => {
  return (
    <section className="mt-8 lg:mt-6 px-8 py-8 lg:py-4 lg:px-4">
      <div className="flex items-center justify-center">
        <h2 className="text-[--colorOrange] text-5xl mb-8 lg:text-3xl">
          {travel_services}
        </h2>
      </div>

      <SharedTravelServices data={data_service} />
    </section>
  );
};

export default HomeServices;
