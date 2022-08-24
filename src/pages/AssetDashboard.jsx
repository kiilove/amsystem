import React from "react";

import AllAssetsGraph from "../components/AllAssetsGraph";
import ArriveEndPoint from "../components/ArriveEndPoint";
import LicenseGraph from "../components/LicenseGraph";

const AssetDashboard = () => {
  return (
    <div id="Container" className="flex flex-col w-full box-border">
      <div className="flex h-96 w-full ">
        <LicenseGraph />
      </div>
      <div className="flex w-full flex-col lg:flex-row ">
        <div className="flex w-full lg:w-1/2 h-96 box-border">
          <AllAssetsGraph />
        </div>
        <div className="flex w-full lg:w-1/2  h-96 box-border">
          <ArriveEndPoint />
        </div>
      </div>
    </div>
  );
};

export default AssetDashboard;
