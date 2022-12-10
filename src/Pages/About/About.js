import React from 'react';
import mypic from '../../assets/images/my pic.jpeg'
const About = () => {
    return (
      <div className="flex">
        <div className='w-2/5'>
          <img className='w-full' src={mypic} alt="" />
        </div>
        <div className=''>
          <div className="">
            <p className="text-2xl font-bold text-primary">Products in Sale</p>
            <h2 className="text-5xl font-semibold"> Dive Into Olds</h2>
          </div>
        </div>
      </div>
    );
};

export default About;