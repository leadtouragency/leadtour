import React from "react";
import SingleGridTop from "./Componnets/SingleGridTop";
import SingleGridBottom from "./Componnets/SingleGridBottom";

const SinglePageGrid2 = ({ quetion1, quetion2 }) => {
  return (
    <div className="col-span-4">
      <SingleGridTop quetion1={quetion1} quetion2={quetion2} />
      <SingleGridBottom />
    </div>
  );
};

export default SinglePageGrid2;
