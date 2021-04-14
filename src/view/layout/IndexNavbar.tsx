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
        <div className="container mt-10 px-8 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              to="/"
              className="text-blueGray-700 font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
            >
              <h1 className="relative mb-4 text-3xl font-black leading-tight text-gray-900 sm:text-4xl xl:mb-8">AIPETTO</h1>
            </Link>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none" +
              (navbarOpen ? " block" : " hidden")
            }
            id="example-navbar-warning"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="flex items-center">
                <I18nFlags />
                <div className="bg-gray-100 w-full ml-4 dark:bg-gray-700 py-4 px-6 rounded-b-md">
                  <Link
                      to="/auth/signin"
                      className="btn btn-block btn-primary"
                  >
                    {i18n('auth.signin')}
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
    </>
  );
}
