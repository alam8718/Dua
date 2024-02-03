import React, {useEffect, useRef, useState} from "react";
import {IoLanguageOutline} from "react-icons/io5";
import {HiOutlineRectangleStack} from "react-icons/hi2";
import {PiSquaresFour} from "react-icons/pi";
import {FaCircle} from "react-icons/fa6";

function RightSideBar() {
  const [mode, setMode] = useState(false);

  return (
    <>
      <div className="pt-9">
        <div className="text-xl text-center text-black">
          <h1 className="">Settings</h1>
          <div className="px-2">
            {/*  */}
            <div className="my-6  w-[289px] h-auto ">
              <div className=" bg-[#F7F8FA] py-2 rounded-xl relative flex items-center justify-start pl-4 w-full">
                <span className="w-[5px] h-[53px] absolute left-[1px] rounded-l-xl"></span>
                <div className="flex gap-10 items-center  text-[#868686]">
                  <div className="w-[38px] h-[38px] bg-[#E8F0F5] flex justify-center items-center rounded-full">
                    <span className="text-2xl">
                      <IoLanguageOutline />
                    </span>
                  </div>
                  <p className="text-sm font-medium leading-5">
                    Language Settings
                  </p>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="my-6  w-[289px] h-auto ">
              <div className=" bg-[#F7F8FA] py-2 rounded-xl relative flex items-center justify-start pl-4 w-full">
                <span className="w-[5px] h-[53px] absolute left-[1px] rounded-l-xl"></span>
                <div className="flex gap-10 items-center  text-[#868686]">
                  <div className="w-[38px] h-[38px] bg-[#E8F0F5] flex justify-center items-center rounded-full">
                    <span className="text-2xl">
                      <HiOutlineRectangleStack />
                    </span>
                  </div>
                  <p className="text-sm font-medium leading-5">
                    General Settings
                  </p>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="my-6  w-[289px] h-auto ">
              <div className=" bg-[#F7F8FA] py-2 rounded-xl relative flex items-center justify-start pl-4 w-full">
                <span className="w-[5px] h-[53px] absolute left-[1px] rounded-l-xl"></span>
                <div className="flex gap-10 items-center  text-[#868686]">
                  <div className="w-[38px] h-[38px] bg-[#E8F0F5] flex justify-center items-center rounded-full">
                    <span className="text-2xl">
                      <PiSquaresFour />
                    </span>
                  </div>
                  <p className="text-sm font-medium leading-5">Font Settings</p>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="my-6 w-[289px] h-[134px] border shadow-sm rounded-xl relative">
              <div className=" bg-[#F7F8FA] py-2 rounded-xl relative flex items-center justify-start pl-4 w-full ">
                <span
                  className={`w-[5px] h-[53px] absolute left-[1px] rounded-l-xl bg-[#1FA45B]`}></span>
                <div className="flex gap-10 items-center  text-[#868686]">
                  <div className="w-[38px] h-[38px] bg-[#E8F0F5] flex justify-center items-center rounded-full">
                    <span className="text-2xl">
                      <PiSquaresFour />
                    </span>
                  </div>
                  <p className="text-sm font-medium leading-5">
                    Appearance Settings
                  </p>
                </div>
              </div>
              {/* inner part  */}
              <div className="mt-7 mb-4 flex items-center justify-between px-4">
                <h1 className=" text-[16px]">Night Mode</h1>
                <span
                  onClick={() => setMode(!mode)}
                  className=" relative h-[16px] w-[30px]  bg-[#D1D5DB] rounded-full">
                  <button
                    className={`absolute -top-1 text-[#A4A4A4] ${
                      mode ? "-left-2 " : "-right-2"
                    } `}>
                    <FaCircle size={22} />
                  </button>
                </span>
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
