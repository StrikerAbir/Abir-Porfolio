import React from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import logo from '../../assets/images/logo.gif'
const Nav = ({setDark,dark}) => {
    return (
      <div className="fixed top-0 z-20 w-full lg:hidden">
        <div className="navbar bg-base-100 bg-opacity-70 pr-0">
          <div className="flex-1">
            <img className="w-10 rounded-full" src={logo} alt="" />
            <h2 className="text-2xl font-extrabold ml-2">Abir Hasan</h2>
          </div>
          <div className="flex-none">
            <div className="dropdown dropdown-bottom dropdown-end">
              <label tabIndex={0}>
                <button className="btn btn-primary btn-outline border-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block w-5 h-5 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                    ></path>
                  </svg>
                </button>
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content mt-2 p-2 shadow bg-base-100 bg-opacity-80 w-44"
              >
                <li className="text-center py-2 font-bold border-b border-primary hover:text-secondary">
                  <a href="#home">Home</a>
                </li>
                <li className="text-center py-2 font-bold border-b border-primary hover:text-secondary">
                  <a href="#About">About</a>
                  {/* <Link to='/about'>about</Link> */}
                </li>
                <li className="text-center py-2 font-bold border-b border-primary hover:text-secondary">
                  <a href="#Skills">Skills</a>
                </li>
                <li className="text-center py-2 font-bold border-b border-primary hover:text-secondary">
                  <a href="#Projects">Projects</a>
                </li>
                <li className="text-center py-2 font-bold border-b border-primary hover:text-secondary">
                  <a href="#Contact">Contact</a>
                </li>
                <div className="py-2 flex justify-center items-center">
                  <FaSun></FaSun>
                  <input
                    onClick={() => setDark(!dark)}
                    type="checkbox"
                    className="toggle mx-2"
                  />
                  <FaMoon></FaMoon>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Nav;