import i18n from "i18next";
import { initReactI18next, Translation } from "react-i18next";
import Backend from "i18next-http-backend";
import laungageDetector from "i18next-browser-languagedetector";

import uzLaungage from "./public/locales/uz.json";
import ruLaungage from "./public/locales/ru.json";
import enLaungage from "./public/locales/en.json";

i18n
  .use(Backend)
  .use(laungageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "uz",
    lng: "uz",
    debug: true,
    resources: {
      uz: { translation: uzLaungage },
      ru: { translation: ruLaungage },
      en: { translation: enLaungage },
    },
  });

export default i18n;
