import React from "react";

import AllAssetsGraph from "../components/AllAssetsGraph";
import ArriveEndPoint from "../components/ArriveEndPoint";
import LicenseGraph from "../components/LicenseGraph";

const AssetDashboard = () => {
  return (
    <div id="Container" className="flex w-full space-10 flex-col">
      <div className="flex flex-auto w-full h-80">
        <LicenseGraph />
      </div>
      <div className="flex">
        <div className="flex flex-auto w-1/3 h-80 ">
          <AllAssetsGraph />
        </div>
        <div className="flex flex-auto w-1/3 box-border max-h-80">
          <ArriveEndPoint />
        </div>
      </div>
    </div>
  );
};

export default AssetDashboard;
