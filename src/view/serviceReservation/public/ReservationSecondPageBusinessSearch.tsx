import React from 'react';
import ProgressBar from "../steps/ProgressBar";
import {useLocation} from "react-router";
import SearchBusinessServicesPage from "../../search/SearchBusinessServicesPage";

const ReservationSecondPageBusinessSearch = (props) => {

    const { state } = useLocation();
    /** TODO
     * get the state of Google maps location latitude and longitude
     * address
     * the services that user is looking for
     */

    return (
        <>
            <div className="antialiased overflow-hidden overflow-y-scroll">
                <div className="hero w-full mt-2">
                   <ProgressBar />

                    <div className="text-center fade-in fade-in-second">
                        <div className="">
                            <div className="hero-mockup w-5/8 sm:col-4/6 w-4/5 lg:w-full mx-auto relative">
                                <SearchBusinessServicesPage />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default ReservationSecondPageBusinessSearch;