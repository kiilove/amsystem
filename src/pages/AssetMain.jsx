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
        className="flex flex-col sm:w-full md:w-full lg:w-11/12 xl:w-4/6 rounded-lg shadow-lg bg-gray-100 box-border flex-wrap"
        style={{ minHeight: "800px", height: "80%" }}
      >
        <div id="topContainer" className="flex">
          <Top />
        </div>
        <div id="webMiddleContainer" className="hidden md:flex">
          <div className="flex w-1/5">
            <Menus />
          </div>
          <div className="flex w-4/5 sm:w-full md:w-4/5">{props.component}</div>
        </div>
        <div id="webMobileContainer" className="flex w-full sm:flex md:hidden">
          <div className="flex w-full">{props.component}</div>
        </div>
      </div>
    </div>
  );
};

export default AssetMain;
