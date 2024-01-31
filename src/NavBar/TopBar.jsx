import React from "react";

import {IoSearchOutline} from "react-icons/io5";
import {RiSettings2Fill} from "react-icons/ri";
import {IoIosArrowBack} from "react-icons/io";

import profileImage from "../images/muslim-icon-15.jpg";
import downIcon from "../images/down_icon.png";
import logo from "../images/logo.png";

function TopBar() {
  return (
    <>
      <div className=" bg-white hidden md:block xl:hidden ">
        <div className=" flex justify-between items-center shadow-sm  py-6 mx-4 ">
          <div className="text-lg sm:text-xl xl:text-2xl font-medium xl:font-normal flex items-center gap-4">
            <span className=" overflow-hidden ">
              <img src={logo} alt="" className="w-[50px] h-[50px] rounded-md" />
            </span>
            Dua & Ruqyah
          </div>
          <div className="flex  items-center justify-around gap-5">
            <div className="w-auto lg:w-[371px] h-[51px] flex items-center bg-gray-100 sm:bg-gray-200 md:bg-gray-100 xl:bg-white xl:border rounded-md group lg:border focus-within:border-green-600">
              <input
                type="text"
                placeholder="Search by Dua Name"
                className="w-full xl:bg-white rounded-md  py-3 px-4 outline-none  placeholder:text-sm  sm:bg-gray-200 md:bg-gray-100 "
              />
              <button className=" mr-1 px-4 py-2.5 bg-white xl:bg-gray-100 flex items-center justify-center rounded-md">
                <IoSearchOutline size={22} className="text-gray-500" />
              </button>
            </div>
            <button className="cursor-pointer">
              <RiSettings2Fill size={22} className="text-green-600" />
            </button>
            <div className="w-[68px] h-[45px] flex items-center gap-[6px]">
              {/* profile image  */}
              <div className="w-[55px] h-[55px] rounded-full object-cover flex justify-center items-center cursor-pointer">
                <img src={profileImage} className="w-full h-full" alt="" />
              </div>
              <button>
                <img src={downIcon} alt="" className="w-[8px] h-[9px] " />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="md:hidden flex justify-between mx-4 py-4">
        <div className="text-lg flex items-center gap-2  ">
          <span>
            <IoIosArrowBack size={22} />
          </span>
          Dua's Page
        </div>
        <button className="cursor-pointer">
          <RiSettings2Fill size={22} className="text-green-600" />
        </button>
      </div>
    </>
  );
}

export default TopBar;
