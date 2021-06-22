import React from 'react';
import { Link } from "react-router-dom";
import IndexNavbar from "../layout/IndexNavbar";
import { i18n } from 'src/i18n';
import AnimatedLogoExample from '../../socialpets.svg';
import ProgressBar from "../serviceReservation/steps/ProgressBar";

const HomePage = (props) => {
    return (
        <>
            <body className="antialiased overflow-hidden overflow-y-scroll">

                <div className="hero w-full">

                <IndexNavbar fixed />

                    <div className="container mx-auto mt-8">

                        <div className="py-0 md:py-16 hero__content text-center w-4/5 mx-auto fade-in fade-in-first">
                            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">{i18n('public.homeTitle')}</h1>
                            <p className="text-xl pt-4 pb-8 text-gray-700">{i18n('public.homeSubtitle')}</p>
                            <div className="flex justify-center items-center flex-col">
                                <a className="bg-yellow-500 hover:bg-yellow-600 rounded border border-yellow-600 shadow font-semibold px-6 py-2 inline-block transition duration-500 ease-in-out cursor-pointer text-xl">Make a reservation</a>
                                <small className="capitalize mt-2 text-gray-700">Get discounts and save time</small>
                            </div>
                        </div>

                        <div className="text-center fade-in fade-in-second">

                            <div className="">
                                <div className="hero-mockup w-5/8 sm:col-4/6 w-4/5 lg:w-full mx-auto relative">

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </body>
        </>
    );
};

export default HomePage;
