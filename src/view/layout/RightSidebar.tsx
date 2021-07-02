import React from 'react';
import { Link } from 'react-router-dom';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCalendar, faCalendarAlt} from '@fortawesome/free-solid-svg-icons';

function RightSidebar(props){
    return (
        <>
            <section className="fixed inset-y-0 hidden md:flex top-0 right-0 z-10 flex-shrink-0 bg-white xl:z-0 xl:sticky w-80 dark:bg-darker dark:text-light xl:border-l dark:border-primary-darker focus:outline-none"
            >
                <div className="flex flex-col h-screen">

                    <div className="flex-1 p-10 space-y-8 hover:overflow-y-auto">
                        <div className="space-y-6">

                            <div className="flex flex-row cursor-pointer truncate p-2 px-4 rounded">
                                <div></div>
                                <div className="flex flex-row-reverse ml-2 w-full">
                                    <div slot="icon" className="relative">
                                        <div
                                            className="absolute text-xs rounded-full -mt-1 -mr-2 px-1 font-bold top-0 right-0 bg-red-700 text-white">1
                                        </div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"
                                             fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"
                                             stroke-linecap="round" stroke-linejoin="round"
                                             className="feather feather-shopping-cart w-6 h-6 mt-2">
                                            <circle cx="9" cy="21" r="1"></circle>
                                            <circle cx="20" cy="21" r="1"></circle>
                                            <path
                                                d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>


                            <div className="w-full rounded-b border-t-0 z-10">
                                <div className="shadow-xl w-64">
                                    <div
                                        className="p-2 flex bg-white hover:bg-gray-100 cursor-pointer border-b border-gray-100">
                                        <div className="p-2 w-12"><img
                                            src="/icons/beauty-saloon.png"
                                            alt="beauty-saloon-category"/></div>
                                        <div className="flex-auto text-sm w-32">
                                            <div className="font-bold">Peluquería</div>
                                            <div className="truncate">Corte de Pelo</div>
                                            <div className="text-gray-400">Qt: 1</div>
                                        </div>
                                        <div className="flex flex-col w-18 font-medium items-end">
                                            <div
                                                className="w-4 h-4 mb-6 hover:bg-red-200 rounded-full cursor-pointer text-red-700">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"
                                                     fill="none" viewBox="0 0 24 24" stroke="currentColor"
                                                     stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                                     className="feather feather-trash-2 ">
                                                    <polyline points="3 6 5 6 21 6"></polyline>
                                                    <path
                                                        d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                                    <line x1="10" y1="11" x2="10" y2="17"></line>
                                                    <line x1="14" y1="11" x2="14" y2="17"></line>
                                                </svg>
                                            </div>
                                            $12.00
                                        </div>
                                    </div>

                                </div>
                                <div className="p-4 justify-center flex">
                                    <button className="text-gray-900 px-3 py-2 bg-green-400 hover:bg-green-600 rounded border border-green-600 shadow font-semibold transition duration-500 ease-in-out cursor-pointer">Checkout $12.00</button>
                                </div>
                            </div>


                            <div className="space-y-4">
                                <div className="flex flex-col items-center space-y-2">
                                    <Link to="/pet/new">
                                        <img
                                            className="w-20 h-20 lazy"
                                            src="/images/pet-care.png"
                                            alt="AIPETTO"
                                        />
                                    </Link>
                                    <h2 className="text-xl font-medium text-gray-600 dark:text-light">Your Pets</h2>
                                </div>
                                <a href="#" className="flex items-start space-x-2 group">
                                    <img
                                        className="flex-shrink-0 object-cover w-12 h-12 rounded-full"
                                        src="/images/petsImageTwo.jpeg"
                                        alt="Snoopy"
                                    />
                                    <div className="overflow-hidden">
                                        <h4
                                            className="font-semibold text-gray-400 transition-colors dark:text-primary-dark group-hover:text-gray-900 dark:group-hover:text-primary-lighter"
                                        >
                                            Snoopy
                                        </h4>
                                        <p className="text-sm text-gray-400 truncate">
                                            Raza
                                        </p>
                                    </div>
                                </a>
                                <a href="#" className="flex items-start space-x-2 group">
                                    <img
                                        className="flex-shrink-0 object-cover w-12 h-12 rounded-full"
                                        src="/images/petsImageTwo.jpeg"
                                        alt="Snoopy"
                                    />
                                    <div className="overflow-hidden">
                                        <h4
                                            className="font-semibold text-gray-400 transition-colors dark:text-primary-dark group-hover:text-gray-900 dark:group-hover:text-primary-lighter"
                                        >
                                            Snoopy
                                        </h4>
                                        <p className="text-sm text-gray-400 truncate">
                                            Raza
                                        </p>
                                    </div>
                                </a>
                                <a href="#" className="flex items-start space-x-2 group">
                                    <img
                                        className="flex-shrink-0 object-cover w-12 h-12 rounded-full"
                                        src="/images/petsImageTwo.jpeg"
                                        alt="Snoopy"
                                    />
                                    <div className="overflow-hidden">
                                        <h4
                                            className="font-semibold text-gray-400 transition-colors dark:text-primary-dark group-hover:text-gray-900 dark:group-hover:text-primary-lighter"
                                        >
                                            Snoopy
                                        </h4>
                                        <p className="text-sm text-gray-400 truncate">
                                            Raza
                                        </p>
                                    </div>
                                </a>
                                <a href="#" className="flex items-start space-x-2 group">
                                    <img
                                        className="flex-shrink-0 object-cover w-12 h-12 rounded-full"
                                        src="/images/petsImageTwo.jpeg"
                                        alt="Snoopy"
                                    />
                                    <div className="overflow-hidden">
                                        <h4
                                            className="font-semibold text-gray-400 transition-colors dark:text-primary-dark group-hover:text-gray-900 dark:group-hover:text-primary-lighter"
                                        >
                                            Snoopy
                                        </h4>
                                        <p className="text-sm text-gray-400 truncate">
                                            Raza
                                        </p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
}

export default RightSidebar;

