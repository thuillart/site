import {
	createRootRoute,
	HeadContent,
	Outlet,
	Scripts,
	useParams,
} from "@tanstack/react-router";
import { TanstackProvider } from "fumadocs-core/framework/tanstack";
import { defineI18nUI } from "fumadocs-ui/i18n";
import { RootProvider } from "fumadocs-ui/provider/base";
import type { ReactNode } from "react";
import { i18n } from "@/lib/i18n";
import appCss from "@/styles/app.css?url";

export const Route = createRootRoute({
	component: RootComponent,
	head: () => ({
		links: [
			{
				href: appCss,
				rel: "stylesheet",
			},
		],
		meta: [
			{
				charSet: "utf-8",
			},
			{
				content: "width=device-width, initial-scale=1",
				name: "viewport",
			},
			{
				title: "Armand Thuillart",
			},
		],
	}),
});

function RootComponent() {
	return (
		<RootDocument>
			<Outlet />
		</RootDocument>
	);
}

const { provider } = defineI18nUI(i18n, {
	translations: {
		en: {
			displayName: "English",
		},
		fr: {
			displayName: "French",
		},
	},
});

function RootDocument({ children }: { children: ReactNode }) {
	const { lang = i18n.defaultLanguage } = useParams({
		strict: false,
	});

	return (
		<html lang={lang} suppressHydrationWarning>
			<head>
				<HeadContent />
			</head>
			<body className="relative bg-background font-sans text-foreground antialiased">
				<TanstackProvider>
					<RootProvider i18n={provider(lang)}>{children}</RootProvider>
				</TanstackProvider>
				<Scripts />
			</body>
		</html>
	);
}
