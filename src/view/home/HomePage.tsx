import React from 'react';
import {getLangFromBrowserNavigator, getLanguageCode, i18n} from 'src/i18n';
import Hero from "../../components/landingPage/Hero";
import Step from "../../components/landingPage/Step";
import BottomLead from "../../components/landingPage/BottomLead";
import Footer from "../../components/landingPage/Footer";
import * as Survey from "survey-react";
import "survey-react/modern.css";
import LandingNavbar from "../layout/LandingNavbar";
import {getGeocode, getLatLng} from "use-places-autocomplete";
import surveyService from "../../modules/landingSurvey/landingSurveyService";
import {Libraries} from "@react-google-maps/api/dist/utils/make-load-script-url";
import "@reach/combobox/styles.css";
import {useLoadScript} from "@react-google-maps/api";

import config from "../../config";
import Spinner from "../shared/Spinner";

async function onComplete(survey, options) {
    const result = await getGeocode({address: survey.data.address});
    const { lat, lng} = await getLatLng(result[0]);
    const surveyWithGoogleAddressGeoLocationsurvey = {...survey.data, latitude: lat, longitude: lng};
    await surveyService.create(surveyWithGoogleAddressGeoLocationsurvey);
}

function HomePage() {

    const libraries: Libraries = ["places"];

    const {isLoaded, loadError} = useLoadScript({
        googleMapsApiKey: config.credentialsGoogleMapsPlaceAPI,
        libraries,
        language: getLanguageCode()
    });

    const renderHomePage = () => {

        const data = {
            hero:{
                appType: i18n('homeDownloadApp.title'),
                tagLine: i18n('homeDownloadApp.tagline'),
                description: i18n('homeDownloadApp.description'),
                downloadAppInGooglePlayStoreButton: i18n('homeDownloadApp.downloadAppInGooglePlayStoreButton'),
                downloadAppInAppleStoreButton: i18n('homeDownloadApp.downloadAppInAppleStoreButton'),
            },
            step1: {
                title: i18n('homeDownloadApp.step1.title'),
                heading: i18n('homeDownloadApp.step1.heading'),
                    description: i18n('homeDownloadApp.step1.description'),
                img: i18n('homeDownloadApp.step1.img'),
                alternate: false,
            },
            step2: {
                title: i18n('homeDownloadApp.step2.title'),
                heading: i18n('homeDownloadApp.step2.heading'),
                description: i18n('homeDownloadApp.step2.description'),
                img: i18n('homeDownloadApp.step2.img'),
                alternate: true,
            },
            step3: {
                title: i18n('homeDownloadApp.step3.title'),
                heading: i18n('homeDownloadApp.step3.heading'),
                description: i18n('homeDownloadApp.step3.description'),
                img: i18n('homeDownloadApp.step3.img'),
                alternate: false,
            },
            step4: {
                title: i18n('homeDownloadApp.step4.title'),
                heading: i18n('homeDownloadApp.step4.heading'),
                description: i18n('homeDownloadApp.step4.description'),
                img: i18n('homeDownloadApp.step4.img'),
                alternate: true,
            },
            step5: {
                title: i18n('homeDownloadApp.step5.title'),
                heading: i18n('homeDownloadApp.step5.heading'),
                description: i18n('homeDownloadApp.step5.description'),
                img: i18n('homeDownloadApp.step5.img'),
                alternate: false,
            },
            step6: {
                title: i18n('homeDownloadApp.step6.title'),
                heading: i18n('homeDownloadApp.step6.heading'),
                description: i18n('homeDownloadApp.step6.description'),
                img: i18n('homeDownloadApp.step6.img'),
                alternate: true,
            },
            bottomLead: {
                actionText: i18n('homeDownloadApp.bottomLead.actionText'),
                description: i18n('homeDownloadApp.bottomLead.description'),
                downloadAppInGooglePlayStoreButton: i18n('homeDownloadApp.bottomLead.downloadAppInGooglePlayStoreButton'),
                downloadAppInAppleStoreButton: i18n('homeDownloadApp.bottomLead.downloadAppInAppleStoreButton'),
            },
        }

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

        return (
            <div className="box-border">
                <LandingNavbar fixed />
                <div className="flex flex-col">
                    <Hero
                        appType={data.hero.appType}
                        tagLine={data.hero.tagLine}
                        description={data.hero.description}
                        downloadAppInGooglePlayStoreButton={data.hero.downloadAppInGooglePlayStoreButton}
                        downloadAppInAppleStoreButton={data.hero.downloadAppInAppleStoreButton}
                    />

                    <div id="divider" className="rounded-full ring-2 ring-gray-200 lg:w-1/2 lg:mx-auto "></div>

                    <div id="faq" className="pt-20 mb-20 text-3xl font-semibold text-center text-blue-800 lg:font-bold">{i18n('homeDownloadApp.howTheAppWorks')}</div>

                    <Step
                        title={data.step1.title}
                        heading={data.step1.heading}
                        description={data.step1.description}
                        img={data.step1.img}
                        alternate={data.step1.alternate}
                    />
                    <Step
                        title={data.step2.title}
                        heading={data.step2.heading}
                        description={data.step2.description}
                        img={data.step2.img}
                        alternate={data.step2.alternate}
                    />
                    <Step
                        title={data.step3.title}
                        heading={data.step3.heading}
                        description={data.step3.description}
                        img={data.step3.img}
                        alternate={data.step3.alternate}
                    />

                    <Step
                        title={data.step4.title}
                        heading={data.step4.heading}
                        description={data.step4.description}
                        img={data.step4.img}
                        alternate={data.step4.alternate}
                    />

                    <Step
                        title={data.step5.title}
                        heading={data.step5.heading}
                        description={data.step5.description}
                        img={data.step5.img}
                        alternate={data.step5.alternate}
                    />

                    <Step
                        title={data.step6.title}
                        heading={data.step6.heading}
                        description={data.step6.description}
                        img={data.step6.img}
                        alternate={data.step6.alternate}
                    />

                    <BottomLead
                        actionText={data.bottomLead.actionText}
                        description={data.bottomLead.description}
                        downloadAppInGooglePlayStoreButton={data.bottomLead.downloadAppInGooglePlayStoreButton}
                        downloadAppInAppleStoreButton={data.bottomLead.downloadAppInAppleStoreButton}
                    />
                    <div className="flex space-x-4 container mx-auto mt-8">
                        <div className="flex-1">
                            <Survey.Survey model={survey} onComplete={onComplete} />
                        </div>
                    </div>
                    <Footer logo='/images/logos/aipetto/aipetto-boarder.png'/>
                </div>
            </div>

        );
    };

    return isLoaded ? renderHomePage() : <Spinner/>
};

export default HomePage;
