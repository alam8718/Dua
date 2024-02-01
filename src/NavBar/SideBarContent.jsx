import React, {useState} from "react";

import sideBarLogo from "../images/sidebarLogo.png";
import SideBarDropDown from "./SideBarDropDown";
import {useGlobalContext} from "../context/Context";

function SideBarContent({category}) {
  const {subCategories,setCategoryId} = useGlobalContext();
  const [dropDown, setDropDown] = useState(false);
  const {cat_name_en, no_of_subcat, no_of_dua, cat_id} = category;
  return (
    <>
      <div
        className={`my-3  w-[490px] max-lg:w-full max-lg:my-4 ${
          dropDown ? "h-[445px]" : "h-[80px]"
        } `}>
        <div
          className="w-auto h-[80px] px-2  "
          onClick={() =>{
            setDropDown(!dropDown)
            setCategoryId(cat_id)
          } }>
          <div
            className={`w-full h-full rounded-xl flex items-center hover:bg-[#E8F0F5] ${
              dropDown && "bg-[#E8F0F5]"
            }`}>
            <div className="w-full flex justify-between items-center px-3">
              <div className="flex items-center gap-2 ">
                <div className="rounded-xl">
                  <img src={sideBarLogo} alt="" className="w-[60px] h-[60px]" />
                </div>
                <div className="flex flex-col gap-1">
                  <p className="font-semibold ">{cat_name_en}</p>
                  <p className="text-xs text-gray-500/90">
                    Subcategory : {no_of_subcat}
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center">
                <p>{no_of_dua}</p>
                <p className="text-xs text-gray-500/90">Duas</p>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`w-full h-[calc(100%-80px)] transition-all  duration-300 overflow-hidden ${
            dropDown ? " translate-y-1" : " translate-y-0"
          } `}>
          <div>
            <SideBarDropDown
              subCategories={subCategories}
              dropDown={dropDown}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default SideBarContent;
