import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    backend: {
      loadPath: '../locales/{{lng}}/{{ns}}.json',
    },
    fallbackLng: navigator.language || 'en',
    ns: ['common'],
    debug: true,
    detection: {
      order: ['queryString', 'cookie'],
      cache: ['cookie'],
    },
    interpolation: {
      escapeValue: false,
      formatSeparator: ',',
    },
    react: {
      useSuspense: true,
    },
  });

export default i18n;
