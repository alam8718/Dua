import React from "react";

import sideBarLogo from "../images/sidebarLogo.png";
import SideBarDropDown from "./SideBarDropDown";
import {useGlobalContext} from "../context/Context";

function SideBarContent({category}) {
  const {setSubCategory, filterSubCategory, setDropDown, dropDown} =
    useGlobalContext();

  const {cat_name_en, no_of_subcat, no_of_dua, cat_id, cat_img} = category;
  return (
    <>
      <div
        className={`my-3 pr-3 lg:pr-0  w-[490px] max-lg:w-full max-lg:my-4 ${
          dropDown === cat_id ? "h-auto" : "h-[80px]"
        } `}>
        <div
          className="w-auto h-[80px] px-2"
          onClick={() => {
            setDropDown(cat_id);
            setSubCategory(cat_id);
          }}>
          <div
            className={`w-full  h-full rounded-xl flex items-center hover:bg-[#E8F0F5] ${
              dropDown === cat_id && "bg-[#E8F0F5]"
            }`}>
            <div className="w-[calc(100%-20px)] lg:w-full flex justify-between items-center px-3 lg:px-0">
              <div className="flex items-center gap-2 ">
                <div className="rounded-xl pl-2">
                  <img
                    src={cat_img}
                    alt="sidebar logo"
                    className="w-[55px] h-[55px] rounded-2xl"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <p className="font-semibold ">{cat_name_en}</p>
                  <p className="text-xs text-gray-500/90">
                    Subcategory : {no_of_subcat}
                  </p>
                </div>
              </div>
              <div className="h-[50px]">
                <div className="h-full flex flex-col items-center justify-center px-3  border-l-2">
                  <p>{no_of_dua}</p>
                  <p className="text-xs text-gray-500/90">Duas</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`w-[calc(100%-80px)]  h-[calc(100%-100px)] transition-all  duration-300 overflow-hidden ${
            dropDown ? " translate-y-1" : " translate-y-0"
          } `}>
          <div className="">
            <SideBarDropDown
              dropDownList={filterSubCategory}
              dropDown={dropDown}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default SideBarContent;
