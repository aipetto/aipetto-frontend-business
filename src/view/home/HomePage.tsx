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



                                <img src={AnimatedLogoExample} alt="AIPETTO" className="pt-16 sm:w-6/12 -mt-48 sm:mt-0 w-10/12 md:max-w-xl lg:max-w-4xl mx-auto z-10 relative"/>

                    </div>
                </div>

            </div>

            <div className="border-t border-b border-blue-200 py-16 bg-blue-100 my-16 px-4 fade-in fade-in-fourth">
                <div className="container mx-auto">

                    <div className="mb-8">
                        <div className="w-full lg:w-8/12 text-center mx-auto">
                            <h2 className="text-2xl md:text-4xl leading-tight font-bold">Headline that discribes how your product solves a problem your customer has</h2>
                            <p className="text-lg py-2 text-gray-700">Start by defining the pain your customer has right now, for example; clients not paying their invoices. Than write how your solution solves this problem for your customers.</p>
                        </div>
                    </div>

                    <div className="my-16 lg:flex">


                        <div className="my-8 lg:my-0 w-full lg:w-2/6 text-center mt-4 flex flex-col justify-between align-content-start px-4">
                            <img src="images/drawing-music.png" className="lg:w-2/3 lazy self-start mx-auto py-2 md:py-4 w-1/2 md:w-1/3 lg:w-auto" alt="Music Drawing"/>

                            <div>
                                <h3 className="font-semibold text-xl md:text-2xl lg:text-xl">First main benefit of your product</h3>
                                <p className="text-gray-600">Brief explanation of why and how this benefit will help your customers</p>
                            </div>
                        </div>

                        <div className="my-8 lg:my-0 w-full lg:w-2/6 text-center mt-4  flex flex-col align-content-start justify-between px-4">
                            <img src="images/drawing-task.png" className="lg:w-2/3 lazy self-start mx-auto py-2 md:py-4 w-1/2 md:w-1/3 lg:w-auto" alt="Task Drawing"/>

                            <div>
                                <h3 className="font-semibold text-xl md:text-2xl lg:text-xl">Second main benefit of your product</h3>
                                <p className="text-gray-600">Brief explanation of why and how this benefit will help your customers</p>
                            </div>
                        </div>

                        <div className="my-8 lg:my-0 w-full lg:w-2/6 text-center mt-4  flex flex-col align-content-start justify-between px-4">
                            <img src="images/drawing-coffee.png" className="lg:w-1/2 lazy self-start mx-auto py-2 md:py-4 w-1/2 md:w-1/3 lg:w-auto" alt="Coffee Drawing"/>

                            <h3 className="font-semibold text-xl md:text-2xl lg:text-xl">Third main benefit of your product</h3>
                            <p className="text-gray-600">Brief explanation of why and how this benefit will help your customers</p>
                        </div>

                    </div>


                    <div className=" mt-4">
                        <div className="lg:w-1/2 mx-auto text-center mt-4">
                            <blockquote className="italic text-lg text-gray-700">
                                “Powerfull and relevant testimonial of Customer X. This content should focus on the result the product had for this customer or answer a doubt your potential customer could have. "
                            </blockquote>
                            <div className="mt-3 flex justify-center content-center items-center">
                                <img src="images/avatar/avatar-1.png" className="w-8 lazy self-start" alt="Testimonial Avatar"/>

                                <span className="ml-2 font-bold text-gray-900">Name</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className="features px-4 md:px-8">
                <div className="container mx-auto">


                    <div className="flex flex-col md:flex-row items-center content-center py-12 lg:pt-16 lg:pb-32">

                        <div className="feature-1 md:w-1/2 text-center mb-4 lg:mb-0 relative">
                            <img src="images/device-mobile.png" className="lazy mx-auto z-10 relative w-2/3 md:w-2/5 lg:w-1/3" alt="Mobile Device"/>

                        </div>

                        <div className="w-full md:w-1/2 ">
                            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold">Now go deeper into what your product offers. But, word it as benefits, not as features.</h2>
                            <p className="text-md lg:text-lg pt-4 pb-8 text-gray-700">
                                “Save your favorites links” is a feature. “Never lose your favorite websites again” is a benefit. Users don’t care about your product, they only care about what’s in it for them.
                            </p>
                            <ul className="usps">
                                <li className="text-gray-900 py-1">Summarize the content above</li>
                                <li className="text-gray-900 py-1">For visitors that don't like to read</li>
                                <li className="text-gray-900 py-1">And just scan the page</li>
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

                        <img src="images/drawing-try.png" className="lazy px-4 self-start mx-auto lg:mx-0 w-32" alt="Drawing Try"/>


                        <div className="px-4 flex flex-col content-center my-2 md:my-4 mx-4 md:my-0">
                            <h4 className="text-lg font-semibold pb-0 mb-0 mb-md-0">Get notify on your pet appointments</h4>
                            <p className="mb-0 text-gray-700">This a in between CTA for visitors that already got convinced.</p>
                        </div>

                        <a href="#" className="px-4 btn btn-secundary bg-green-500 rounded text-white font-semibold border border-green-700 shadow py-2 hover:bg-green-600"> Clear CTA Text</a>

                    </div>
                </div>
            </div>

            <div className="testimonials py-8 lg:py-16 px-4">
                <div className="container mx-auto">

                    <div className="py-8">
                        <div className="lg:w-4/6 text-center mx-auto">
                            <h2 className="text-2xl md:text-4xl font-bold">Over 130.000 users like AIPETTO. See what they say.</h2>
                        </div>
                    </div>

                    <div className="text-center flex flex-col md:flex-row">

                        <div className="md:w-1/2 my-4 lg:my-0 md:px-4">
                            <blockquote className="italic text-gray-700 text-sm md:text-md lg:text-lg">
                                “Amazing app, with it I could take care of my pet so much easily.“
                            </blockquote>
                            <div className="mt-3 flex justify-center content-center items-center">
                                <img src="images/avatar/avatar-1.png" className="w-8 lazy self-start" alt="Testimonial Avatar"/>

                                <span className="ml-2 font-bold text-gray-900 md:text-sm">Name</span>
                            </div>
                        </div>

                        <div className="md:w-1/2  my-4 lg:my-0 md:px-4">
                            <blockquote className="italic text-gray-700 text-sm md:text-md lg:text-lg">
                                “Powerfull and relevant testimonial of Customer X. This content should focus on the result the product had for this customer or answer a doubt your potential customer could have. "
                            </blockquote>
                            <div className="mt-3 flex justify-center content-center items-center">
                                <img src="images/avatar/avatar-1.png" className="w-8 lazy self-start" alt="Testimonial Avatar"/>

                                <span className="ml-2 font-bold text-gray-900 md:text-sm">Name</span>
                            </div>
                        </div>

                    </div>



                    <div className=" text-center flex ">
                        <img src="images/drawing-friends.png" className="w-64 lazy mx-auto" alt="Drawing Friends"/>
                    </div>

                    <div className="  text-center flex flex-col md:flex-row">

                        <div className="md:w-1/2 flex flex-col   my-4 lg:my-0 md:px-4">
                            <blockquote className="italic text-gray-700 text-sm md:text-md lg:text-lg lg:order-last order-first">
                                “Powerfull and relevant testimonial of Customer X. This content should focus on the result the product had for this customer or answer a doubt your potential customer could have. "
                            </blockquote>
                            <div className="mt-3 flex justify-center content-center items-center order-last lg:order-first">
                                <img src="images/avatar/avatar-1.png" className="w-8 lazy self-start" alt="Testimonial Avatar"/>

                                <span className="ml-2 font-bold text-gray-900 md:text-sm">Name</span>
                            </div>
                        </div>

                        <div className="md:w-1/2 flex flex-col   my-4 lg:my-0 md:px-4">
                            <blockquote className="italic text-gray-700 text-sm md:text-md lg:text-lg lg:order-last order-first">
                                “Powerfull and relevant testimonial of Customer X. This content should focus on the result the product had for this customer or answer a doubt your potential customer could have. "
                            </blockquote>
                            <div className="mt-3 flex justify-center content-center items-center order-last lg:order-first">
                                <img src="images/avatar/avatar-1.png" className="w-8 lazy self-start" alt="Testimonial Avatar"/>

                                <span className="ml-2 font-bold text-gray-900 md:text-sm">Name</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="bg-gray-100 text-center md:text-left py-16 px-4">
                <div className="container mx-auto">

                    <div className="pb-4 lg:pb-8">
                        <div className="lg:w-full text-center">
                            <h2 className="text-2xl md:text-4xl font-bold">Main benefits</h2>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row md:flex-wrap">

                        <div className="w-full lg:w-1/4 md:w-1/2 text-center lg:text-left mt-4 flex flex-col justify-between">
                            <img src="images/icon-settings.png" className="w-10 lazy self-start py-2 mx-auto lg:mx-0" alt="Benefit Icon"/>

                            <div>
                                <h4 className="mb-0 font-bold">First main product benefit</h4>
                                <p className="mb-0">Short text to support claim</p>
                            </div>
                        </div>

                        <div className="w-full lg:w-1/4 md:w-1/2 text-center lg:text-left mt-4 flex flex-col justify-between">
                            <img src="images/icon-star.png" className="w-10 lazy self-start py-2 mx-auto lg:mx-0" alt="Benefit Icon"/>

                            <div>
                                <h4 className="mb-0 font-bold">Second main product benefit</h4>
                                <p className="mb-0">Short text to support claim</p>
                            </div>
                        </div>

                        <div className="w-full lg:w-1/4 md:w-1/2 text-center lg:text-left mt-4 flex flex-col justify-between">
                            <img src="images/icon-idea.png" className="w-6 lazy self-start py-2 mx-auto lg:mx-0" alt="Benefit Icon"/>

                            <div>
                                <h4 className="mb-0 font-bold">Third main product benefit</h4>
                                <p className="mb-0">Short text to support claim</p>
                            </div>
                        </div>

                        <div className="w-full lg:w-1/4 md:w-1/2 text-center lg:text-left mt-4 flex flex-col justify-between">
                            <img src="images/icon-user.png" className="w-6 lazy self-start py-2 mx-auto lg:mx-0" alt="Benefit Icon"/>

                            <div>
                                <h4 className="mb-0 font-bold">Fourth main product benefit</h4>
                                <p className="mb-0">Short text to support claim</p>
                            </div>
                        </div>

                    </div>

                    <div className="flex  flex-col md:flex-row md:flex-wrap my-4">

                        <div className="w-full lg:w-1/4 md:w-1/2 text-center lg:text-left mt-4 flex flex-col justify-between">
                            <img src="images/icon-idea.png" className="w-6 lazy self-start py-2 mx-auto lg:mx-0" alt="Benefit Icon"/>

                            <div>
                                <h4 className="mb-0 font-bold">Another claim</h4>
                                <p className="mb-0">Short text to support claim</p>
                            </div>
                        </div>

                        <div className="w-full lg:w-1/4 md:w-1/2 text-center lg:text-left mt-4 flex flex-col justify-between">
                            <img src="images/icon-user.png" className="w-6 lazy self-start py-2 mx-auto lg:mx-0" alt="Benefit Icon"/>

                            <div>
                                <h4 className="mb-0 font-bold">Another claim</h4>
                                <p className="mb-0">Short text to support claim</p>
                            </div>
                        </div>

                        <div className="w-full lg:w-1/4 md:w-1/2 text-center lg:text-left mt-4 flex flex-col justify-between">
                            <img src="images/icon-star.png" className="w-10 lazy self-start py-2 mx-auto lg:mx-0" alt="Benefit Icon"/>

                            <div>
                                <h4 className="mb-0 font-bold">Another claim</h4>
                                <p className="mb-0">Short text to support claim</p>
                            </div>
                        </div>

                        <div className="w-full lg:w-1/4 md:w-1/2 text-center lg:text-left mt-4 flex flex-col justify-between">
                            <img src="images/icon-star.png" className="w-10 lazy self-start py-2 mx-auto lg:mx-0" alt="Benefit Icon"/>

                            <div>
                                <h4 className="mb-0 font-bold">Another claim</h4>
                                <p className="mb-0">Short text to support claim</p>
                            </div>
                        </div>

                    </div>

                    <div className="flex  flex-col md:flex-row md:flex-wrap my-4">

                        <div className="w-full lg:w-1/4 md:w-1/2 text-center lg:text-left mt-4 flex flex-col justify-between">
                            <img src="images/icon-settings.png" className="w-10 lazy self-start py-2 mx-auto lg:mx-0" alt="Benefit Icon"/>

                            <div>
                                <h4 className="mb-0 font-bold">Free migration</h4>
                                <p className="mb-0">Short text to support claim</p>
                            </div>
                        </div>

                        <div className="w-full lg:w-1/4 md:w-1/2 text-center lg:text-left mt-4 flex flex-col justify-between">
                            <img src="images/icon-star.png" className="w-10 lazy self-start py-2 mx-auto lg:mx-0" alt="Benefit Icon"/>

                            <div>
                                <h4 className="mb-0 font-bold">Usefull intergration</h4>
                                <p className="mb-0">Short text to support claim</p>
                            </div>
                        </div>

                        <div className="w-full lg:w-1/4 md:w-1/2 text-center lg:text-left mt-4 flex flex-col justify-between">
                            <img src="images/icon-idea.png" className="w-6 lazy self-start py-2 mx-auto lg:mx-0" alt="Benefit Icon"/>

                            <div>
                                <h4 className="mb-0 font-bold">Awesome support</h4>
                                <p className="mb-0">Short text to support claim</p>
                            </div>
                        </div>

                        <div className="w-full lg:w-1/4 md:w-1/2 text-center lg:text-left mt-4 flex flex-col justify-between">
                            <img src="images/icon-user.png" className="w-6 lazy self-start py-2 mx-auto lg:mx-0" alt="Benefit Icon"/>

                            <div>
                                <h4 className="mb-0 font-bold">Full refund</h4>
                                <p className="mb-0">Short text to support claim</p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

            <div className="bg-yellow-100 py-16 border-t border-yellow-300 px-4 md:px-16 lg:px-0">
                <div className="container mx-auto py-4">

                    <div className=" py-4">
                        <div className="lg:w-3/12 col-md-4 mx-auto text-center">
                            <img src="images/features-drawing-moonlanding.png" className="lazy mx-auto w-100 w-1/2 lg:w-full" alt="Drawing Moonlanding"/>
                        </div>
                    </div>

                    <div className="">
                        <div className="lg:w-3/6 mx-auto text-center">
                            <h2 className="text-2xl md:text-4xl lg:text-4xl font-bold">Or,ask if your visitor wants to solve problem X today</h2>
                            <p className="text-md md:text-xl lg:text-lg pt-4 pb-8 text-gray-800">Explain how your solution will solve this problem and ask them to start a free trial, or any other low-key CTA they could take.</p>
                            <div className="flex justify-center items-center flex- mb-2">
                                <a className="bg-yellow-500 hover:bg-yellow-600 rounded border border-yellow-600 hover:border-yellow-700 shadow font-semibold px-4 py-2 inline-block mx-2 cursor-pointer transition duration-500 ease-in-out">Make a new reservation</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>


            <footer className="py-8 text-center md:text-left">
                <div className="container mx-auto">
                    <div className=" flex flex-col lg:flex-row content-center items-center justify-between">
                        <div className="flex items-center flex-col lg:flex-row mx-auto">
                            <span className="ml-0 md:ml-4 text-sm text-gray-600 py-4 lg:py-0">AIPETTO Copyright &copy; 2021</span>
                        </div>

                        <div className="navbar mx-auto">
                            <ul className="navbar-nav flex flex-">
                                <li className=" active px-md-3 px-2">
                                    <a className=" text-gray-700 text-sm hover:text-gray-900 transition duration-500 ease-in-out" href="/">Home</a>
                                </li>
                                <li className=" px-md-3 px-2">
                                    <a className=" text-gray-700 text-sm hover:text-gray-900 transition duration-500 ease-in-out" href="#">Features</a>
                                </li>
                                <li className=" px-md-3 px-2">
                                    <a className=" text-gray-700 text-sm hover:text-gray-900 transition duration-500 ease-in-out" href="#">Become a Business</a>
                                </li>
                                <li>
                                    <a className="text-gray-700 text-sm hover:text-gray-900 transition duration-500 ease-in-out" href="/auth/signin">Login</a>
                                </li>
                                <li className="nav-item px-2 signup">
                                    <a className="text-md text-gray-900 px-3 py-2 bg-yellow-500 hover:bg-yellow-600 rounded border border-yellow-600 shadow font-semibold cursor-pointer transition duration-500 ease-in-out" href="/auth/signup">{i18n('auth.signup')}</a>
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
