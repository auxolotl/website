import de from "../../public/locales/de/translations.json"
import en from "../../public/locales/en/translations.json"

export const languages = {
	de: 'Deutsch',
	en: 'English'
};

export const defaultLang = 'en';

export const ui = {
	de,
	en,
} as const;
