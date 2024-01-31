import React from "react";
import {RxCross1} from "react-icons/rx";
import {useGlobalContext} from "../context/Context";
import SideBarContent from "./SideBarContent";

function SideBar() {
  const {sideBar, setSideBar} = useGlobalContext();
  return (
    <>
      <div
        className={`w-full sm:w-[490px] h-screen bg-white duration-300 transition-all ${
          sideBar ? "translate-x-0" : "-translate-x-[500px]"
        }`}>
        <div
          className={`py-4 px-5 flex items-center justify-between  bg-[#1FA45B] `}>
          <h1 className="text-lg font-semibold text-white">Category</h1>
          <button onClick={() => setSideBar(!sideBar)}>
            <RxCross1 size={20} className="text-white" />
          </button>
        </div>
        {/* sidebar contents  */}
        <div className="">
          <SideBarContent />
        </div>
      </div>
    </>
  );
}

export default SideBar;
