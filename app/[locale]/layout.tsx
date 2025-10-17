import "@/app/globals.css";
import { Inter } from "next/font/google";
import { notFound } from "next/navigation";
import type { Metadata } from "next/types";
import { hasLocale, type Locale, NextIntlClientProvider } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Providers } from "@/app/providers";
import { routing } from "@/i18n/routing";
import { cn } from "@/lib/utils";

const inter = Inter({
	subsets: ["latin"],
});

export async function generateMetadata({
	params,
}: LayoutProps<"/[locale]">): Promise<Metadata> {
	const { locale } = await params;

	const t = await getTranslations({
		locale: locale as Locale,
		namespace: "LocaleLayout",
	});

	return {
		title: t("title"),
	};
}

export function generateStaticParams() {
	return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
	params,
	children,
}: LayoutProps<"/[locale]">) {
	const { locale } = await params;

	if (!hasLocale(routing.locales, locale)) {
		notFound();
	}

	setRequestLocale(locale);

	return (
		<html className="h-full" lang={locale} suppressHydrationWarning>
			<body
				className={cn(
					"mx-auto h-full max-w-screen-sm bg-background text-foreground antialiased",
					inter.className,
				)}
			>
				<NextIntlClientProvider>
					<Providers>{children}</Providers>
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
