const SharedWhatsApp = ({ text, btnText, btnLink }) => {
  return (
    <>
      <div
        style={{ backgroundImage: `url(/fakedata/wp/wp.png)` }}
        className="h-60 !bg-[100%_100%] !bg-no-repeat  overflow-hidden relative sharedWp"
      >
        <div className="h-full w-full flex flex-col gap-4 px-6 py-10 relative z-10">
          <h3 className="text-4xl text-[--colorBlue] w-72 lg:w-full 1xl:text-3xl lg:text-2xl capitalize ">
            {text}
          </h3>
          <a
            target="_blank"
            href={`tel:${btnLink}`}
            className="bg-[--bg-green-wp] w-max px-6 py-2 text-xl mt-4 font-semibold text-[--colorWhite] capitalize"
          >
            {btnText}
          </a>
        </div>
      </div>
    </>
  );
};

export default SharedWhatsApp;
