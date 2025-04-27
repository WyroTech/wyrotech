import {defaultLang, ui} from "./ui";

export function getLangFromUrl(url: URL, language: string | null) {
	const [, lang] = url.pathname.split("/");
	if (lang in ui) return lang as keyof typeof ui;
	if (typeof language === "string" && language.includes("de")) return "de";
	return defaultLang;
}

export function getLangFromWindow() {
	const [, lang] = window.location.pathname.split("/");
	if (lang in ui) return lang as keyof typeof ui;
	const language = document.documentElement.lang;
	if (typeof language === "string" && language.includes("de")) return "de";
	return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
	return function t(key: keyof (typeof ui)[typeof defaultLang]) {
		return ui[lang][key] || ui[defaultLang][key];
	};
}
