import React, {useEffect, useState} from "react";
import {RxCross1} from "react-icons/rx";
import {IoSearchOutline} from "react-icons/io5";
import {HiBars3} from "react-icons/hi2";
import {useGlobalContext} from "../context/Context";
import SideBarContent from "./SideBarContent";
import DuaDetails from "./DuaDetails";
import LeftSideBar from "./LeftSideBar";
import {RiSettings2Fill} from "react-icons/ri";
import {IoIosArrowBack} from "react-icons/io";

import profileImage from "../images/muslim-icon-15.jpg";
import downIcon from "../images/down_icon.png";
import logo from "../images/logo.png";
import RightSideBar from "./RightSideBar";

function SideBar() {
  const {sideBar, setSideBar, categories, filterCategory, filterDua} =
    useGlobalContext();

  return (
    <>
      <div
        className={`z-10 max-lg:hidden fixed top-0 w-full sm:w-[490px] h-screen bg-white  duration-300 transition-all ${
          sideBar ? "translate-x-0" : "-translate-x-[600px]"
        }`}>
        <div
          className={`h-14 px-5 flex items-center justify-between  bg-[#1FA45B] `}>
          <h1 className="text-lg font-semibold text-white">Category</h1>
          <button onClick={() => setSideBar(!sideBar)}>
            <RxCross1 size={20} className="text-white" />
          </button>
        </div>
        {/* sidebar contents  */}
        <div className="h-[calc(100%-60px)] overflow-y-scroll overflow-x-hidden py-5">
          {categories.map((category, index) => (
            <div key={index} className="">
              <SideBarContent category={category} />
            </div>
          ))}
        </div>
      </div>

      {/* for large screen    */}
      <div className="w-full xl:w-[calc(100%-150px)] xl:fixed xl:right-0 h-[calc(100%-24px)] xl:h-screen flex flex-col gap-5 md:top-[130px] xl:top-6 relative ">
        {/*large screen  navbar part */}
        <div className="w-[calc(100%-30px)] h-14">
          <div className=" flex justify-between ">
            <div className="w-[calc(100%-260px)] flex items-center justify-between ">
              <p className="text-2xl">Duas Page</p>
              {/* input  */}
              <div>
                <div className="w-auto xl:w-[355px] h-[51px] flex items-center bg-gray-100 sm:bg-gray-200 md:bg-gray-100 xl:bg-white xl:border rounded-md group lg:border focus-within:border-green-600">
                  <input
                    type="text"
                    placeholder="Search by Dua Name"
                    className="w-full xl:bg-white rounded-md  py-3 px-4 outline-none  placeholder:text-sm  sm:bg-gray-200 md:bg-gray-100 "
                  />
                  <button className=" mr-1 px-4 py-2.5 bg-white xl:bg-gray-100 flex items-center justify-center rounded-md">
                    <IoSearchOutline size={22} className="text-gray-500" />
                  </button>
                </div>
              </div>
            </div>
            {/* profile  */}
            <div className="flex items-center justify-end pr-5">
              <div className="w-full flex justify-between items-center gap-6">
                <div className="w-[68px] h-[45px] flex items-center gap-[6px]">
                  {/* profile image  */}
                  <div className="w-[50px] h-[50px] rounded-full object-cover flex justify-center items-center cursor-pointer">
                    <img src={profileImage} className="w-full h-full" alt="" />
                  </div>
                  <button>
                    <img src={downIcon} alt="" className="w-[8px] h-[9px] " />
                  </button>
                </div>
                <button className="cursor-pointer max-xl:hidden">
                  <RiSettings2Fill size={22} className="text-green-600" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/*large screen middle part  */}
        <div className=" flex ">
          <div className="hidden mr-5 max-lg:block  w-[429px] h-[75vh] xl:h-[820px]  left-7 bg-white rounded-xl overflow-hidden">
            <div className="w-full h-14 bg-[#1FA45B] rounded-t-xl flex justify-center items-center">
              <p className="text-base font-semibold text-white ">Categories</p>
            </div>
            {/* searchbar  */}
            <div className="mt-4 px-3">
              <div className="w-auto lg:w-full h-12  gap-3  flex items-center bg-white rounded-md group ring-1 ring-black/20 shadow-sm focus-within:ring-2 focus-within:ring-green-600">
                <button className="pl-4">
                  <IoSearchOutline size={22} className="text-gray-500" />
                </button>
                <input
                  type="text"
                  placeholder="Search by Dua Name"
                  className="w-full py-2 bg-white  outline-none  placeholder:text-sm "
                />
              </div>
            </div>
            <div className="h-[calc(100vh-45vh)] xl:h-[calc(100vh-36vh)]  pt-4  rounded-b-md  ">
              <div className="h-full overflow-y-scroll overflow-x-hidden ">
                {categories.map((category, index) => (
                  <div key={index} className="">
                    <SideBarContent category={category} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Dua details  */}
          <div className="mr-2 w-full max-lg:w-[calc(100%-300px)] h-[calc(100vh-100px)] xl:h-screen  overflow-y-scroll pr-4 pb-28">
            {/* section title  */}
            <div className="max-lg:hidden mb-5 flex px-5 py-4 justify-start items-center rounded-xl text-[16px] leading-[25px] bg-white gap-x-2 font-medium">
              <button onClick={() => setSideBar(!sideBar)}>
                <HiBars3 size={24} />
              </button>
              {filterCategory !== undefined && (
                <p className="text-[#393939]">{filterCategory.cat_name_en}</p>
              )}
            </div>
            <div className=" mb-5 flex px-5 py-4 justify-start items-center rounded-xl text-[16px] leading-[25px] bg-white font-medium">
              <p className="text-[#1FA45B] mr-1">Section: </p>
              {filterCategory !== undefined && (
                <p className="text-[#393939]">{filterCategory.cat_name_en}</p>
              )}
            </div>
            {filterDua.map((item, index) => (
              <div key={index}>
                <DuaDetails item={item} />
              </div>
            ))}
          </div>

          {/* large screen right part */}
          <div className="hidden max-xl:block mr-10 rounded-3xl right-5 w-[330px] h-[830px]  bg-white">
            <RightSideBar />
          </div>
        </div>
      </div>
    </>
  );
}

export default SideBar;
