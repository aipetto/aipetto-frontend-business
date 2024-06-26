import {
    faGifts,
} from '@fortawesome/free-solid-svg-icons';
import React, {useCallback, useEffect} from 'react';
import LandingNavbar from "../layout/LandingNavbar";
import * as Survey from "survey-react";
import "survey-react/modern.css";
import {i18n, getLangFromBrowserNavigator, getLanguageCode} from 'src/i18n';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import surveyService from 'src/modules/landingSurvey/landingSurveyService';
import {Libraries} from "@react-google-maps/api/dist/utils/make-load-script-url";
import "@reach/combobox/styles.css";
import {getGeocode, getLatLng} from "use-places-autocomplete";
import {useLoadScript} from "@react-google-maps/api";
import Spinner from "../shared/Spinner";
import detectBrowserLanguage from 'detect-browser-language';

import {
    GoogleReCaptchaProvider,
    useGoogleReCaptcha
} from 'react-google-recaptcha-v3';
import config from 'src/config';

Survey.StylesManager.applyTheme("modern");

async function onComplete(survey, options) {
    const result = await getGeocode({address: survey.data.address});
    const { lat, lng} = await getLatLng(result[0]);
    const surveyWithGoogleAddressGeoLocationsurvey = {...survey.data, latitude: lat, longitude: lng};
    await surveyService.create(surveyWithGoogleAddressGeoLocationsurvey);
}

function LandingPage() {

    const libraries: Libraries = ["places"];

    const {isLoaded, loadError} = useLoadScript({
        googleMapsApiKey: config.credentialsGoogleMapsPlaceAPI,
        libraries,
        language: getLanguageCode()
    });

    const renderSurvey = () => {

        var json = { questions: [
                {type: "text", name: "name", title: i18n('survey.nameTitle'), isRequired: true},
                {type: "text", name: "email", title: i18n('survey.emailTitle'), isRequired: true},
                {type: "text", placeHolder: i18n('survey.whereAreYouLocatedPlaceholder'), name: "address", title: i18n('survey.whereAreYouLocated')},
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
                { type: "boolean", name: "allowReceiveNotifications", title: i18n('survey.allowNotificationTitle'), isRequired: true},
            ]};
        var survey = new Survey.Model(json);

        survey.locale =  localStorage.getItem('language') || getLangFromBrowserNavigator() || 'pt-BR';
        survey.completeText = i18n('survey.surveyCompleteButton');
        survey.completedHtml = i18n('survey.surveyCompleteMessage');

        return(
            <>
                <div className="antialiased overflow-hidden overflow-y-scroll">
                    <div className="hero w-full">
                        <LandingNavbar fixed />

                        <div className="container mx-auto mt-8">
                            <div className="py-0 md:py-16 hero__content text-center w-4/5 mx-auto fade-in fade-in-first">
                                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">{i18n('public.landingTitle')}</h1>
                                <p className="text-xl pt-4 pb-8 text-gray-700">{i18n('public.landingSubtitle')}</p>
                            </div>
                        </div>

                        <div className="text-center fade-in fade-in-second">
                            <div className="sm:hidden">
                                <img src="images/illustrations/pet-ball-playing.png" alt="aipetto" className="lazy"/>
                            </div>
                        </div>
                        <div className="flex space-x-4 container mx-auto mt-8">
                            <div className="flex-1">
                                <Survey.Survey model={survey} onComplete={onComplete} />
                            </div>
                            <div className="md:flex-1 flex-none">
                                <div className="text-center fade-in fade-in-second">
                                    <div className="w-1/2 md:w-full">
                                        <img src="images/illustrations/pet-ball-playing.png" alt="aipetto" className="lazy"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <footer className="py-8 text-center md:text-left">
                        <div className="container mx-auto">
                            <div className=" flex flex-col lg:flex-row content-center items-center justify-between">
                                <div className="flex items-center flex-col lg:flex-row mx-auto">
                                    <span className="ml-0 md:ml-4 text-sm text-gray-600 py-4 lg:py-0">愛ペット Aipetto, Copyright &copy; 2021</span>
                                </div>

                            </div>
                        </div>
                    </footer>
                </div>
            </>
        );
    }

    return isLoaded ? renderSurvey() : <Spinner/>
};

function LandingPageWithGoogleReCaptchProvider() {
    return (
        <GoogleReCaptchaProvider reCaptchaKey={config.clientGoogleRecaptchaV3}>
            <LandingPage />
        </GoogleReCaptchaProvider>
    )
}

export default LandingPageWithGoogleReCaptchProvider;
