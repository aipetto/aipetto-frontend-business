import React from 'react';
import ProgressBar from "../steps/ProgressBar";

const reservationSecondPageBusinessSearch = (props) => {
    return (
        <>
            <body className="antialiased overflow-hidden overflow-y-scroll">

            <div className="hero w-full">
                <div className="container mx-auto mt-2">
                    <div className="py-0 md:py-16 hero__content text-center w-5/8 sm:col-4/6 w-4/5 lg:w-full mx-auto relative fade-in fade-in-first">
                        <ProgressBar />
                    </div>
                    <div className="text-center fade-in fade-in-second">
                        <div className="">
                            <div className="hero-mockup w-5/8 sm:col-4/6 w-4/5 lg:w-full mx-auto relative">



                                - App Search here






                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </body>
        </>
    )
}

export default reservationSecondPageBusinessSearch;