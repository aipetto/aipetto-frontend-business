import React from "react";
import { Link } from 'react-router-dom';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCalendarAlt, faMapMarkedAlt, faStore} from "@fortawesome/free-solid-svg-icons";
import {useLocation} from "react-router";
import {faPaypal} from "@fortawesome/free-brands-svg-icons";

const ProgressBar = () => {

    const { pathname} = useLocation();

    const isInitialReservationStep = pathname === '/reservation';
    //const isBusinessSearchStep = pathname === '/reservation-business';
    const isBookingAppointStep = pathname === '/reservation-appointment';
    const isConfirmationStep = pathname === '/reservation-confirmation';

    return (
        <>
                <div className="md:flex hero w-full mt-2 mb-2">

                    <div className="md:w-1/3 text-center px-6">
                        <Link to="/reservation">
                            <div className="bg-gray-300 rounded-lg flex items-center justify-center border border-gray-200">
                                <div className="w-1/3 bg-transparent h-20 flex items-center justify-center icon-step">
                                    <FontAwesomeIcon
                                        className="w-5 h-40 fa-2x"
                                        icon={faMapMarkedAlt}
                                    />
                                </div>
                                <div
                                    className="w-2/3 hover:bg-green-400 hover:text-white bg-gray-200 h-24 flex flex-col items-center justify-center px-1 rounded-r-lg body-step">

                                        <h2 className="font-bold text-sm">Find the right place to your service</h2>
                                        <p className="text-xs text-gray-600 ">
                                            Describe where and which service do you need
                                        </p>

                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="flex-1 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path d="M14 2h-7.229l7.014 7h-13.785v6h13.785l-7.014 7h7.229l10-10z"/>
                        </svg>
                    </div>
                    <div className="md:w-1/3 text-center px-6">
                        <Link to="/reservation-appointment">
                            <div className="bg-gray-300 rounded-lg flex items-center justify-center border border-gray-200">
                                <div className="w-1/3 bg-transparent h-20 flex items-center justify-center icon-step">
                                    <FontAwesomeIcon
                                        className="w-5 h-40 fa-2x"
                                        icon={faCalendarAlt}
                                    />
                                </div>
                                <div
                                    className="w-2/3 hover:bg-green-400 hover:text-white bg-gray-200 h-24 flex flex-col items-center justify-center px-1 rounded-r-lg body-step">
                                    <h2 className="font-bold text-sm">Date and time</h2>
                                    <p className="text-xs text-gray-600">
                                        Schedule your appointment
                                    </p>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="flex-1 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path d="M14 2h-7.229l7.014 7h-13.785v6h13.785l-7.014 7h7.229l10-10z"/>
                        </svg>
                    </div>
                    <div className="md:w-1/3 text-center px-6">
                        <Link to="/reservation-confirmation">
                            <div className="bg-gray-300 rounded-lg flex items-center justify-center border border-gray-200">
                                <div className="w-1/3 bg-transparent h-20 flex items-center justify-center icon-step">
                                    <FontAwesomeIcon
                                        className="w-5 h-40 fa-2x"
                                        icon={faPaypal}
                                    />
                                </div>
                                <div
                                    className="w-2/3 hover:bg-green-400 hover:text-white bg-gray-200 h-24 flex flex-col items-center justify-center px-1 rounded-r-lg body-step">
                                    <h2 className="font-bold text-sm">Confirmation</h2>
                                    <p className="text-xs text-gray-600">
                                        We will be waiting you and your pet.
                                    </p>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
         </>
    )
}

export default ProgressBar;