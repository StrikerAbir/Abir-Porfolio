import React from "react";
import tMark from "../../assets/images/Tmark.gif";
import { FaMoon, FaSun } from "react-icons/fa";
import { Link } from "react-router-dom";
const SideNav = ({ dark, setDark }) => {
  return (
    <div className="bg-base-100 h-screen">
      <img className="xl:w-[284px] lg:w-[201px]" src={tMark} alt="" />
      <ul className='mx-10'>
        <li className="px-5 py-3 text-left font-bold border-b border-primary hover:text-secondary">
          <a href="#home">Home</a>
        </li> 
        <li className="px-5 py-3 text-left font-bold border-b border-primary hover:text-secondary">
          <a href="#About">About</a>
          {/* <Link to='/about'>about</Link> */}
        </li>
        <li className="px-5 py-3 text-left font-bold border-b border-primary hover:text-secondary">
          <a href="#Skills">Skills</a>
        </li>
        <li className="px-5 py-3 text-left font-bold border-b border-primary hover:text-secondary">
          <a href="#Projects">Projects</a>
        </li>
        <li className="px-5 py-3 text-left font-bold border-b border-primary hover:text-secondary">
          <a href="#Contact">Contact</a>
        </li>
      </ul>
      <div className="px-5 py-3 flex justify-center items-center">
        <FaSun></FaSun>
        <input
          onClick={() => setDark(!dark)}
          type="checkbox"
          className="toggle mx-2"
        />
        <FaMoon></FaMoon>
      </div>
    </div>
  );
};

export default SideNav;
