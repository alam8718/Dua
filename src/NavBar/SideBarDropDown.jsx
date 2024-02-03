import React from "react";

function SideBarDropDown({dropDown, dropDownList}) {
  const calculatedHeight = `${dropDownList.length * 46}px`;
  return (
    <>
      <div style={{height: calculatedHeight}} className={` w-full  relative mb-2 `}>
        <ul className="z-10 list-none absolute left-[57px]   flex flex-col gap-3 pb-5 ">
          {dropDownList.map((list, index) => (
            <div className="">
              <hr className="h-full leading-3 fixed left-[41px] border-l-2 border-green-600 border-dotted" />
              <li
                key={index}
                className="pr-4 mt-2 list-outside list-disc text-green-600 text-sm text-left font-semibold cursor-pointer ">
                <p className="ml-1.5 text-sm cursor-pointer font-semibold text-left text-black">
                  {list.subcat_name_en}
                </p>
              </li>
            </div>
          ))}
        </ul>
      </div>
    </>
  );
}

export default SideBarDropDown;
