import React from "react";

const CustomCheckBox = ({
  id,
  name,
  htmlFor,
  className1,
  className2,
  type,
  label1Text,
  customkey,
  setData,
  mt = "",
}) => {
  const handleAcceptChange = (e) => {
    if (e.target.checked) {
      setData((prev) => ({
        ...prev,
        [customkey]: label1Text,
      }));
    } else {
      setData((prev) => ({
        ...prev,
        [customkey]: "",
      }));
    }
  };

  return (
    <div className={`${mt}`}>
      <div className="custom-checkbox-wrapper cursor-pointer">
        <input
          onChange={handleAcceptChange}
          type={type}
          name={name}
          id={id}
          className={`${className1} cursor-pointer`}
        />
        <label
          htmlFor={htmlFor}
          className={`${className2} cursor-pointer`}
        ></label>

        <label
          htmlFor={htmlFor}
          className="text-[--colorOrange] cursor-pointer pl-2"
        >
          {label1Text}
        </label>
      </div>
    </div>
  );
};

export default CustomCheckBox;
