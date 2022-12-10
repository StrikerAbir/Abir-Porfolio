import React from "react";
import tMark from "../../assets/images/Tmark.gif";
const SideNav = ({ dark, setDark }) => {
  return (
    <div className="bg-base-100 h-screen">
      <img className="w-[300px]" src={tMark} alt="" />
      <ul>
        <li className="p-5 text-center font-bold hover:text-secondary">
          <a href="#home">Home</a>
        </li>
        <li className="p-5 text-center font-bold hover:text-secondary">
          <a href="#About">About</a>
        </li>
        <li className="p-5 text-center font-bold hover:text-secondary">
          <a href="#Skills">Skills</a>
        </li>
        <li className="p-5 text-center font-bold hover:text-secondary">
          <a href="#Projects">Projects</a>
        </li>
        <li className="p-5 text-center font-bold hover:text-secondary">
          <a href="#Contact">Contact</a>
        </li>
      </ul>
      <div className="p-5 flex justify-center items-center">
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
