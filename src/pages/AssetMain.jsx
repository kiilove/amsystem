import React from "react";
import Menus from "../components/Menus";
import Top from "../components/Top";
import AssetDashboard from "./AssetDashboard";
import AssetIncome from "./AssetIncome";

const AssetMain = (props) => {
  return (
    <div
      id="mainContainer"
      className="flex w-full min-h-screen justify-center align-center items-center bg-gradient-to-r from-cyan-500 to-blue-500"
    >
      <div
        id="mainCanvas"
        className="flex w-4/6 bg-white rounded-lg shadow-lg bg-gray-100"
        style={{ minHeight: "800px", height: "80%" }}
      >
        <div id="wrapper" className="flex flex-col p-10 box-border w-full">
          <div id="topContainer" className="flex w-full ">
            <Top />
          </div>
          <div id="contentContainer" className="flex w-full space-x-10">
            <div className="flex w-44">
              <Menus />
            </div>
            <div className="flex w-full h-full">{props.component}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssetMain;
