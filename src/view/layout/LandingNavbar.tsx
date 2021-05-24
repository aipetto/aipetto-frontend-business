/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";
// components
import IndexDropdown from "../../components/DropDowns/IndexDropdown";
import {i18n} from "../../i18n";
import I18nFlags from "./I18nFlags";

export default function LandingNavbar(props) {
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
                                <I18nFlags />
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}