import React from "react";

const InputFrom = ({
  myValue,
  idInp,
  type,
  handleItemChange,
  myName,
  placeholder,
  styleClass,
}) => {
  return (
    <>
      <input
        value={myValue}
        id={idInp}
        type={type}
        onChange={handleItemChange}
        name={myName}
        placeholder={placeholder}
        className={styleClass}
        lang="en-EN"
      />
    </>
  );
};

export default InputFrom;
