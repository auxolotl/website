import { ui, defaultLang, languages } from "./ui";
import type {
	InferGetStaticParamsType,
	InferGetStaticPropsType,
	GetStaticPaths,
} from "astro";

export function useTranslations(lang: keyof typeof ui) {
	return function t(key: keyof (typeof ui)[typeof defaultLang]) {
		return ui[lang][key] || ui[defaultLang][key];
	};
}

export const getStaticPaths = (async () => {
	return Object.keys(languages).map((name) => ({
		params: { lang: name as keyof typeof languages },
	}));
}) satisfies GetStaticPaths;

export type Params = InferGetStaticParamsType<typeof getStaticPaths>;
export type Props = InferGetStaticPropsType<typeof getStaticPaths>;
