import dk from "../../public/locales/dk/translations.json";
import en from "../../public/locales/en/translations.json";
import zh from "../../public/locales/zh/translations.json";

export const languages = {
	dk: "Dansk",
	en: "English",
	zh: "Chinese",
};

export const defaultLang = "en";

export const ui = {
	dk,
	en,
	zh,
} as const;
