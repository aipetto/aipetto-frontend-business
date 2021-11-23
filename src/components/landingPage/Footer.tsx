import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faInstagram} from "@fortawesome/free-brands-svg-icons";
import I18nFlags from "../../view/layout/I18nFlags";

const Footer = ({logo}) => {
  return (
     <div>
    <div id="contact" className="flex flex-row flex-wrap items-center justify-around p-10">
      <a href="/" className="w-1/2 pl-5 mb-2 lg:visible lg:w-auto lg:pl-0 lg:mb-0">
        <img width="80px" height="80px" src={logo} alt="aipetto logo"/>
      </a>
      <div className="flex items-center justify-around w-2/3 pt-5 lg:pt-0 lg:w-1/3 ">
        <a href="https://www.facebook.com/aipetto" target="_blank">
            <FontAwesomeIcon
                className="mr-2"
                size='4x'
                icon={faFacebook}
            />
        </a>
        <a href="https://www.instagram.com/aipetto_network" target="_blank">
            <FontAwesomeIcon
                className="mr-2"
                size='4x'
                icon={faInstagram}
            />
        </a>
      </div>
      <div className="mt-10 text-lg text-blue-800 lg:mt-0">
          <I18nFlags />
      </div>
    </div>

         <section className="bg-white">
             <div className="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
                 <nav className="flex flex-wrap justify-center -mx-5 -my-2">
                     <div className="px-5 py-2">
                         <a href="#" className="text-base leading-6 text-gray-500 hover:text-gray-900">
                             About
                         </a>
                     </div>
                     <div className="px-5 py-2">
                         <a href="#" className="text-base leading-6 text-gray-500 hover:text-gray-900">
                             Blog
                         </a>
                     </div>
                     <div className="px-5 py-2">
                         <a href="#" className="text-base leading-6 text-gray-500 hover:text-gray-900">
                             Team
                         </a>
                     </div>
                     <div className="px-5 py-2">
                         <a href="#" className="text-base leading-6 text-gray-500 hover:text-gray-900">
                             GDPR
                         </a>
                     </div>
                     <div className="px-5 py-2">
                         <a href="#" className="text-base leading-6 text-gray-500 hover:text-gray-900">
                             Contact
                         </a>
                     </div>
                     <div className="px-5 py-2">
                         <a href="#" className="text-base leading-6 text-gray-500 hover:text-gray-900">
                             Terms
                         </a>
                     </div>
                 </nav>
                 <p className="mt-8 text-base leading-6 text-center text-gray-400">
                     愛ペット Aipetto, Copyright &copy; 2021
                 </p>
             </div>
         </section>
     </div>
  );
};

export default Footer;
