import dk from "../../public/locales/dk/translations.json";
import en from "../../public/locales/en/translations.json";

export const languages = {
	dk: "Dansk",
	en: "English",
};

export const defaultLang = "en";

export const ui = {
	dk,
	en,
} as const;
