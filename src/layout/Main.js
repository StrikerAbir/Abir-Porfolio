import React, { useState } from 'react';
import Home from '../Pages/Home/Home';
import Nav from '../Shared/Nav/Nav';
import SideNav from '../Shared/SideNav/SideNav';

const Main = () => {
    const [dark, setDark] = useState(false);
    return (
      <div data-theme={dark ? "dark" : "light"}>
        {/* <Nav></Nav> */}
        <div className="flex">
          <div className="w-1/5">
            <SideNav setDark={setDark} dark={dark}></SideNav>
          </div>
                <div>
                    <Home></Home>
          </div>
        </div>
      </div>
    );
};

export default Main;