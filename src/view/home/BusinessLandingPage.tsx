import {
    faGifts,
} from '@fortawesome/free-solid-svg-icons';
import React, {Component} from 'react';
import LandingNavbar from "../layout/LandingNavbar";
import * as Survey from "survey-react";
import "survey-react/modern.css";
import { i18n } from 'src/i18n';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import surveyService from 'src/modules/landingSurvey/landingSurveyService';

Survey.StylesManager.applyTheme("modern");

class BusinessLandingPage extends Component {

    async onComplete(survey, options) {
        //console.log("Survey results: " + JSON.stringify(survey.data));
        await surveyService.create(survey.data);
    }

    render (){
        var json = { questions: [
                {type: "text", name: "name", title: i18n('survey.nameTitle'), isRequired: true},
                {type: "text", name: "email", title: i18n('survey.emailTitle'), isRequired: true},
                {type: "text", name: "numberOfPets", title: i18n('survey.numberOfPets'), isRequired: true},
                { type: "checkbox", name: "services", title: i18n('survey.checkboxTitle'), isRequired: true, colCount: 6,
                 choices:
                     [
                     i18n('businessSurvey.checkboxChoices.acupultura'),
                   ]},
                {type: "text", name: "extraInfo", title: i18n('survey.extraInfo')},
            ]};
        var survey = new Survey.Model(json);
        survey.locale = localStorage.getItem('language') || 'en';
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
                        <p className="text-xl pt-4 pb-8 text-gray-700">{i18n('public.landingSubtitle')} <FontAwesomeIcon icon={faGifts} /> <FontAwesomeIcon icon={faGifts} /></p>
                    </div>
                </div>

                <div className="container mx-auto mt-8">
                    <div className="flex space-x-4">
                        <div className="flex-1">
                            <Survey.Survey model={survey} onComplete={this.onComplete} />
                        </div>
                        <div className="flex-1">
                            <div className="text-center fade-in fade-in-second hidden md:block">
                                <div className="">
                                    <div className="hero-mockup w-5/8 sm:col-4/6 w-4/5 lg:w-full mx-auto relative">
                                        <img src="images/pet-business-services.png" alt="AIPETTO" className="lazy"/>
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
                            <span className="ml-0 md:ml-4 text-sm text-gray-600 py-4 lg:py-0">AIPETTO, Copyright &copy; 2021</span>
                        </div>
                    </div>
                </div>
            </footer>
            </div>
        </>
        );
    };
};

export default BusinessLandingPage;
