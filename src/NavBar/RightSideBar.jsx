import React from "react";
import {IoLanguageOutline} from "react-icons/io5";

function RightSideBar() {
  return (
    <>
      <div className="pt-9">
        <div className="text-xl text-center text-black">
          <h1 className="">Settings</h1>
          <div className="my-6 px-2 w-[289px] h-auto ">
            <div className=" bg-[#F7F8FA] py-2 rounded-xl flex items-center justify-around w-full">
              <div className="flex gap-10 items-center justify-center text-[#868686]">
                <span className="w-[38px] h-[38px] bg-[#E8F0F5] flex justify-center items-center rounded-full">
                  <IoLanguageOutline className="w-[24px] h-[24px] " />
                </span>
                <p className="text-sm font-medium leading-5">
                  Language Settings
                </p>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
}

export default RightSideBar;
