import React from "react";

import sideBarLogo from "../images/sidebarLogo.png";
import {useGlobalContext} from "../context/Context";
import SideBarDropDown from "./SideBarDropDown";

function SideBarContent() {
  const {dropDown, setDropDown} = useGlobalContext();
  return (
    <>
      <div
        className={`my-3 w-[500px]  ${dropDown ? "h-[445px]" : "h-[80px]"} `}>
        <div
          className="w-auto h-[80px] px-2  "
          onClick={() => setDropDown(!dropDown)}>
          <div className="w-full h-full rounded-xl flex items-center bg-[#E8F0F5]">
            <div className="w-full flex justify-between items-center px-3">
              <div className="flex items-center gap-2 ">
                <div className="rounded-xl">
                  <img src={sideBarLogo} alt="" className="w-[60px] h-[60px]" />
                </div>
                <div className="flex flex-col gap-1">
                  <p className="font-semibold ">Introduction to Dua</p>
                  <p className="text-xs text-gray-500/90">Subcategory : </p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center">
                <p>15</p>
                <p className="text-xs text-gray-500/90">Duas</p>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`w-full h-[calc(100%-80px)] transition-all  duration-300 overflow-hidden ${
            dropDown ? " translate-y-1" : " translate-y-0"
          } `}>
          <SideBarDropDown />
        </div>
      </div>
    </>
  );
}

export default SideBarContent;
