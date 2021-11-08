import React from 'react';
import {getLangFromBrowserNavigator, getLanguageCode, i18n} from 'src/i18n';
import {Link} from "react-router-dom";
import Footer from "../../components/landingPage/Footer";
import I18nFlags from "../layout/I18nFlags";
import "survey-react/modern.css";
import {getGeocode, getLatLng} from "use-places-autocomplete";
import surveyService from "../../modules/landingSurvey/landingSurveyService";
import {Libraries} from "@react-google-maps/api/dist/utils/make-load-script-url";
import "@reach/combobox/styles.css";
import {useLoadScript} from "@react-google-maps/api";

import config from "../../config";
import * as Survey from "survey-react";
import Spinner from "../shared/Spinner";

Survey.StylesManager.applyTheme("modern");

async function onComplete(survey, options) {
    const result = await getGeocode({address: survey.data.address});
    const { lat, lng} = await getLatLng(result[0]);
    const surveyWithGoogleAddressGeoLocationsurvey = {...survey.data, latitude: lat, longitude: lng};
    await surveyService.create(surveyWithGoogleAddressGeoLocationsurvey);
}

function HomePageNew() {

    const libraries: Libraries = ["places"];

    const {isLoaded, loadError} = useLoadScript({
        googleMapsApiKey: config.credentialsGoogleMapsPlaceAPI,
        libraries,
        language: getLanguageCode()
    });

    var json = { questions: [
            {type: "text", name: "name", title: i18n('survey.nameTitle'), isRequired: true},
            {type: "text", name: "email", title: i18n('survey.emailTitle'), isRequired: true},
            {type: "text", name: "numberOfPets", title: i18n('survey.numberOfPets'), isRequired: true},
            {type: "text", placeHolder: i18n('survey.whereAreYouLocatedPlaceholder'), name: "address", title: i18n('survey.whereAreYouLocatedPlaceholder')},
            { type: "checkbox", name: "interests", title: i18n('survey.checkboxTitle'), isRequired: true, colCount: 6,
                choices:
                    [
                        i18n('survey.checkboxChoices.saveMoneyOnServices'),
                        i18n('survey.checkboxChoices.findTheClosestPlaceToGetServices'),
                        i18n('survey.checkboxChoices.findWhereToPlayWithMyPet'),
                        i18n('survey.checkboxChoices.knowMoreAboutPets'),
                        i18n('survey.checkboxChoices.adoptAPet'),
                        i18n('survey.checkboxChoices.getMoreMedicalInformation'),
                        i18n('survey.checkboxChoices.beAbleToChatWithAVeterinarian'),
                        i18n('survey.checkboxChoices.seeWhatPetsMyFriendsHave'),
                        i18n('survey.checkboxChoices.findATrustedPersonToWalkMyPet'),
                    ]},
            {type: "text", name: "extraInfo", title: i18n('survey.extraInfo')},
            { type: "boolean", name: "allowReceiveNotifications", title: i18n('survey.allowNotificationTitle'), isRequired: true},
        ]};
    var survey = new Survey.Model(json);

    survey.locale =  localStorage.getItem('language') || getLangFromBrowserNavigator() || 'pt-BR';
    survey.completeText = i18n('survey.surveyCompleteButton');
    survey.completedHtml = i18n('survey.surveyCompleteMessage');

    const renderHomePageNew = () => {
    return (
        <div className="antialiased overflow-hidden overflow-y-scroll">

            <section className="w-full px-3 antialiased bg-green-400 lg:px-6">
                <div className="mx-auto max-w-7xl">

                    <nav className="flex items-center w-full h-24 select-none">
                        <Link
                            to="/"
                            className="text-blueGray-700 pl-6 pr-4 font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap"
                        >
                            <h1 className="relative mb-4 text-3xl font-black leading-tight text-gray-900 sm:text-4xl xl:mb-8">Aipetto</h1>
                        </Link>
                        <div className="relative flex flex-wrap items-center justify-between w-full h-24 mx-auto font-medium md:justify-center">

                            <div className="top-0 left-0 z-40 items-center w-full h-full p-3 text-xl md:text-sm lg:text-base md:w-3/4 md:bg-transparent md:p-0 md:relative md:flex">

                                    <div className="hidden md:flex flex flex-col items-center justify-center w-full h-full mt-12 text-center text-green-400 md:text-green-50 md:w-2/3 md:mt-0 md:flex-row md:items-center">
                                        <a className="px-4 py-2 md:text-white text-gray-700 hover:text-gray-900 transition duration-500 ease-in-out hover:rounded hover:bg-gray-200 rounded" href="/">{i18n('public.menu.petsSurvey')}</a>
                                        <a href="/business" className="md:text-white px-4 py-2 text-gray-900 font-semibold hover:text-gray-900 transition duration-500 ease-in-out hover:rounded hover:bg-gray-200 rounded">{i18n('public.menu.business')}</a>
                                    </div>
                                    <div className="flex flex-col items-center justify-end w-full h-full pt-4 md:w-1/3 md:flex-row md:py-0">
                                        <a className="text-gray-900 px-3 py-2 bg-yellow-500 hover:bg-yellow-600 rounded border-transparent border-yellow-600 shadow font-semibold transition duration-500 ease-in-out cursor-pointer" href="/beta">Beta</a>
                                    </div>
                                </div>
                        </div>
                    </nav>
                    <I18nFlags />

                    <div className="container py-32 mx-auto text-center sm:px-4">

                        <h2 className="text-4xl font-extrabold leading-10 tracking-tight text-white sm:text-5xl sm:leading-none md:text-6xl xl:text-7xl">

                            <span className="block ">{i18n('homeDownloadApp.tagline')}</span> <span
                            className="relative inline-block mt-3 text-transparent text-white">
                            {i18n('public.homeSubtitle')}
                        </span>
                        </h2>
                        <div className="relative flex items-center mt-10 max-w-md mx-auto overflow-hidden text-center">
                            <img src="images/qr-aipetto-internaltest.png" alt="aipetto" className="lazy mx-auto z-10 relative w-2/3 md:w-3/5 lg:w-2/3"/>
                        </div>

                        <div className="mt-8 text-black-100">

                            <a href="#" className="bg-yellow-500 hover:bg-yellow-600 rounded border border-yellow-600 hover:border-yellow-700 shadow font-semibold px-4 py-2 inline-block mx-2 cursor-pointer transition duration-500 ease-in-out">
                                  <span className="flex h-3 w-3">
                                        <span className="animate-ping relative inline-flex rounded-full h-3 w-3 bg-purple-500"/>
                                  </span>
                                {i18n('homeDownloadApp.bottomLead.downloadAppInGooglePlayStoreButton')}
                            </a>
                            <a href="#"
                               className="rounded border border-gray-700 hover:bg-blue-300 px-4 py-2 inline-block mx-2 cursor-pointer transition duration-500 ease-in-out">
                                {i18n('homeDownloadApp.bottomLead.downloadAppInAppleStoreButton')}</a>
                        </div>

                    </div>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="container max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold tracking-tight text-center">{i18n('featuresHome.ourFeatures')}</h2>
                    <p className="mt-2 text-lg text-center text-gray-600">
                        {i18n('featuresHome.checkOurList')}
                    </p>
                    <div className="grid grid-cols-4 gap-8 mt-10 sm:grid-cols-8 lg:grid-cols-12 sm:px-8 xl:px-0">

                        <div
                            className="relative flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 overflow-hidden bg-gray-100 sm:rounded-xl">
                            <div className="p-3 text-white bg-green-400 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 " viewBox="0 0 24 24"
                                     stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round"
                                     stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                    <path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
                                    <path d="M5 8v-3a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2h-5"></path>
                                    <circle cx="6" cy="14" r="3"></circle>
                                    <path d="M4.5 17l-1.5 5l3 -1.5l3 1.5l-1.5 -5"></path>
                                </svg>
                            </div>
                            <h4 className="text-xl font-medium text-gray-700"> {i18n('featuresHome.bookingSystem')}</h4>
                            <p className="text-base text-center text-gray-500">{i18n('featuresHome.bookingSystemDescription')}</p>
                        </div>

                        <div
                            className="flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 bg-gray-100 sm:rounded-xl">
                            <div className="p-3 text-white bg-green-400 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 " viewBox="0 0 24 24"
                                     stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round"
                                     stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                    <path d="M18 8a3 3 0 0 1 0 6"></path>
                                    <path d="M10 8v11a1 1 0 0 1 -1 1h-1a1 1 0 0 1 -1 -1v-5"></path>
                                    <path
                                        d="M12 8h0l4.524 -3.77a0.9 .9 0 0 1 1.476 .692v12.156a0.9 .9 0 0 1 -1.476 .692l-4.524 -3.77h-8a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h8"></path>
                                </svg>
                            </div>
                            <h4 className="text-xl font-medium text-gray-700">{i18n('featuresHome.notifications')}</h4>
                            <p className="text-base text-center text-gray-500">{i18n('featuresHome.notificationsDescription')}</p>
                        </div>

                        <div
                            className="flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 bg-gray-100 sm:rounded-xl">
                            <div className="p-3 text-white bg-green-400 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 " viewBox="0 0 24 24"
                                     stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round"
                                     stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                    <polyline points="12 3 20 7.5 20 16.5 12 21 4 16.5 4 7.5 12 3"></polyline>
                                    <line x1="12" y1="12" x2="20" y2="7.5"></line>
                                    <line x1="12" y1="12" x2="12" y2="21"></line>
                                    <line x1="12" y1="12" x2="4" y2="7.5"></line>
                                    <line x1="16" y1="5.25" x2="8" y2="9.75"></line>
                                </svg>
                            </div>
                            <h4 className="text-xl font-medium text-gray-700">{i18n('featuresHome.petProfile')}</h4>
                            <p className="text-base text-center text-gray-500">{i18n('featuresHome.petProfileDescription')}</p>
                        </div>

                    </div>
                </div>
            </section>


            <section className="w-full bg-white pt-7 pb-7 md:pt-20 md:pb-24">
                <div
                    className="box-border flex flex-col items-center content-center px-8 mx-auto leading-6 text-black border-0 border-gray-300 border-solid md:flex-row max-w-7xl lg:px-16">

                    <div
                        className="box-border relative w-full max-w-md px-4 mt-5 mb-4 -ml-5 text-center bg-no-repeat bg-contain border-solid md:ml-0 md:mt-0 md:max-w-none lg:mb-0 md:w-1/2 xl:pl-10">
                        <div className="z-20 flex items-center order-1 bg-green-400 shadow-xl w-80 h-80 rounded-full">
                            <h2 className="mx-auto animate-pulse text-white font-semibold text-6xl">
                                1
                            </h2>
                        </div>
                    </div>

                    <div
                        className="box-border order-first w-full text-black border-solid md:w-1/2 md:pl-10 md:order-none">
                        <h2 className="m-0 text-xl font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl">
                            {i18n('homeDownloadApp.step3.heading')}


                        </h2>
                        <p className="pt-4 pb-8 m-0 leading-7 text-gray-700 border-0 border-gray-300 sm:pr-12 xl:pr-32 lg:text-lg">
                            {i18n('homeDownloadApp.step3.description')}
                        </p>
                        <ul className="usps">
                            <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid"><span
                                className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-green-300 rounded-full"><span
                                className="text-sm font-bold">✓</span></span>
                                {i18n('businessSurvey.checkboxChoices.peluqueria')}</li>
                            <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid"><span
                                className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-green-300 rounded-full"><span
                                className="text-sm font-bold">✓</span></span>{i18n('businessSurvey.checkboxChoices.vacunacionDeGato')}</li>
                            <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid"><span
                                className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-green-300 rounded-full"><span
                                className="text-sm font-bold">✓</span></span>{i18n('businessSurvey.checkboxChoices.castracionDePerros')}</li>
                            <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid"><span
                                className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-green-300 rounded-full"><span
                                className="text-sm font-bold">✓</span></span>{i18n('businessSurvey.checkboxChoices.castracionDeGatos')}</li>
                            <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid"><span
                                className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-green-300 rounded-full"><span
                                className="text-sm font-bold">✓</span></span>{i18n('businessSurvey.checkboxChoices.analisisDeSangre')}</li>
                            <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid"><span
                                className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-green-300 rounded-full"><span
                                className="text-sm font-bold">✓</span></span>{i18n('businessSurvey.checkboxChoices.ecografia')}</li>
                            <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid"><span
                                className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-green-300 rounded-full"><span
                                className="text-sm font-bold">✓</span></span>{ i18n('businessSurvey.checkboxChoices.radiografia')}</li>
                            <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid"><span
                                className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-green-300 rounded-full"><span
                                className="text-sm font-bold">✓</span></span>{i18n('businessSurvey.checkboxChoices.urgencias')}</li>
                            <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid"><span
                                className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-green-300 rounded-full"><span
                                className="text-sm font-bold">✓</span></span>{i18n('businessSurvey.checkboxChoices.mais')}</li>
                        </ul>
                    </div>

                </div>


                <div
                    className="box-border flex flex-col items-center content-center px-20 mx-auto mt-20 leading-6 text-black border-0 border-gray-300 border-solid xl:mt-20 md:flex-row max-w-7xl lg:px-16">
                    <div className="box-border w-full text-black border-solid md:w-1/2 md:pl-6 xl:pl-32">
                        <h2 className="m-0 text-xl font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl">
                            {i18n('homeDownloadApp.step2.heading')}
                        </h2>
                        <p className="pt-4 pb-8 m-0 leading-7 text-gray-700 border-0 border-gray-300 sm:pr-10 lg:text-lg">
                            {i18n('homeDownloadApp.step2.description')}
                        </p>

                    </div>
                    <div
                        className="box-border relative w-full max-w-md px-4 mt-10 mb-4 text-center bg-no-repeat bg-contain border-solid md:mt-0 md:max-w-none lg:mb-2 md:w-1/2">
                        <div className="z-20 flex items-center order-1 bg-gray-300 shadow-xl w-80 h-80 rounded-full">
                            <h2 className="mx-auto animate-pulse text-white font-semibold text-6xl">2</h2>
                        </div>
                    </div>
                </div>


                <div
                    className="box-border flex flex-col items-center content-center px-8 mx-auto leading-6 text-black border-0 border-gray-300 border-solid md:flex-row max-w-7xl lg:px-16">
                    <div
                        className="box-border relative w-full max-w-md px-4 mt-5 mb-4 -ml-5 text-center bg-no-repeat bg-contain border-solid md:ml-0 md:mt-0 md:max-w-none lg:mb-20 md:w-1/2 xl:pl-10">
                        <div className="z-20 flex items-center order-1 bg-gray-300 shadow-xl w-80 h-80 rounded-full">
                            <h2 className="mx-auto text-white animate-pulse font-semibold text-6xl">3</h2>
                        </div>
                    </div>
                    <div
                        className="box-border order-first w-full text-black border-solid md:w-1/2 md:pl-10 md:order-none">
                        <h2 className="m-0 text-xl font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl">
                            {i18n('homeDownloadApp.step4.heading')}
                        </h2>
                        <p className="pt-4 pb-8 m-0 leading-7 text-gray-700 border-0 border-gray-300 sm:pr-12 xl:pr-32 lg:text-lg">
                            {i18n('homeDownloadApp.step4.description')}
                        </p>
                    </div>
                </div>


                <div
                    className="box-border flex flex-col items-center content-center px-8 mx-auto mt-2 leading-6 text-black border-0 border-gray-300 border-solid md:mt-20 xl:mt-20 md:flex-row max-w-7xl lg:px-16">
                    <div className="box-border w-full text-black border-solid md:w-1/2 md:pl-6 xl:pl-32">
                        <h2 className="m-0 text-xl font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl">
                            {i18n('homeDownloadApp.step6.heading')}
                        </h2>
                        <p className="pt-4 pb-8 m-0 leading-7 text-gray-700 border-0 border-gray-300 sm:pr-10 lg:text-lg">
                            {i18n('homeDownloadApp.step6.description')}
                        </p>
                    </div>
                    <div
                        className="box-border relative w-full max-w-md px-4 mt-10 mb-4 text-center bg-no-repeat bg-contain border-solid md:mt-0 md:max-w-none lg:mb-20 md:w-1/2">
                            <img src="images/petAnimationHappiness.gif" className="rounded-full w-80 h-80"/>
                    </div>
                </div>

            </section>

            <Footer logo='/images/logos/aipetto/aipetto-boarder.png'/>
        </div>
    );
 }
   return isLoaded ? renderHomePageNew() : <Spinner/>

};

export default HomePageNew;
