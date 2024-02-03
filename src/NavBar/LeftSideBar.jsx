import React from "react";
import {HiOutlineHome} from "react-icons/hi2";
import {PiSquaresFour} from "react-icons/pi";
import {HiOutlineLightBulb} from "react-icons/hi2";
import {BsBookmark} from "react-icons/bs";
import {RiMedicineBottleLine} from "react-icons/ri";
import {PiChatsTeardropThin} from "react-icons/pi";
import {HiOutlineBookOpen} from "react-icons/hi";

import donate from "../images/donate.png";
import logo from "../images/logo.png";

function LeftSideBar() {
  return (
    <>
      <div className="fixed top-6 max-xl:top-10">
        <div className="hidden w-[100px] h-[94vh] left-6 max-xl:left-8 fixed xl:flex  flex-col gap-y-5 overflow-hidden bg-white rounded-3xl items-center">
          <div className="pt-7 mb-14 ">
            <img src={logo} alt="" className="w-[50px] h-[50px] rounded-xl" />
          </div>
          <div className="flex flex-col items-center gap-6 mb-8">
            <button className="w-10 h-10 p-1.5 text-[#8B8C8C] bg-[#E8F0F5] rounded-full flex items-center justify-center">
              <HiOutlineHome className="w-full h-full" />
            </button>
            <button className="w-10 h-10 p-1.5 text-[#8B8C8C] bg-[#E8F0F5] rounded-full flex items-center justify-center">
              <PiSquaresFour className="w-full h-full" />
            </button>
            <button className="w-10 h-10 p-[9px] font-bold text-[#8B8C8C] bg-[#E8F0F5] rounded-full flex items-center justify-center">
              <HiOutlineLightBulb className="w-full h-full" />
            </button>
            <button className="w-10 h-10 p-[9px] font-bold text-[#8B8C8C] bg-[#E8F0F5] rounded-full flex items-center justify-center">
              <BsBookmark size={23} className="" />
            </button>
            <button className="w-10 h-10 p-[9px] font-bold text-[#8B8C8C] bg-[#E8F0F5] rounded-full flex items-center justify-center">
              <RiMedicineBottleLine className="w-full h-full" />
            </button>
            <button className="w-10 h-10 p-[9px] font-bold text-[#8B8C8C] bg-[#E8F0F5] rounded-full flex items-center justify-center">
              <PiChatsTeardropThin className="w-full h-full" />
            </button>
            <button className="w-10 h-10 p-[9px] font-bold text-[#8B8C8C] bg-[#E8F0F5] rounded-full flex items-center justify-center">
              <HiOutlineBookOpen className="w-full h-full" />
            </button>
          </div>
          <div className="pt-7 max-xl:pt-20 ">
            <img src={donate} alt="" className="w-[53px] h-[53px] rounded-xl" />
          </div>
        </div>
      </div>
    </>
  );
}

export default LeftSideBar;
