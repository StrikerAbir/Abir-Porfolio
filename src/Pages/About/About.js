import React from "react";
import mypic from "../../assets/images/my pic.jpeg";
import resume from "../../assets/files/Abir Resume MERN Dev candidate.pdf";
const About = () => {
  return (
    <div className="flex h-screen" id="About">
      <div className="w-2/5 flex justify-center items-center">
        <div className="avatar mx-4">
          <div className="rounded-full">
            <img className="w-full rounded-full" src={mypic} alt="" />
          </div>
        </div>
      </div>
      <div className="w-3/5 flex justify-center items-center bg-base-100">
        <div className="px-7">
          <p className="text-3xl mb-3 font-bold text-primary text-center">
            About Myself
          </p>
          <p>
            I'm Abir Hasan from Chuadanga, Bangladesh. I completed my BSc in
            Computer Science and Engineering (CSE) from the Bangladesh Army
            University of Science and Technology. My current goal is to work in
            an organization that allows me to expand my skills and knowledge
            while contributing to the company's success.
          </p>
          <p>
            One year of experience as a Full Stack development learner on the
            learning platform and through self-study. I learned leadership
            skills by heading varsity project teams and cricket teams. I also
            learned managerial skills via our clubs and the varsity's farewell
            program. And the most crucial aspect of my life is time management.
            The most exciting aspect of coding is dealing with errors. It
            awakens two reactions in us. The first is terror, and the second is
            happiness. What I learned from this is how to handle a negative
            circumstance and turn it into a positive one. Claiming the mind is
            the most important thing when we encounter a problem, and I am the
            best at it since I have experienced this issue many times and
            battled it back.
          </p>
        <div className='mt-5'>
          <a href={resume} download="Abir_Resume" class="btn btn-secondary">
            Download Resume
          </a>
        </div>
        </div>
      </div>
    </div>
  );
};

export default About;
