import React from 'react';
import ProgressBar from "../../serviceReservation/steps/ProgressBar";

const ReservationThirdPageDateTimeAppointment = (props) => {
    return (
        <>
            <div className="antialiased overflow-hidden overflow-y-scroll">

            <div className="hero w-full mx-auto">
                    <ProgressBar />

                    <div className="text-center fade-in fade-in-second">
                        <div className="">
                            <div className="hero-mockup w-5/8 sm:col-4/6 w-4/5 lg:w-full mx-auto relative">
                                <h2>User select time for each service selected previously according to business time availability once is added then we add it "to the cart"</h2>
                                <h3>Vaccinate dog - 9:00AM - 9:30AM / 4PM-4:30PM</h3>
                                <h3>Dog Grooming - 9:00AM - 9:30AM / 2PM-2:30PM / 2:30PM-3:00PM</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ReservationThirdPageDateTimeAppointment;
