import React from "react";

const SahredSocials = ({ data }) => {
  return (
    <>
      <ul className="flex gap-4">
        {data?.map((cur, i) => (
          <li key={i} className="text-[--plan] text-xl">
            <a href={`${cur?.link}`} target="_blank">
              {cur?.icon}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default SahredSocials;
