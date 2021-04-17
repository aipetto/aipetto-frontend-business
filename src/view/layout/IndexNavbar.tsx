/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";
// components
import IndexDropdown from "../../components/DropDowns/IndexDropdown";
import {i18n} from "../../i18n";
import I18nFlags from "./I18nFlags";

export default function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="p-4 nav-section w-full">
        <div className="container mx-auto">
          <div className="flex justify-between flex- content-center items-center py-2 lg:py-0 px-0 lg:px-0">

            <Link
                to="/"
                className="text-blueGray-700 font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
            >
              <h1 className="relative mb-4 text-3xl font-black leading-tight text-gray-900 sm:text-4xl xl:mb-8">AIPETTO</h1>
            </Link>

            <div className="hidden md:block">
              <ul className="flex flex-row">
                <li className="active">
                  <a className="px-4 py-2 text-gray-900 font-semibold" href="#">Home</a>
                </li>
                <li>
                  <a className="px-4 py-2 text-gray-700 hover:text-gray-900 transition duration-500 ease-in-out hover:rounded hover:bg-gray-200 rounded" href="#">Features</a>
                </li>
                <li>
                  <a className="px-4 py-2 text-gray-700 hover:text-gray-900 transition duration-500 ease-in-out hover:rounded hover:bg-gray-200 rounded" href="#">Business</a>
                </li>
                <I18nFlags />
              </ul>
            </div>

            <div className="hidden md:block">
              <ul className="flex flex-">
                <li>
                  <a className="px-4 py-2 text-gray-700 hover:text-gray-900 transition duration-500 ease-in-out hover:rounded hover:bg-gray-200 rounded text-gray-900" href="/auth/signin">Login</a>
                </li>
                <li className="nav-item px-2 signup">
                  <a className="text-gray-900 px-3 py-2 bg-yellow-500 hover:bg-yellow-600 rounded border border-yellow-600 shadow font-semibold transition duration-500 ease-in-out cursor-pointer" href="/auth/signup">{i18n('auth.signup')}</a>
                </li>
              </ul>
            </div>

            <div className="hamburger-menu px-2 py-1 block md:hidden rounded border border-gray-500 uppercase">
              Menu
            </div>
            <div className="navbar mobile-nav px-0 mx-0 hidden md:hidden fixed top-0 left-0 w-full bg-white h-screen fixed z-50 p-3">
              <div className="flex flex- justify-between px-3 py-2">
                <img src="images/logo.png" className="w-32 self-start ml-1"/>
                <div className="close-menu flex items-center content-center justify-center px-2 py-1 bg-black rounded px-x py-1 text-white uppercase">
                  Close
                </div>
              </div>
              <ul className="flex flex-col text-center mt-2 pt-2 w-full">
                <li className="active w-full">
                  <a className="w-full font-bold text-lg border-t border-gray-200 block py-3" href="/">Home</a>
                </li>
                <li className="w-full">
                  <a className="w-full text-lg border-t border-gray-200 block py-3" href="#">Features</a>
                </li>
                <li className="w-full">
                  <a className="w-full text-lg border-t border-gray-200 block py-3" href="#">Pricing</a>
                </li>
                <li className="w-full">
                  <a className="w-full text-lg border-t border-gray-200 block py-3" href="#">Contact</a>
                </li>
                <li className="w-full">
                  <a className="w-full text-lg border-t border-gray-200 block py-3" href="/auth/signin">{i18n('auth.signin')}</a>
                </li>

                <li className="signup py-4 border-t border-gray-200 p-4">
                  <a className=" px-3 py-2 bg-yellow-500 rounded border border-yellow-600 shadow font-semibold block" href="/auth/signup">{i18n('auth.signup')}</a>
                </li>

              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
