import "@/app/globals.css";
import { STIX_Two_Text } from "next/font/google";
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { LocaleSwitcher } from "@/components/locale.switcher";
import { ThemesProvider } from "@/components/provider.theme";
import { routing } from "@/i18n/routing";
import { cn } from "@/lib/utils";

const stix = STIX_Two_Text({
	weight: ["400", "500"],
});

export function generateStaticParams() {
	return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
	children,
	params,
}: LayoutProps<"/[locale]">) {
	const { locale } = await params;

	if (!hasLocale(routing.locales, locale)) {
		notFound();
	}

	setRequestLocale(locale);

	return (
		<html lang={locale} suppressHydrationWarning>
			<body
				className={cn(
					"relative bg-background text-foreground antialiased",
					stix.className,
				)}
			>
				<ThemesProvider>
					<NextIntlClientProvider>
						<LocaleSwitcher />
						{children}
					</NextIntlClientProvider>
				</ThemesProvider>
			</body>
		</html>
	);
}
