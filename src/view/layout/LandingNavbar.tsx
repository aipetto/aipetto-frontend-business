/*eslint-disable*/
import React from "react";
import { Link, useHistory } from "react-router-dom";
import {i18n} from "../../i18n";
import I18nFlags from "./I18nFlags";

export default function LandingNavbar(props) {
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    const history = useHistory();

    return (
        <>
            <nav className="p-4 nav-section w-full">
                <div className="container mx-auto">
                    <div className="flex justify-between flex content-center items-center py-2 lg:py-0 px-0 lg:px-0">

                        <Link
                            to="/"
                            className="text-blueGray-700 font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
                        >
                            <h1 className="relative mb-4 text-3xl font-black leading-tight text-gray-900 sm:text-4xl xl:mb-8">AIPETTO</h1>
                        </Link>

                        <div className="">
                            <ul className="flex flex-row">

                                <I18nFlags />
                                <li className="nav-item px-2 signup">
                                    <a className="text-gray-900 px-3 py-2 bg-yellow-500 hover:bg-yellow-600 rounded border border-yellow-600 shadow font-semibold transition duration-500 ease-in-out cursor-pointer" href="/beta">Beta</a>
                                </li>
                                {
                                 history.location.pathname == '/business' ?
                                     <li className="nav-item px-2 signup">
                                         <a className="text-gray-900 px-3 py-2 bg-yellow-500 hover:bg-yellow-600 rounded border border-yellow-600 shadow font-semibold transition duration-500 ease-in-out cursor-pointer" href="/">{i18n('public.menu.petsSurvey')}</a>
                                     </li>
                                     :
                                     <li className="nav-item px-2 signup">
                                         <a className="text-gray-900 px-3 py-2 bg-yellow-500 hover:bg-yellow-600 rounded border border-yellow-600 shadow font-semibold transition duration-500 ease-in-out cursor-pointer" href="/business">{i18n('public.menu.business')}</a>
                                     </li>
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}
