import React from 'react';
import { FaCopyright, FaFacebookSquare, FaGithubSquare, FaLinkedin } from 'react-icons/fa';
import footer from '../../assets/images/footer.gif'
const Footer = () => {
    return (
      <div className="relative mt-20">
        <img className="w-full" src={footer} alt="" />

        <div className="absolute bottom-0">
          <div className="lg:ml-9 lg:mb-10 ml-4 mb-3 text-black">
            <ul className="flex">
              <li className="lg:p-2">
                <a
                  className="lg:text-4xl"
                  href="https://www.linkedin.com/in/strikerabir/"
                >
                  <FaLinkedin></FaLinkedin>
                </a>
              </li>
              <li className="lg:p-2">
                <a
                  className="lg:text-4xl"
                  href="https://github.com/StrikerAbir"
                >
                  <FaGithubSquare></FaGithubSquare>
                </a>
              </li>
              <li className="lg:p-2">
                <a
                  className="lg:text-4xl"
                  href="https://www.facebook.com/strikerton.63"
                >
                  <FaFacebookSquare></FaFacebookSquare>
                </a>
              </li>
            </ul>
            <div className="lg:px-2 flex text-xs items-center justify-center">
              <FaCopyright></FaCopyright>
              <p className="ml-2">
                Copyright <span className='lg:text-base-100 text-white'>2022, AbirHasan.</span>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Footer;