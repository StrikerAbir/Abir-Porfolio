import React, { useState } from 'react';
import About from '../Pages/About/About';
import Home from '../Pages/Home/Home';
import Nav from '../Shared/Nav/Nav';
import SideNav from '../Shared/SideNav/SideNav';
import bg from "../assets/images/bg.jpeg";
const Main = () => {
    const [dark, setDark] = useState(false);
    return (
      <div data-theme={dark ? "dark" : "light"}>
        {/* <Nav></Nav> */}
        <div className="flex relative">
          <div className="w-1/5">
            <div className="fixed top-0">
              <div className="border-0 border-r-4 border-primary">
                <SideNav setDark={setDark} dark={dark}></SideNav>
              </div>
            </div>
          </div>

          <div className="w-4/5 relative">
            <div className="fixed">
              <img className="w-full" src={bg} alt="" />
            </div>
            <div className="absolute top-0 bg-base-100 bg-opacity-70 ">
              <Home></Home>
              <About></About>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Main;