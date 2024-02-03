import React from "react";

function SettingMenu() {
  return (
    <>
      <div>
        <div className=" bg-[#F7F8FA] py-2 rounded-xl relative flex items-center justify-start pl-4 w-full">
          <span className="w-[5px] h-[53px] absolute left-[1px] rounded-l-xl"></span>
          <div className="flex gap-10 items-center  text-[#868686]">
            <div className="w-[38px] h-[38px] bg-[#E8F0F5] flex justify-center items-center rounded-full">
              <span className="text-2xl">
                <IoLanguageOutline />
              </span>
            </div>
            <p className="text-sm font-medium leading-5">Language Settings</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default SettingMenu;
