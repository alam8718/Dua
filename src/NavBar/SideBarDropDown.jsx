import React from "react";

function SideBarDropDown({dropDown, subCategories}) {
  return (
    <>
      <div
        className={`${
          dropDown ? "block h-[445px]" : "hidden"
        } w-full  relative overflow-y-scroll `}>
        <hr className="w-[340px] fixed h-0 rotate-90 -left-32 top-[180px] border-t-2 border-green-600 border-dotted" />
        <ul className="z-10 list-none absolute left-[57px] top-5  flex flex-col gap-5 pb-5 ">
          {subCategories.map((list, index) => (
            <li
              key={index}
              className="pr-4 list-outside list-disc text-green-600 text-sm text-left font-semibold cursor-pointer ">
              <p className="ml-1.5 text-sm cursor-pointer font-semibold text-left text-black">
                {list.subcat_name_en}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default SideBarDropDown;
