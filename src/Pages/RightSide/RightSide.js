import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import About from '../About/About';
import ContactMe from '../ContactMe/ContactMe';
import Home from '../Home/Home';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';
import bg from "../../assets/images/bg.jpeg";
const RightSide = () => {
    return (
      <div>
        <div className="fixed">
          <img className="xl:w-[1152px] h-screen" src={bg} alt="" />
        </div>
        <div className="absolute top-0 bg-base-100 bg-opacity-60 w-full">
          <Home></Home>
          <About></About>
          <Skills></Skills>
          <Projects></Projects>
          <ContactMe></ContactMe>
          <Footer></Footer>
        </div>
      </div>
    );
};

export default RightSide;