import React, { useState } from "react";

import SideNav from "../Shared/SideNav/SideNav";

import { Outlet } from "react-router-dom";
const Main = () => {
  const [dark, setDark] = useState(false);
  return (
    <div data-theme={dark ? "dark" : "light"}>
      {/* <Nav></Nav> */}
      <div className="flex relative">
        <div className="w-1/5">
          <div className="fixed top-0">
            <div className="border-0 border-r-4 border-primary h-screen">
              <SideNav setDark={setDark} dark={dark}></SideNav>
            </div>
          </div>
        </div>

        <div className="w-4/5 relative">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Main;
