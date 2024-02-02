import React from "react";
import {HiOutlineHome} from "react-icons/hi2";
import {PiSquaresFour} from "react-icons/pi";
import {HiOutlineLightBulb} from "react-icons/hi2";
import {BsBookmark} from "react-icons/bs";
import {CgProfile} from "react-icons/cg";
import {RiMedicineBottleLine} from "react-icons/ri";

function BottomBar() {
  return (
    <>
      {/*  shadow div  */}
      <div className="fixed w-screen p-6 rounded-b-[30px] md:rounded-b-[3rem] bottom-0 h-16 md:h-[85px] shadow-md transform rotate-180 xl:hidden "></div>
      {/* main div  */}
      <div className="fixed w-screen p-6 rounded-t-[30px] md:rounded-t-[3rem] bottom-0 h-16 md:h-[85px] bg-white xl:hidden ">
        <div className="w-full h-full flex justify-between md:px-4  items-center text-2xl md:text-[28px] text-gray-500/90  ">
          <p className="cursor-pointer md:w-10 md:h-10 md:rounded-full bg-gray-100 flex justify-center items-center ">
            <HiOutlineHome className="" />
          </p>
          <p className="cursor-pointer md:w-10 md:h-10 md:rounded-full bg-gray-100 flex justify-center items-center ">
            <PiSquaresFour />
          </p>
          <p className="cursor-pointer md:w-10 md:h-10 md:rounded-full bg-gray-100 flex justify-center items-center ">
            <HiOutlineLightBulb />
          </p>
          <p className="cursor-pointer md:w-10 md:h-10 md:rounded-full bg-gray-100 flex justify-center items-center ">
            <BsBookmark />
          </p>
          <p className="md:hidden cursor-pointer md:w-10 md:h-10 md:rounded-full bg-gray-100 flex justify-center items-center ">
            <CgProfile />
          </p>
          <p className="hidden cursor-pointer md:w-10 md:h-10 md:rounded-full bg-gray-100 md:flex justify-center items-center ">
            <RiMedicineBottleLine />
          </p>
        </div>
      </div>
    </>
  );
}

export default BottomBar;
