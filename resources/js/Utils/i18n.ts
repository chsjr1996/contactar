import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import translations from '@Root/_i18n';

type AppLangs = 'en-US' | 'pt-BR';

const initializeI18n = (lang: AppLangs) => {
  const i18nConfig = {
    resources: translations(),
    lng: lang || 'en-US',
    fallbackLng: 'pt-BR',
  };

  i18n.use(LanguageDetector).use(initReactI18next).init(i18nConfig);

  return i18n;
};

export { initializeI18n };
