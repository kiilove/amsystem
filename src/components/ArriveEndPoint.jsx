import React from "react";
import Tables from "./Tables";

const ArriveEndPoint = () => {
  return (
    <div id="Container" className="flex w-full h-full container">
      <div className="flex w-full p-4 flex-col container">
        <div className="flex h-full w-full justify-center items-center bg-white rounded-md shadow-md p-5 box-border flex-col container">
          <div className="flex justify-start items-center w-full mb-5">
            <h1 className="text-sm font-semibold text-gray-700">
              소프트웨어 현황
            </h1>
          </div>
          <div className="flex">
            <Tables />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArriveEndPoint;
