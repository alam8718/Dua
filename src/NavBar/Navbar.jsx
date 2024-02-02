import React from "react";
import TopBar from "./TopBar";
import SideBar from "./SideBar";
import BottomBar from "./BottomBar";
import LeftSideBar from "./LeftSideBar";

function Navbar() {
  return (
    <>
      <div className=" ">
        <TopBar />
        {/* <LeftSideBar /> */}
        <SideBar />
        <BottomBar />
      </div>
    </>
  );
}

export default Navbar;
