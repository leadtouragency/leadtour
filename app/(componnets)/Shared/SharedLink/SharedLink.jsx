import Link from "next/link";

const SharedLink = ({ btnText, hrefTo, code }) => {
  return (
    <>
      <Link
        className="test2 flex bg-[--plan] px-8 2xl:px-2 py-2 2xl:py-1 text-lg 2xl:text-[14px] text-[--colorWhite] rounded-lg font-medium hover:bg-opacity-90 transition-colors"
        href={`/${code}/${hrefTo}`}
      >
        {btnText}
      </Link>
    </>
  );
};

export default SharedLink;
