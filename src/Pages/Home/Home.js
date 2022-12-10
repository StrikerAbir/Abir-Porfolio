import React from "react";
import overlay from "../../assets/images/Rectangle 3 (1).png";
import bg from "../../assets/images/bg.jpeg";
import "./Home.css";
const Home = () => {
  return (
    <div className="relative">
      <img className="width" src={bg} alt="" />
      <div className="absolute right-0 w-full h-full top-0 bg-base-100 bg-opacity-70 border-0 border-l-4 border-primary">
        <div className="h-full md:px-5 px-2 flex flex-col justify-center">
          <p className="text-center">Hello, My Name is</p>
          <h1 className="lg:text-6xl md:text-3xl text-primary font-bold text-center">
            Md Abir Hasan
          </h1>
          <p className="font-bold text-3xl text-center">
            I'm a MERN Stack Developer
          </p>
          <h4 className="lg:text-xl text-xs text-center my-5">
            <p>
              I build interactive websites than run across platforms & devices
            </p>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Home;
