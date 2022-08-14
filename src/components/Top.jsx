import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faGear, faBell } from "@fortawesome/free-solid-svg-icons";

const Top = () => {
  return (
    <div id="Container" className="flex gap-4 w-full ">
      <div
        id="logoBox"
        className="flex w-44 h-12  align-middle items-center justify-center"
      >
        <h1 className="font-bold text-lg">AM System</h1>
      </div>
      <div
        id="locationBox"
        className="flex align-middle items-center justify-start flex-1 "
      >
        <h1 className="font-thin text-sm text-gray-600 text-left">
          현재위치 > <span className="font-bold text-gray-700">대쉬보드</span>
        </h1>
      </div>
      <div className="flex flex-1">
        <div className="relative text-gray-600 focus-within:text-gray-400 w-full">
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <button
              type="submit"
              className="p-1 focus:outline-none focus:shadow-outline "
            >
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                class="w-6 h-6"
              >
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </button>
          </span>
          <input
            type="text"
            class="pl-8.75 text-sm focus:shadow-soft-primary-outline ease-soft  leading-5.6 relative -ml-px block min-w-0 flex-auto rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 pr-3 text-gray-700 transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none focus:transition-shadow w-full"
            placeholder="검색"
          />
        </div>
      </div>
      <div className="flex flex-1 justify-end items-center space-x-5">
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
  );
};

export default Top;
