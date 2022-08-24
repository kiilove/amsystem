import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faGear, faBell } from "@fortawesome/free-solid-svg-icons";

const Top = () => {
  return (
    <div id="webContainer" className="gap-4 w-full hidden md:flex">
      <div className="wrapper flex w-full">
        <div id="leftContainer" className="flex w-1/3 h-12 justify-start p-5">
          <div id="logoWrapper" className="flex w-44">
            <h1 className="font-bold text-lg">AM System</h1>
          </div>
        </div>
        <div
          id="middleContainer"
          className="text-gray-600 focus-within:text-gray-400 w-1/3 p-5"
        >
          <div id="searchWrapper" className="flex w-full">
            <input
              type="text"
              class="pl-8.75 text-sm focus:shadow-soft-primary-outline ease-soft leading-5.6 relative -ml-px block min-w-0 flex-auto rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 pr-3 text-gray-700 transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none focus:transition-shadow w-64"
              placeholder="검색"
            />
          </div>
        </div>
        <div id="rightContainer" className="flex w-1/3 p-5">
          <div id="iconWrapper" className="flex w-full justify-end space-x-6">
            <div className="flex justify-center, items-center">
              <FontAwesomeIcon
                icon={faUser}
                className="text-gray-500 text-md hover:cursor-pointer"
              />
              <span className="flex text-gray-500 text-base font-bold ml-3">
                로그인
              </span>
            </div>
            <div className="flex justify-center, items-center">
              <FontAwesomeIcon
                icon={faGear}
                className="text-gray-500 text-md hover:cursor-pointer"
              />
            </div>
            <div className="flex justify-center, items-center">
              <FontAwesomeIcon
                icon={faBell}
                className="text-gray-500 text-md hover:cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Top;
