import React from 'react';
import _get from 'lodash/get';
import moment from 'moment';
import detectBrowserLanguage from 'detect-browser-language';
import {
  registerLocale,
  setDefaultLocale,
} from 'react-datepicker';
import { setLocale as setYupLocale } from 'yup';
import LanguagesService from "../modules/languages/languagesService";

let currentLanguageCode = '';

const languages: {
  [key: string]: {
    id: string;
    label: string;
    flag: string;
    dateFns: any;
    dictionary: any;
  };
} = {
  es: {
    id: 'es',
    label: 'Español',
    flag: '/images/flags/Argentina.png',
    dateFns: null,
    dictionary: null,
  },
  'pt-BR': {
    id: 'pt-BR',
    label: 'Português',
    flag: '/images/flags/Brazil.png',
    dateFns: null,
    dictionary: null,
  },
  en: {
    id: 'en',
    label: 'English',
    flag: '/images/flags/United-Kingdom.png',
    dateFns: null,
    dictionary: null,
  },
};

export async function init() {

  currentLanguageCode =
     localStorage.getItem('language') || getLangFromBrowserNavigator() || 'pt-BR';

  setLanguageCode(currentLanguageCode);

  if (currentLanguageCode === 'en' || currentLanguageCode === 'en-US') {
    await initEn();
  }

  if (currentLanguageCode === 'pt-BR' || currentLanguageCode === 'pt') {
    await initPtBr();
  }

  if (currentLanguageCode === 'es') {
    await initEs();
  }
}

// TODO this function when used on businessServiceTypesService for example returns undefined
// Maybe because of the await/async promise resolution
export async function getLanguageObjectId(){
  const languageService = await LanguagesService.listAutocomplete({}, {});
  const language = languageService.filter(langCode => langCode.label == getLanguageCode());
  return language[0].id;
}

async function initEs() {
  const language = languages['es'];

  // @ts-ignore
  const momentLocale = (await import('moment/locale/es'))
    .default;

  language.dateFns = (
    await import('date-fns/locale/es')
  ).default;

  registerLocale('es', language.dateFns);
  setDefaultLocale('es');

  language.dictionary = (
    await import('src/i18n/es')
  ).default;

  moment.locale('es', momentLocale);

  if (language.dictionary.validation) {
    setYupLocale(language.dictionary.validation);
  }

  return language;
}

async function initPtBr() {
  const language = languages['pt-BR'];

  // @ts-ignore
  const momentLocale = (await import('moment/locale/pt-br'))
    .default;

  language.dateFns = (
    await import('date-fns/locale/pt-BR')
  ).default;

  registerLocale('pt-BR', language.dateFns);
  setDefaultLocale('pt-BR');

  language.dictionary = (
    await import('src/i18n/pt-BR')
  ).default;

  moment.locale('pt-BR', momentLocale);

  if (language.dictionary.validation) {
    setYupLocale(language.dictionary.validation);
  }

  return language;
}

async function initEn() {
  const language = languages['en'];

  language.dictionary = (
    await import('src/i18n/en')
  ).default;

  if (language.dictionary.validation) {
    setYupLocale(language.dictionary.validation);
  }

  return language;
}

export function getLanguage() {
  return languages[getLanguageCode()];
}

function format(message, args) {
  if (!message) {
    return null;
  }

  try {
    return message.replace(/{(\d+)}/g, function (
      match,
      number,
    ) {
      return typeof args[number] != 'undefined'
        ? args[number]
        : match;
    });
  } catch (error) {
    console.error(message, error);
    throw error;
  }
}

function checkAgainstOurSystemLanguages(lang) {

  if (lang === 'es') {
    return 'es';
  }

  if (lang === 'pt' || lang === 'pt-BR') {
    return 'pt-BR';
  }

  if (lang === 'en-US' || lang === 'en') {
    return 'en';
  }
  // We want return undefined on purpose
  // If is undefined we go check if language is set on LocalStorage otherwise take default language (english)
  return undefined;
}

export function getLangFromBrowserNavigator(){
    return checkAgainstOurSystemLanguages(detectBrowserLanguage());
}

export function getLanguages() {
  return Object.keys(languages).map((language) => {
    return languages[language];
  });
}

export function getLanguageCode() {
  return currentLanguageCode;
}

export function setLanguageCode(arg) {

  if (!languages[arg]) {
    throw new Error(`Invalid language ${arg}.`);
  }

  localStorage.setItem('language', arg);
}

export function i18nExists(key) {
  if (!getLanguage()) {
    return false;
  }

  const message = _get(getLanguage().dictionary, key);
  return Boolean(message);
}

export function i18n(key, ...args) {
  if (!getLanguage()) {
    return key;
  }

  const message = _get(getLanguage().dictionary, key);

  if (!message) {
    return key;
  }

  return format(message, args);
}

export function i18nHtml(key, ...args) {
  return (
    <span
      dangerouslySetInnerHTML={{
        __html: i18n(key, ...args),
      }}
    />
  );
}
