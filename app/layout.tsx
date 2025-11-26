import "@/app/globals.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
	return children;
}

export const metadata: Metadata = {
	icons: {
		icon: [
			{
				media: "(prefers-color-scheme: light)",
				url: "/images/icon-light.svg",
			},
			{
				media: "(prefers-color-scheme: dark)",
				url: "/images/icon-dark.svg",
			},
		],
	},
};
