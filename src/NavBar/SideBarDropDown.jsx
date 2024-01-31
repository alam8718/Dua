import React from "react";
import {useGlobalContext} from "../context/Context";

function SideBarDropDown() {
  const {dropDown} = useGlobalContext();
  return (
    <>
      <div
        className={`${dropDown ? "block" : "hidden"} w-full h-full relative `}>
        <hr className="w-[340px] h-0 rotate-90  absolute -left-32 top-[180px] border-t-2 border-green-600 border-dotted" />
        <ul className=" list-none absolute left-[57px] top-5 ">
          <li className=" list-outside list-disc text-green-600 text-sm font-semibold">
            <li className="ml-1.5 list-none text-black">What is Dua</li>
          </li>
        </ul>
      </div>
    </>
  );
}

export default SideBarDropDown;
