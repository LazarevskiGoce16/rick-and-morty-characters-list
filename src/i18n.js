import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
    en: {
        translation: {
            title: "Rick & Morty Characters",
            status: "Status",
            species: "Species",
            gender: "Gender",
            origin: "Origin",
            loadMore: "Load More",
            footerText: "Rick & Morty Characters",
            all: "All",
            alive: "Alive",
            dead: "Dead",
            unknown: "Unknown",
            human: "Human",
            alien: "Alien",
            filterTitle: "Filters",
            sortByName: "Sort by Name",
            sortByOrigin: "Sort by Origin",
            prevPage: "Previous",
            nextPage: "Next",
            sortBy: "Sort by:"
        }
    },
    de: {
        translation: {
            title: "Rick & Morty Charaktere",
            status: "Status",
            species: "Spezies",
            gender: "Geschlecht",
            origin: "Herkunft",
            loadMore: " Mehr Laden",
            footerText: "Rick & Morty Charaktere",
            all: "Alle",
            alive: "Lebendig",
            dead: "Tot",
            unknown: "Unbekannt",
            human: "Mensch",
            alien: "Außerirdischer",
            filterTitle: "Filter",
            sortByName: "Nach Name sortieren",
            sortByOrigin: "Nach Herkunft sortieren",
            prevPage: "Zurück",
            nextPage: "Weiter",
            sortBy: "Sortieren nach:"
        }
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "en",
        interpolation: { escapeValue: false }
});
console.log("i18n initialized with language:", i18n.language);

export default i18n;