"use client";

import { ThemeProvider, type ThemeProviderProps } from "next-themes";

function ThemesProvider({ children, ...props }: ThemeProviderProps) {
	return (
		<ThemeProvider
			attribute="class"
			defaultTheme="system"
			disableTransitionOnChange
			enableSystem
			{...props}
		>
			{children}
		</ThemeProvider>
	);
}

export { ThemesProvider };
