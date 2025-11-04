const SharedBtn = ({ bgColor, coloWhite, icon, text }) => {
  return (
    <>
      <h3
        style={{ background: bgColor }}
        className={` px-8 py-2 lg:px-4 text-[--colorWhite] flex lg:text-sm items-center gap-3 rounded capitalize`}
      >
        <span className={`text-[--${coloWhite}] `}>{icon}</span>
        {text}
      </h3>
    </>
  );
};

export default SharedBtn;
