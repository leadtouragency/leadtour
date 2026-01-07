import PackageTabsClient from "./PackageComps/PackageTabsClient";

const PackagesPage = async ({
  data_package,
  code,
  per_person,
  checkAll,
  find_your,
}) => {
  return (
    <section className="px-8 py-8 mt-10 1xl:mt-6 lg:mt-4 lg:px-2">
      <h3 className="text-center text-[--colorOrange] text-4xl lg:text-2xl capitalize mb-10 lg:mb-4">
        {find_your}
      </h3>
      <PackageTabsClient
        data_package={data_package}
        code={code}
        per_person={per_person}
        checkAll={checkAll}
      />
    </section>
  );
};

export default PackagesPage;
