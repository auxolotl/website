import dk from "../../public/locales/dk/translations.json";
import en from "../../public/locales/en/translations.json";
import ja from "../../public/locales/ja/translations.json";

export const languages = {
	dk: "Dansk",
	en: "English",
	ja: "日本語",
};

export const defaultLang = "en";

export const ui = {
	dk,
	en,
	ja,
} as const;
