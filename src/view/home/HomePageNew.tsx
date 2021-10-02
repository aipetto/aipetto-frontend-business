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
            {type: "text", placeHolder: i18n('survey.whereAreYouLocatedPlaceholder'), name: "address", title: i18n('survey.whereAreYouLocated')},
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
            { type: "checkbox", name: "petProfession", title: i18n('survey.checkboxPetProfessionTitle'), isRequired: false, colCount: 6,
                choices:
                    [
                        i18n('survey.checkboxPetProfessionChoices.petTaxi'),
                        i18n('survey.checkboxPetProfessionChoices.petSitter'),
                        i18n('survey.checkboxPetProfessionChoices.dogWalker'),
                        i18n('survey.checkboxPetProfessionChoices.veterinarian'),
                        i18n('survey.checkboxPetProfessionChoices.surgeon'),
                        i18n('survey.checkboxPetProfessionChoices.groomer'),
                        i18n('survey.checkboxPetProfessionChoices.animalBlogger'),
                        i18n('survey.checkboxPetProfessionChoices.photographer'),
                        i18n('survey.checkboxPetProfessionChoices.petManicures'),
                        i18n('survey.checkboxPetProfessionChoices.therapeuticMassagist'),
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


            <nav className="p-4 nav-section w-full">
                <div className="container mx-auto">
                    <div className="flex justify-between flex- content-center items-center py-2 lg:py-0 px-0 lg:px-0">
                        <Link
                            to="/"
                            className="text-blueGray-700 font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap"
                        >
                            <h1 className="relative mb-4 text-3xl font-black leading-tight text-gray-900 sm:text-4xl xl:mb-8">aipetto</h1>
                        </Link>
                        <div className="hidden md:block">
                            <ul className="flex flex-row">
                                <li className="active">
                                    <a className="px-4 py-2 text-gray-700 hover:text-gray-900 transition duration-500 ease-in-out hover:rounded hover:bg-gray-200 rounded" href="/">{i18n('public.menu.petsSurvey')}</a>
                                </li>
                                <li>
                                    <a href="/business" className="px-4 py-2 text-gray-900 font-semibold hover:text-gray-900 transition duration-500 ease-in-out hover:rounded hover:bg-gray-200 rounded">{i18n('public.menu.business')}</a>
                                </li>
                                <li>
                                    <a className="px-4 py-2 text-gray-700 hover:text-gray-900 transition duration-500 ease-in-out hover:rounded hover:bg-gray-200 rounded" href="/professionals">{i18n('public.professionals')}</a>
                                </li>
                            </ul>
                        </div>
                        <div className="md:block">
                            <ul className="flex flex-">

                                <li>
                                    <I18nFlags />
                                </li>
                                <li className="nav-item px-2 signup">
                                    <a className="text-gray-900 px-3 py-2 bg-yellow-500 hover:bg-yellow-600 rounded border border-yellow-600 shadow font-semibold transition duration-500 ease-in-out cursor-pointer" href="/beta">Beta</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>

            <div className="container bg-green-300 mx-auto mt-4">
                <div className="py-8 md:py-16 hero__content text-center w-4/5 mx-auto fade-in fade-in-first">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">{i18n('homeDownloadApp.tagline')}</h2>
                    <h3 className="text-xl pt-4 pb-8 text-gray-700">{i18n('public.homeSubtitle')}</h3>

                    <div className="text-center fade-in fade-in-second">
                        <div className="">
                            <img src="images/conifer-1097.png" alt="aipetto" className="lazy mx-auto z-10 relative w-2/3 md:w-4/5 lg:w-1/3"/>
                        </div>
                    </div>


                    <div className="flex justify-center items-center flex- mb-2">
                        <a href="#" className="bg-yellow-500 hover:bg-yellow-600 rounded border border-yellow-600 hover:border-yellow-700 shadow font-semibold px-4 py-2 inline-block mx-2 cursor-pointer transition duration-500 ease-in-out">
                            {i18n('homeDownloadApp.bottomLead.downloadAppInGooglePlayStoreButton')}</a>
                        <a href="#"
                           className="rounded border border-gray-700 hover:bg-blue-300 px-4 py-2 inline-block mx-2 cursor-pointer transition duration-500 ease-in-out">
                            {i18n('homeDownloadApp.bottomLead.downloadAppInAppleStoreButton')}</a>
                    </div>
                </div>

            </div>

            <div className="features px-4 md:px-8">
                <div className="container mx-auto">


                    <div className="flex flex-col md:flex-row items-center content-center py-12 lg:pt-16 lg:pb-32">
                        <div className="feature-1 md:w-1/2 text-center mb-4 lg:mb-0 relative">
                            <img src={i18n('homeDownloadApp.step2.img')} className="lazy mx-auto z-10 relative w-2/3 lg:w-1/3" alt="Aipetto Vet Petshop Services"/>

                        </div>
                        <div className="w-full md:w-1/2 ">
                            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold"> {i18n('homeDownloadApp.step3.heading')}</h2>
                            <p className="text-md lg:text-lg pt-4 pb-8 text-gray-700">
                                {i18n('homeDownloadApp.step3.description')}
                            </p>
                            <ul className="usps">
                                <li className="text-gray-900 py-1">{i18n('businessSurvey.checkboxChoices.peluqueria')}</li>
                                <li className="text-gray-900 py-1">{i18n('businessSurvey.checkboxChoices.vacunacionDeGato')}</li>
                                <li className="text-gray-900 py-1">{i18n('businessSurvey.checkboxChoices.castracionDePerros')}</li>
                                <li className="text-gray-900 py-1">{i18n('businessSurvey.checkboxChoices.castracionDeGatos')}</li>
                                <li className="text-gray-900 py-1">{i18n('businessSurvey.checkboxChoices.analisisDeSangre')}</li>
                                <li className="text-gray-900 py-1">{i18n('businessSurvey.checkboxChoices.ecografia')}</li>
                                <li className="text-gray-900 py-1">{ i18n('businessSurvey.checkboxChoices.radiografia')}</li>
                                <li className="text-gray-900 py-1">{i18n('businessSurvey.checkboxChoices.urgencias')}</li>
                                <li className="text-gray-900 py-1">{i18n('businessSurvey.checkboxChoices.mais')}</li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row items-center content-center py-12 lg:pb-16 lg:pt-16">
                        <div className="feature-2 md:w-1/2 text-center order-first md:order-last mb-4 lg:mb-0 relative">
                            <img src={i18n('homeDownloadApp.step3.img')} className="lazy mx-auto z-10 relative w-2/3 lg:w-1/3" alt="Prices and Promos"/>
                        </div>
                        <div className="w-full md:w-1/2 order-last md:order-first">
                            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold">{i18n('homeDownloadApp.step2.heading')}</h2>
                            <p className="text-md lg:text-lg pt-4 pb-8 text-gray-700">
                                {i18n('homeDownloadApp.step2.description')}
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row items-center content-center py-12 lg:pt-16 lg:pb-32">
                        <div className="feature-3 w-full md:w-1/2 text-center px-4 px-md-0 mb-4 lg:mb-0 relative">
                            <img src={i18n('homeDownloadApp.step4.img')} className="lazy mx-auto z-10 relative w-2/3 lg:w-1/3" alt="Pick Day and Time"/>
                        </div>
                        <div className="w-full md:w-1/2">
                            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold"> {i18n('homeDownloadApp.step4.heading')}</h2>
                            <p className="text-md lg:text-lg pt-4 pb-8 text-gray-700">
                                {i18n('homeDownloadApp.step4.description')}
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row items-center content-center py-12 lg:pb-16 lg:pt-16">
                        <div className="feature-2 md:w-1/2 text-center order-first md:order-last mb-4 lg:mb-0 relative">
                            <img src={i18n('homeDownloadApp.step6.img')} className="lazy mx-auto z-10 relative w-2/3 lg:w-1/3" alt="Booking Confirmation"/>
                        </div>
                        <div className="w-full md:w-1/2 order-last md:order-first">
                            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold"> {i18n('homeDownloadApp.step6.heading')}</h2>
                            <p className="text-md lg:text-lg pt-4 pb-8 text-gray-700">
                                {i18n('homeDownloadApp.step6.description')}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto">
                <div className="py-8 hero__content text-center w-4/5 mx-auto fade-in fade-in-first">
                    <h3 className="object-center text-xl pt-4 pb-8 text-gray-700">{i18n('survey.title')}</h3>
                </div>

            </div>

            <div className="flex space-x-4 container mx-auto mt-8">
                <div className="flex-1">
                    <Survey.Survey model={survey} onComplete={onComplete} />
                </div>
            </div>

            <Footer logo='/images/logos/aipetto/aipetto-boarder.png'/>
        </div>
    );
 }
   return isLoaded ? renderHomePageNew() : <Spinner/>

};

export default HomePageNew;
