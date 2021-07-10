import {
    faGifts,
} from '@fortawesome/free-solid-svg-icons';
import React, {Component} from 'react';
import LandingNavbar from "../layout/LandingNavbar";
import * as Survey from "survey-react";
import "survey-react/modern.css";
import { i18n, getLangFromBrowserNavigator } from 'src/i18n';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import surveyService from 'src/modules/landingSurvey/landingSurveyService';

Survey.StylesManager.applyTheme("modern");

class LandingPage extends Component {

    async onComplete(survey, options) {
        await surveyService.create(survey.data);
    }

    render (){
        var json = { questions: [
                {type: "text", name: "name", title: i18n('survey.nameTitle'), isRequired: true},
                {type: "text", name: "email", title: i18n('survey.emailTitle'), isRequired: true},
                {type: "text", name: "numberOfPets", title: i18n('survey.numberOfPets'), isRequired: true},
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
            ]};
        var survey = new Survey.Model(json);

        survey.locale =  localStorage.getItem('language') || 'es';
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
                        <p className="text-xl pt-4 pb-8 text-gray-700">{i18n('public.landingSubtitle')} <FontAwesomeIcon icon={faGifts} /></p>
                    </div>
                </div>

                <div className="text-center fade-in fade-in-second">
                    <div className="sm:hidden">
                        <img src="images/woman-pet-searching.png" alt="AIPETTO" className="lazy"/>
                    </div>
                </div>
                <div className="flex space-x-4 container mx-auto mt-8">
                    <div className="flex-1">
                        <Survey.Survey model={survey} onComplete={this.onComplete} />
                    </div>
                    <div className="flex-1">
                        <div className="text-center fade-in fade-in-second">
                            <div className="w-1/2 md:w-full">
                                <img src="images/woman-pet-searching.png" alt="AIPETTO" className="lazy"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="py-8 text-center md:text-left">
                <div className="container mx-auto">
                    <div className=" flex flex-col lg:flex-row content-center items-center justify-between">
                        <div className="flex items-center flex-col lg:flex-row mx-auto">
                            <span className="ml-0 md:ml-4 text-sm text-gray-600 py-4 lg:py-0">愛ペット AIPETTO, Copyright &copy; 2021</span>
                        </div>

                    </div>
                </div>
            </footer>
            </div>
        </>
        );
    };
};

export default LandingPage;
