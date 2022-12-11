import React from 'react';
import { FaCopyright, FaFacebookSquare, FaGithubSquare, FaLinkedin } from 'react-icons/fa';
import footer from '../../assets/images/footer.gif'
const Footer = () => {
    return (
      <div className="relative mt-20">
        <img src={footer} alt="" />

        <div className="absolute bottom-0">
          <div className="ml-9 mb-10 text-black">
            <ul className="flex">
              <li className="p-2">
                <a
                  className="text-4xl"
                  href="https://www.linkedin.com/in/strikerabir/"
                >
                  <FaLinkedin></FaLinkedin>
                </a>
              </li>
              <li className="p-2">
                <a className="text-4xl" href="https://github.com/StrikerAbir">
                  <FaGithubSquare></FaGithubSquare>
                </a>
              </li>
              <li className="p-2">
                <a
                  className="text-4xl"
                  href="https://www.facebook.com/strikerton.63"
                >
                  <FaFacebookSquare></FaFacebookSquare>
                </a>
              </li>
            </ul>
          <div className="px-2 flex items-center justify-center">
            <FaCopyright></FaCopyright>
            <p className="ml-2">Copyright 2022, AbirHasan. </p>
          </div>
          </div>
        </div>
      </div>
    );
};

export default Footer;