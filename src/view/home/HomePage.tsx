import React from 'react';
import { Link } from "react-router-dom";
import IndexNavbar from "../layout/IndexNavbar";
import AnimatedLogoExample from '../../socialpets.svg';

const HomePage = (props) => {
    return (
        <>
            <IndexNavbar fixed />

            <section className="header relative pt-16 items-center flex h-screen max-h-860-px">
                <div className="container mx-auto items-center flex flex-wrap">
                    <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
                        <div className="pt-32 sm:pt-0">
                            <h2 className="font-semibold text-4xl text-blueGray-600">
                               All your pet needs in one place
                            </h2>
                            <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                                Whenever you go, local vets can help you out, you can find places where your pet can play and get best discounts to have your pet looking good, this and much more...
                            </p>

                            <div className="h-48 flex content-center">
                                    <a
                                        href=""
                                    >
                                        <img className="top-0 mt-10 b-auto h-16 mr-4 duration-150 cursor-pointer fill-current transition-color hover:text-gray-600"
                                             alt=""
                                             src="assets/img/google-play-android.jpg"
                                        />
                                    </a>
                                    <a
                                        href=""
                                    >
                                        <img className="top-0 mt-5 b-auto h-24 mr-4 text-gray-500 duration-150 cursor-pointer fill-current transition-color hover:text-gray-600"
                                             alt=""
                                             src="assets/img/apple-store-download-2.png"
                                        />
                                    </a>
                            </div>
                        </div>
                    </div>
                </div>
                
                <img className="absolute top-0 b-auto right-0 pt-16 sm:w-6/12 -mt-48 sm:mt-0 w-10/12 max-h-860px"
                     alt=""
                     src={AnimatedLogoExample}
                />
            </section>
        </>
    );
};

export default HomePage;
