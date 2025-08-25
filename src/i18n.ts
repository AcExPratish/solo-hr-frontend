import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import Cookies from 'universal-cookie';

const cookies = new Cookies();
const fallbackLng = ['en'];
const initLang = cookies.get('i18next') || 'en';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: initLang,
    backend: {
      loadPath: `/assets/i18n/{{ns}}/{{lng}}.json`
    },
    fallbackLng,
    // whitelist: availableLanguages,
    debug: true, //false to turn off console warnings
    interpolation: {
      escapeValue: false
    },
    react: {
      useSuspense: true
    }
  });

// Function to change the language and update the backend path
export const changeLanguage = (lng: string) => {
  cookies.set('i18next', lng);
  if (lng) {
    i18n.use(Backend).init({
      backend: {
        loadPath: '#'
      }
    });
  }
};

export default i18n;
