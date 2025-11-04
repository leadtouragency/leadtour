import React from "react";

const SingleGridTop = ({ quetion1, quetion2 }) => {
  return (
    <div className="mb-4">
      <h2 className="text-[--plan] capitalize text-4xl 1xl:text-2xl lg:text-xl mb-3">{quetion1}</h2>
      <h3 className="text-[--bg-green-wp] text-4xl  1xl:text-2xl lg:text-xl  font-semibold capitalize ">
        {quetion2}
      </h3>
      
    </div>
  );
};

export default SingleGridTop;
