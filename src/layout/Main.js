import React, { useState } from "react";

import SideNav from "../Shared/SideNav/SideNav";

import { Outlet } from "react-router-dom";
import Nav from "../Shared/Nav/Nav";
const Main = () => {
  const [dark, setDark] = useState(false);
  return (
    <div data-theme={dark ? "dark" : "light"}>
      <Nav dark={dark} setDark={setDark}></Nav>
      <div className="lg:flex relative">
        <div className="w-1/5 lg:block hidden">
          <div className="fixed top-0">
            <div className="border-0 border-r-4 border-primary h-screen">
              <SideNav setDark={setDark} dark={dark}></SideNav>
            </div>
          </div>
        </div>

        <div className="lg:w-4/5 relative">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Main;
