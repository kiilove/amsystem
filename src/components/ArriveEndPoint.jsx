import React from "react";
import Tables from "./Tables";

const ArriveEndPoint = () => {
  return (
    <div className="Container flex w-full h-full">
      <div className="flex w-full p-4 flex-col">
        <div className="flex h-full w-full justify-center items-center bg-white rounded-md shadow-md p-5 box-border flex-col">
          <div className="flex justify-start items-center w-full mb-5 ">
            <h1 className="text-sm font-semibold text-gray-700">
              보증만료 1개월전
            </h1>
          </div>
          <div className="flex w-full">
            <Tables />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArriveEndPoint;
