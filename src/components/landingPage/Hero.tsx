import React from "react";
import { Link } from 'react-router-dom';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook} from "@fortawesome/free-brands-svg-icons";


const Hero = ({appType, tagLine, description, downloadAppInGooglePlayStoreButton, downloadAppInAppleStoreButton}) => {
  return (
    <div>
      <div id="product">
        <div style={{textShadow:'0px 1px 1px gray'}} className="flex flex-col items-center justify-start font-sans min-h-96 bg-blue-400 lg:pt-10 lg:pb-20 lg:bg-hero lg:bg-cover">
          <div>
            <p className="p-3 pt-12 text-lg font-bold text-gray-500 lg:text-gray-300"></p>
          </div>
          <div>
            <p className="p-2 text-4xl font-bold text-center text-gray-800 lg:mx-auto lg:w-4/6 lg:text-5xl lg:text-gray-100">
              {tagLine}
            </p>
          </div>
          <div className="relative z-50 flex flex-col items-center justify-between h-48 lg:space-x-8 pt-7 lg:pt-0 lg:flex-row lg:justify-between lg:w-90">
            <Link to="/">
              <button
                  className="pt-3 pb-3 pl-12 pr-12 text-2xl font-semibold text-center text-white transition-all bg-orange-600 rounded-full shadow-2xl lg:ml-5 hover:bg-orange-700 focus:outline-none ring-4 ring-orange-600 lg:ring-2 lg:font-medium "
              >
                {downloadAppInGooglePlayStoreButton}
              </button>
            </Link>

            <Link to="/">
              <button
                className="pt-3 pb-3 text-2xl font-semibold text-center text-orange-500 transition-all rounded-full shadow-2xl lg:mr-5 hover:text-gray-500 hover:bg-blue-300 pl-11 pr-11 bg-gray-50 focus:outline-none ring-4 ring-orange-500 lg:font-medium lg:text-gray-50 lg:bg-opacity-0 lg:ring-2 lg:ring-white"
              >
                {downloadAppInAppleStoreButton}
              </button>
            </Link>
          </div>

        </div>
        <div className="z-0 flex flex-row items-start justify-center w-screen h-screen pt-20 -mb-16 bg-gray-50 lg:bg-white lg:mb-20 lg:w-full lg:h-96 lg:pt-0">
            <img className="absolute left-0 lg:left-auto lg:-mt-20" src='/images/app-screenshots/en/en_home.jpg' alt=""/>
          </div>
        </div>
    </div>
  );
};

export default Hero;
