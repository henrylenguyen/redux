import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleSideBar } from "../../redux-toolkit/globalSlice";

const Toggle = () => {
  const { showSideBar } = useSelector((state) => state.global);
  console.log("showSideBar", showSideBar);
  const dispatch = useDispatch();
  const handleToggleSideBar = ()=>{
    dispatch(toggleSideBar(!showSideBar));
  }
  return (
    <div
      className="fixed right-5 top-5 w-[50px] h-[50px] rounded-full bg-black text-white text-center  flex items-center justify-center cursor-pointer"
      onClick={handleToggleSideBar}
    >
      <i className="fas fa-bars cursor-pointer"></i>
    </div>
  );
};

export default Toggle;
