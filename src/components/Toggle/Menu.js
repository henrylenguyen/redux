import React from "react";
import { useSelector } from "react-redux";
const links = ["Dashboard", "Ecommerce", "Supper Market", "Long vision"];
const Menu = () => {
  // state.name
  const { showSideBar } = useSelector((state) => state.global);
  console.log("globalOptions", showSideBar);
  return (
    <div
      className={`menu-list fixed top-5 left-5 bottom-5 w-[300px] shadow text-base font-semibold p-5 transition-all ${
        showSideBar ? "-translate-x-[200%]" : ""
      }`}
    >
      {links.map((item, index) => (
        <div key={index} className="p-3 cursor-pointer hover:bg-gray-100">
          {item}
        </div>
      ))}
    </div>
  );
};

export default Menu;
