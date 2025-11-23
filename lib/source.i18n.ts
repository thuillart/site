import { defineI18n } from "fumadocs-core/i18n";
import { routing } from "@/i18n/routing";

export const i18n = defineI18n({
	defaultLanguage: routing.defaultLocale,
	hideLocale: "always",
	languages: routing.locales.map((locale) => locale),
});
