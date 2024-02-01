import React, {useState} from "react";
import {RxCross1} from "react-icons/rx";
import {IoSearchOutline} from "react-icons/io5";

import {useGlobalContext} from "../context/Context";
import SideBarContent from "./SideBarContent";
import DuaDetails from "./DuaDetails";

function SideBar() {
  const {sideBar, setSideBar, categories, filterCategory, setCategoryId} =
    useGlobalContext();

  return (
    <>
      <div
        className={`max-lg:hidden fixed top-0 w-full sm:w-[490px] h-screen bg-white  duration-300 transition-all ${
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
      {/* for large screen sidebar  */}
      <div className="w-full h-[calc(100%-24px)] fixed top-[130px] ">
        {/* sidebar  */}
        <div className="hidden max-lg:block  w-[350px] h-[75vh] xl:h-[837px] fixed  left-7 bg-white rounded-2xl ">
          <div className="w-full h-14 bg-[#1FA45B] rounded-t-2xl flex justify-center items-center">
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
          <div className="h-[calc(100vh-45vh)] pt-4 rounded-b-md  ">
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
        <div className="fixed w-[calc(100%-400px)] h-[calc(100vh-100px)] right-0 overflow-y-scroll">
          {/* section title  */}
          <div className="mb-5 flex px-5 py-4 justify-start items-center rounded-xl text-[16px] leading-[25px] bg-white font-medium">
            <p className="text-[#1FA45B] mr-1">Section: </p>
            <p className="text-[#393939]">
              The servent is dependent on his lord
            </p>
          </div>
          {filterCategory.map((item) => (
            <div key={item.id}>
              <DuaDetails item={item} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default SideBar;
