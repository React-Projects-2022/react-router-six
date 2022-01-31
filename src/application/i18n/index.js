import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const allowedLanguages = ["en", "es", "eu"];

let lng = allowedLanguages[0];

const storageLanguage = localStorage.getItem("language");
if (storageLanguage && allowedLanguages.indexOf(storageLanguage) > -1) {
  lng = storageLanguage;
}

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  // .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: lng,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        favourite: {
          add: "Add bookmark",
          delete: "Delete in bookmark",
          registry_pages: "Favourite pages:"
        },
        navbar: {
          about: "About",
          admin: "Admin",
          contact: "Contact",
          fav_history: "Favourite Log: ",
          home: "Home",
          not_found: "Not found",
        },
      },
      es: {
        favourite: {
          add: "Add bookmark",
          delete: "Delete in bookmark",
          registry_pages: "Páginas favoritas:"
        },
        navbar: {
          about: "Sobre mí",
          admin: "Administración",
          contact: "Contacto",
          fav_history: "Histórico de favoritos: ",
          home: "Inicio",
          not_found: "No encontrado",
        },
      },
      eu: {
        favourite: {
          add: "Gehitu gogokoetan",
          delete: "Ezabatu gogokoetatik",
          registry_pages: "Gogoko orrialdeak:"
        },
        navbar: {
          about: "Niri buruz",
          admin: "Kudeatzailea",
          contact: "Kontaktua",
          fav_history: "Gogokoen erregistroa: ",
          home: "Hasiera",
          not_found: "Ez aurkitua",
        },
      },
    },
    react: {
      // Turn off the use of React Suspense
      useSuspense: false,
    },
  });

export default i18n;
