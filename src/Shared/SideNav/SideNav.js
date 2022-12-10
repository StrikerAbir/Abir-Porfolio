import React from 'react';
import tMark from '../../assets/images/Tmark.gif'
const SideNav = ({ dark, setDark }) => {
    return (
        <div className=''>
            <img src={tMark} alt="" />
            <ul>
                <li>
                    Home
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