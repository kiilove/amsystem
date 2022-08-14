import React from "react";
import { Link } from "react-router-dom";

const MenuList = [
  { id: 1, title: "대쉬보드", link: "/" },
  { id: 2, title: "자산입고", link: "/assetinput" },
];
const Menus = () => {
  return (
    <div className="flex flex-col h-full  w-full mt-5">
      <div
        id="menu"
        className="flex w-full p-3 justify-start items-center flex-col space-y-4"
      >
        {MenuList.map((item, idx) => (
          <div
            id={idx}
            className="flex w-full w-36  items-center justify-start h-11 p-5 hover:cursor-pointer hover:bg-white hover:shadow hover:rounded hover:font-semibold"
          >
            <Link to={item.link} style={{ textDecoder: "none" }}>
              <span className="flex font-base text-base">{item.title}</span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menus;
