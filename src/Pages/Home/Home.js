import React from "react";
import { TypeAnimation } from "react-type-animation";
import resume from "../../assets/files/Abir Resume MERN Dev candidate.pdf"


const Home = () => {
  return (
    <div className="h-screen">
      <div className="">
        <div className="h-full flex flex-col justify-center">
          <p className="text-center">Hello, My Name is</p>
          <TypeAnimation
            sequence={[
              "..Md Abir Hasan..", // Types 'One'
              5000, // Waits 1s
              " ", // Deletes 'One' and types 'Two'
              // 2000, // Waits 2s
              // "Hasan", // Types 'Three' without deleting 'Two'
              () => {
                console.log("Done typing!"); // Place optional callbacks anywhere in the array
              },
            ]}
            wrapper="div"
            cursor={true}
            repeat={Infinity}
            className="lg:text-6xl md:text-3xl text-primary font-bold text-center"
          />
          {/* <h1 className="lg:text-6xl md:text-3xl text-primary font-bold text-center">
            Md Abir Hasan
          </h1> */}
          <p className="font-bold text-3xl text-center">
            I'm a MERN Stack Developer
          </p>
          <h4 className="lg:text-xl text-xs text-center my-5">
            <p>
              I build interactive websites than run across platforms & devices
            </p>
          </h4>
          <div className="text-center">
            <a href={resume} download="Abir_Resume" class="btn btn-primary">
              Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
