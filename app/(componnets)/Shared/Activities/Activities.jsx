import SharedActivitesGrids from "../SharedActivitesGrids/SharedActivitesGrids";

const Activities = ({
  data_activity,
  per_person,
  checkAll,
  code,
  top_activities,
}) => {
  return (
    <section className="p-8 2xl:mt-20 lg:p-2">
      <h3 className="text-center text-5xl 2xl:text-4xl lg:text-3xl text-[--colorOrange] ">
        {top_activities}
      </h3>
      <div>
        <div className="grid gap-6 grid-cols-12  mt-6 lg:mt-2 lg:px-4 md:px-0">
          <SharedActivitesGrids
            data_activity={data_activity}
            per_person={per_person}
            checkAll={checkAll}
            code={code}
          />
        </div>
      </div>
    </section>
  );
};

export default Activities;
