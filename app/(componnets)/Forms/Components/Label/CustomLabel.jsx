const CustomLabel = ({
  htmlFor,
  h3Text,
  myValue,
  idInp,
  type,
  handleChange,
  myName,
  placeholder = "",
}) => {
  return (
    <>
      <label htmlFor={`${htmlFor}`}>
        <h3 className="text-[--colorBlue] mb-2">{h3Text}</h3>
        <div className="flex items-center bg-[--colorF9] border border-[--plan]  rounded-[5px] overflow-hidden mb-3">
          <input
            value={myValue}
            onChange={handleChange}
            type={type}
            id={idInp}
            name={myName}
            placeholder={placeholder}
            className={
              "bg-[--colorF9] w-full border-none outline-none pl-2 pr-2 py-3 text-[--colorDark]"
            }
          />
        </div>
      </label>
    </>
  );
};

export default CustomLabel;
