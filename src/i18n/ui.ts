import de from "../../public/locales/de/translations.json";
import dk from "../../public/locales/dk/translations.json";
import en from "../../public/locales/en/translations.json";
import ja from "../../public/locales/ja/translations.json";

export const languages = {
	de: "Deutsch",
	dk: "Dansk",
	en: "English",
	ja: "日本語",
};

export const defaultLang = "en";

export const ui = {
	de,
	dk,
	en,
	ja,
} as const;
