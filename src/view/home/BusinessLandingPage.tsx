import {
    faStore,
} from '@fortawesome/free-solid-svg-icons';
import React, {useCallback, useEffect} from 'react';
import LandingNavbar from "../layout/LandingNavbar";
import * as Survey from "survey-react";
import "survey-react/modern.css";
import { i18n, getLangFromBrowserNavigator } from 'src/i18n';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import businessSurveyService from 'src/modules/newBusinessSurvey/newBusinessSurveyService';
import {
    GoogleReCaptchaProvider,
    useGoogleReCaptcha
} from 'react-google-recaptcha-v3';
import config from 'src/config';
import detectBrowserLanguage from 'detect-browser-language';

Survey.StylesManager.applyTheme("modern");

async function onComplete(survey, options) {
    await businessSurveyService.create(survey.data);
}

function BusinessLandingPage(){

    const renderBusinessSurvey = () => {
        var json = { questions: [
                {type: "text", name: "nameBusiness", title: i18n('businessSurvey.businessNameTitle'), isRequired: true},
                {type: "text", name: "numberOfEmployees", title: i18n('businessSurvey.numberEmployees'), isRequired: true},
                {type: "text", name: "contactName", title: i18n('businessSurvey.nameTitle'), isRequired: true},
                {type: "text", name: "contactEmail", title: i18n('businessSurvey.emailTitle'), isRequired: true},
                {type: "text", name: "contactPhone", title: i18n('businessSurvey.contactPhone'), isRequired: true},
                {type: "text", name: "digitalNetworks", title: i18n('businessSurvey.websiteSocialNetwork'), isRequired: true},
                { type: "checkbox", name: "services", title: i18n('businessSurvey.checkboxTitle'), isRequired: true, colCount: 6,
                 choices:
                     [
                         i18n('businessSurvey.checkboxChoices.acupuntura'),
                         i18n('businessSurvey.checkboxChoices.castracionDeGatos'),
                         i18n('businessSurvey.checkboxChoices.castracionDePerros'),
                         i18n('businessSurvey.checkboxChoices.cirurgiaDeUrgencia'),
                         i18n('businessSurvey.checkboxChoices.corteDeUnas'),
                         i18n('businessSurvey.checkboxChoices.cuidadosIntesivos'),
                         i18n('businessSurvey.checkboxChoices.desparasitacionDeGatos'),
                         i18n('businessSurvey.checkboxChoices.desparasitacionDePerros'),
                         i18n('businessSurvey.checkboxChoices.diagnosticoDeGestacion'),
                         i18n('businessSurvey.checkboxChoices.ecocardiogramaYElectrocardiograma'),
                         i18n('businessSurvey.checkboxChoices.ecografia'),
                         i18n('businessSurvey.checkboxChoices.eutanasiaYCremacion'),
                         i18n('businessSurvey.checkboxChoices.examenMedico'),
                         i18n('businessSurvey.checkboxChoices.examenNeurologico'),
                         i18n('businessSurvey.checkboxChoices.extraccionDental'),
                         i18n('businessSurvey.checkboxChoices.hospitalizacion'),
                         i18n('businessSurvey.checkboxChoices.identificacionAnimal'),
                         i18n('businessSurvey.checkboxChoices.masaje'),
                         i18n('businessSurvey.checkboxChoices.odontologia'),
                         i18n('businessSurvey.checkboxChoices.oncologia'),
                         i18n('businessSurvey.checkboxChoices.pasaporteComunitarioParaAnimalesDeCompania'),
                         i18n('businessSurvey.checkboxChoices.pastillasAnticonceptivasParaGatas'),
                         i18n('businessSurvey.checkboxChoices.peluqueria'),
                         i18n('businessSurvey.checkboxChoices.programaDeReduccionDePeso'),
                         i18n('businessSurvey.checkboxChoices.pruebaDeAlergia'),
                         i18n('businessSurvey.checkboxChoices.quimioterapia'),
                         i18n('businessSurvey.checkboxChoices.radiografia'),
                         i18n('businessSurvey.checkboxChoices.rehabilitacion'),
                         i18n('businessSurvey.checkboxChoices.tienda'),
                         i18n('businessSurvey.checkboxChoices.urgencias'),
                         i18n('businessSurvey.checkboxChoices.vacunacionDeGato'),
                         i18n('businessSurvey.checkboxChoices.vacunacionDePerro'),
                   ]},
                { type: "boolean", name: "allowReceiveNotifications", title: i18n('businessSurvey.allowNotificationTitle'), isRequired: true},
            ]};
        var survey = new Survey.Model(json);

        survey.locale = localStorage.getItem('language') || getLangFromBrowserNavigator() || 'pt-BR';
        survey.completeText = i18n('survey.surveyCompleteButton');
        survey.completedHtml = i18n('survey.surveyCompleteMessage');

        return(
        <>
            <div className="antialiased overflow-hidden overflow-y-scroll">

            <div className="hero w-full">

                <LandingNavbar fixed />

                <div className="container mx-auto mt-8">
                    <div className="py-0 md:py-16 hero__content text-center w-4/5 mx-auto fade-in fade-in-first">
                        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">{i18n('public.landingBusinessTitle')}</h1>
                        <p className="text-xl pt-4 pb-8 text-gray-700">{i18n('public.landingBusinessSubtitle')} <FontAwesomeIcon icon={faStore} /></p>
                    </div>
                </div>

                <div className="container mx-auto mt-8">
                    <div className="flex space-x-4">
                        <div className="flex-1">
                            <Survey.Survey model={survey} onComplete={onComplete} />
                        </div>
                        <div className="flex-1">
                            <div className="text-center fade-in fade-in-second hidden md:block">
                                <div className="">
                                    <div className="hero-mockup w-5/8 sm:col-4/6 w-4/5 lg:w-full mx-auto relative">
                                        <img src="images/pet-business-services.png" alt="aipetto" className="lazy"/>
                                    </div>
                                </div>
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
    };
    return renderBusinessSurvey();
};

function BusinessLandingPageWithGoogleReCaptchProvider() {
    return (
        <GoogleReCaptchaProvider reCaptchaKey={config.clientGoogleRecaptchaV3}>
            <BusinessLandingPage />
        </GoogleReCaptchaProvider>
    )
}

export default BusinessLandingPageWithGoogleReCaptchProvider;
