import React from 'react';
import { i18n } from 'src/i18n';
import Navbar from "../../components/landingPage/Navbar";
import Hero from "../../components/landingPage/Hero";
import Step from "../../components/landingPage/Step";
import BottomLead from "../../components/landingPage/BottomLead";
import Footer from "../../components/landingPage/Footer";
import Zendesk from "react-zendesk";
import LandingNavbar from "../layout/LandingNavbar";
const ZENDESK_KEY = "1df1c63f-c930-4a11-8d6f-6e3b242b7303";

const HomePage = (props) => {
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
                <Footer logo='/images/logos/aipetto/aipetto-boarder.png'/>
                <Zendesk defer zendeskKey={ZENDESK_KEY} onLoaded={() => console.log('Aipetto Zen up and running')} />
            </div>
        </div>

    );
};
export default HomePage;
