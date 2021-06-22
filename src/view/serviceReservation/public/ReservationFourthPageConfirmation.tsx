import React from 'react';
import ProgressBar from "../../serviceReservation/steps/ProgressBar";

const ReservationFourthPageConfirmation = (props) => {
    return (
        <>
            <div className="antialiased overflow-hidden overflow-y-scroll">

            <div className="hero w-full mx-auto">
                    <ProgressBar />
                    <div className="text-center fade-in fade-in-second">
                        <div className="">
                            <div className="hero-mockup w-5/8 sm:col-4/6 w-4/5 lg:w-full mx-auto relative">

                                <h2>Ooooooooooooooooweeeeeeeeeeeeee!</h2>

                                <h3>Show details of the reservation - all the services selected, time, total price, discounts</h3>
                                <h3>If business has payment enabled then we show the user the option pay in the place or pay online</h3>
                                <h3>Payment is ok then we show message to user and start notifying business and register reservation to control by Business Owner</h3>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ReservationFourthPageConfirmation;
