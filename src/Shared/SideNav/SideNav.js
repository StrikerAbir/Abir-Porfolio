import React from 'react';
import tMark from '../../assets/images/Tmark.gif'
const SideNav = ({ dark, setDark }) => {
    return (
        <div className='bg-base-100 h-screen' >
            <img className='w-[300px]' src={tMark} alt="" />
            <ul>
                <li>
                    <a href='#home'>Home</a>
                </li>
                <li>
                    About
                </li>
                <li>
                    Skills
                </li>
                <li>
                    Projects
                </li>
                <li>
                    Contact
                </li>
            </ul>
        <div className="flex justify-center items-center lg:ml-2">
          <input
            onClick={() => setDark(!dark)}
            type="checkbox"
            className="toggle"
          />
        </div>
      </div>
    );
};

export default SideNav;