import React from 'react';
import { Link } from "react-router-dom";
import IndexNavbar from "../layout/IndexNavbar";
import { i18n } from 'src/i18n';
import AnimatedLogoExample from '../../socialpets.svg';

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

                                <img src="images/woman-pet-searching.png" alt="AIPETTO" className="pt-16 sm:w-6/12 -mt-48 sm:mt-0 w-10/12 md:max-w-xl lg:max-w-4xl mx-auto z-10 relative"/>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className="border-t border-b border-blue-200 py-16 bg-blue-100 my-16 px-4 fade-in fade-in-fourth">
                <div className="container mx-auto">

                    <div className="mb-8">
                        <div className="w-full lg:w-8/12 text-center mx-auto">
                            <h2 className="text-2xl md:text-4xl leading-tight font-bold">Simple and easy reservations</h2>
                            <p className="text-lg py-2 text-gray-700">Save your time and also money with awesome discounts!</p>
                        </div>
                    </div>

                    <div className="my-16 lg:flex">


                        <div className="my-8 lg:my-0 w-full lg:w-2/6 text-center mt-4 flex flex-col justify-between align-content-start px-4">
                            <img src="images/pablo-861.png" className="lg:w-2/3 lazy self-start mx-auto py-2 md:py-4 w-1/2 md:w-1/3 lg:w-auto" alt="Music Drawing"/>

                            <div>
                                <h3 className="font-semibold text-xl md:text-2xl lg:text-xl">Vet attention and vaccines</h3>
                                <p className="text-gray-600">Get an appointment online or physically to a veterinarian 24 hours a day</p>
                            </div>
                        </div>

                        <div className="my-8 lg:my-0 w-full lg:w-2/6 text-center mt-4  flex flex-col align-content-start justify-between px-4">
                            <img src="images/conifer-1076.png" className="lg:w-2/3 lazy self-start mx-auto py-2 md:py-4 w-1/2 md:w-1/3 lg:w-auto" alt="Task Drawing"/>

                            <div>
                                <h3 className="font-semibold text-xl md:text-2xl lg:text-xl">Pet walking</h3>
                                <p className="text-gray-600">Get someone to walk your dog for 30 minutes or 1 hour any times you want.</p>
                            </div>
                        </div>

                        <div className="my-8 lg:my-0 w-full lg:w-2/6 text-center mt-4  flex flex-col align-content-start justify-between px-4">
                            <img src="images/conifer-1097.png" className="lg:w-1/2 lazy self-start mx-auto py-2 md:py-4 w-1/2 md:w-1/3 lg:w-auto" alt="Pet Care and Hair Cut"/>

                            <h3 className="font-semibold text-xl md:text-2xl lg:text-xl">Hair cut and shower</h3>
                            <p className="text-gray-600">Get an appointment to have your pet with a brand new looking.</p>
                        </div>

                    </div>
                </div>
            </div>

            <div className="features px-4 md:px-8">
                <div className="container mx-auto">


                    <div className="flex flex-col md:flex-row items-center content-center py-12 lg:pt-16 lg:pb-32">

                        <div className="feature-1 md:w-1/2 text-center mb-4 lg:mb-0 relative">
                            <img src="images/mocks/appMockVersion1AIPETTO.png" className="lazy mx-auto z-10 relative w-3/3 md:w-4/5 lg:w-3/3" alt="Mobile Device"/>

                        </div>

                        <div className="w-full md:w-1/2 ">
                            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold">Have all the features of the platform in your smartphone</h2>
                            <p className="text-md lg:text-lg pt-4 pb-8 text-gray-700">
                                “Save time on reservations. Never lose an appoitnment. Find local services providers for your pet whetever you go.”
                            </p>
                            <ul className="usps">
                                <li className="text-gray-900 py-1">Get closest vets, petshops, dog walkers, playgrounds.</li>
                                <li className="text-gray-900 py-1">Chat in real time with veterinaries.</li>
                                <li className="text-gray-900 py-1">Check your pet profile including medical history and documentation.</li>
                            </ul>
                            <div className="lg:w-full">
                                <ul className="list-none flex justify-center items-center content-center mt-1">

                                    <li className="p-4 md:px-4"><a href=""
                                    >
                                        <img className="top-0 mt-10 b-auto h-16 mr-4 duration-150 cursor-pointer fill-current transition-color hover:text-gray-600"
                                             alt=""
                                             src="images/google-play-android.jpg"
                                        />
                                    </a>
                                    </li>
                                    <li className="p-4 md:px-4"><a
                                        href=""
                                    >
                                        <img className="top-0 mt-5 b-auto h-24 mr-4 text-gray-500 duration-150 cursor-pointer fill-current transition-color hover:text-gray-600"
                                             alt=""
                                             src="images/apple-store-download-2.png"
                                        />
                                    </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-8 bg-blue-100 border-t border-b border-blue-200">
                <div className="container mx-auto">
                    <div className="flex flex-col lg:flex-row justify-center content-center items-center text-center lg:text-left">

                        <div className="px-4 flex flex-col content-center my-2 md:my-4 mx-4 md:my-0">
                            <h4 className="text-lg font-semibold pb-0 mb-0 mb-md-0">More you use, more benefits you get!</h4>
                        </div>

                        <a href="/auth/signup" className="px-4 btn btn-secundary bg-green-500 rounded text-white font-semibold border border-green-700 shadow py-2 hover:bg-green-600">Sign up</a>

                    </div>
                </div>
            </div>

            <div className="testimonials py-8 lg:py-16 px-4">
                <div className="container mx-auto">

                    <div className="py-8">
                        <div className="lg:w-4/6 text-center mx-auto">
                            <h2 className="text-2xl md:text-4xl font-bold">Over 23.000 people like AIPETTO! Woof woof for that! See what they say.</h2>
                        </div>
                    </div>

                    <div className="text-center flex flex-col md:flex-row">

                        <div className="md:w-1/2 my-4 lg:my-0 md:px-4">
                            <blockquote className="italic text-gray-700 text-sm md:text-md lg:text-lg">
                                “Amazing app, with it I could take care of my pet so much easily.“
                            </blockquote>
                        </div>

                        <div className="md:w-1/2  my-4 lg:my-0 md:px-4">
                            <blockquote className="italic text-gray-700 text-sm md:text-md lg:text-lg">
                                “Gracias, gracias, gracias. Tuve que llevar mi mascota al médico a las 3 de la mañana y con AIPETTO pude encontrar rápidamente una veterinária y un médico que me diera indicaciones online.“
                            </blockquote>

                        </div>
                    </div>

                    <div className=" text-center flex ">
                        <img src="images/girl-cat-friend.png" className="w-64 lazy mx-auto" alt="Drawing Friends"/>
                    </div>

                    <div className="  text-center flex flex-col md:flex-row">

                        <div className="md:w-1/2 flex flex-col   my-4 lg:my-0 md:px-4">
                            <blockquote className="italic text-gray-700 text-sm md:text-md lg:text-lg lg:order-last order-first">
                                “Sempre tive que usar uma app diferente para tudo. Uma para encontrar cruza para meu cachorro, uma para passer meu pet, outra para comprar, outra para encontrar pets que adotar, outra para ver quais pets meus amigos tem... com AIPETTO eu consigo fazer tudo e muito mais e em uma plataforma só, amei!“
                            </blockquote>
                        </div>

                        <div className="md:w-1/2 flex flex-col   my-4 lg:my-0 md:px-4">
                            <blockquote className="italic text-gray-700 text-sm md:text-md lg:text-lg lg:order-last order-first">
                                “It's so amazing the commitment that the AIPETTO team have, they worked so hard to help me out find my pet and get me feeling supported all the time. You got a lifetime fan!“
                            </blockquote>
                        </div>

                    </div>
                </div>
            </div>

            <div className="bg-yellow-100 py-16 border-t border-yellow-300 px-4 md:px-16 lg:px-0">
                <div className="container mx-auto py-4">

                    <div className=" py-4">
                        <div className="lg:w-3/12 col-md-4 mx-auto text-center">
                            <img src="images/man-pet-playing.png" className="lazy mx-auto w-100 w-1/2 lg:w-full" alt="AIPETTO"/>
                        </div>
                    </div>

                    <div className="">
                        <div className="lg:w-3/6 mx-auto text-center">
                            <h2 className="text-2xl md:text-4xl lg:text-4xl font-bold">Because we love and care our pets</h2>
                            <p className="text-md md:text-xl lg:text-lg pt-4 pb-8 text-gray-800">All service providers and interactions in our platform are strongly validated in order to garantee the quality of services and safeness of everyone using it, paying extra attention on protecting your pet data and private information.</p>
                            <div className="flex justify-center items-center flex- mb-2">
                                <a href="/auth/signup" className="bg-yellow-500 hover:bg-yellow-600 rounded border border-yellow-600 hover:border-yellow-700 shadow font-semibold px-4 py-2 inline-block mx-2 cursor-pointer transition duration-500 ease-in-out">Sign up</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <footer className="py-8 text-center md:text-left">
                <div className="container mx-auto">
                    <div className=" flex flex-col lg:flex-row content-center items-center justify-between">
                        <div className="flex items-center flex-col lg:flex-row mx-auto">
                            <span className="ml-0 md:ml-4 text-sm text-gray-600 py-4 lg:py-0">AIPETTO, Copyright &copy; 2021</span>
                        </div>

                        <div className="navbar mx-auto">
                            <ul className="navbar-nav flex flex-">
                                <li className="active">
                                    <a className="px-md-2 px-2 text-gray-700 hover:text-gray-900 transition duration-500 ease-in-out hover:rounded hover:bg-gray-200 rounded" href="#">Home</a>
                                </li>
                                <li>
                                    <a className="px-md-2 px-2 text-gray-700 hover:text-gray-900 transition duration-500 ease-in-out hover:rounded hover:bg-gray-200 rounded" href="#">Features</a>
                                </li>
                                <li>
                                    <a className="px-md-2 px-2 text-gray-700 hover:text-gray-900 transition duration-500 ease-in-out hover:rounded hover:bg-gray-200 rounded" href="#">Business</a>
                                </li>
                                <li className="px-md-2 px-2 text-gray-700 hover:text-gray-900 transition duration-500 ease-in-out hover:rounded hover:bg-gray-200 rounded">
                                    <a className=" " href="/auth/signin">Login</a>
                                </li>
                            </ul>
                        </div>

                    </div>
            </div>
        </footer>
     </body>
    </>
    );
};

export default HomePage;
