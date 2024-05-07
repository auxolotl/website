import en from "../../public/locales/en/translations.json"
import es from "../../public/locales/es/translations.json"

export const languages = {
	en: 'English',
	es: 'Español'
};

export const defaultLang = 'en';

export const ui = {
	en,
	es,
} as const;
