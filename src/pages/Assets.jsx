import React from "react";
import Tables from "../components/Tables";

const Assets = () => {
  const tableContent = {
    header: ["#", "관리번호", "모델명", "사용자", "위치"],
  };
  return (
    <div id="Container" className="flex w-full h-full space-10 flex-col p-4">
      <div className="flex flex-auto w-full h-full min-h-full bg-white rounded-md shadow-md p-5 flex-col">
        <div className="flex justify-start items-center w-full mb-5 ">
          <h1 className="text-sm font-semibold text-gray-700">전체자산</h1>
        </div>
        <div className="flex min-w-full">
          <Tables />
        </div>
      </div>
    </div>
  );
};

export default Assets;
