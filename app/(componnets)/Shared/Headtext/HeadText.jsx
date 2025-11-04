import React from "react";

const HeadText = ({ text, textColor, customClass = "" }) => {
  return (
    <>
      <div
        className={`text-[--${textColor}]  capitalize  ${customClass}`}
      >
        {text}
      </div>
    </>
  );
};

export default HeadText;
