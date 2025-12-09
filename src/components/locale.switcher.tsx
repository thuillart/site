import { cn } from "@/lib/utils";

export function LocaleSwitcher() {
	return (
		<div className="absolute top-4 right-4 z-1 inline-flex gap-x-2">
			<button
				// aria-label={t("Switch to French")}
				className={cn(
					"cursor-pointer",
					// locale === "en" && "not-hover:opacity-50",
				)}
				// onClick={() => handleLocale("fr")}
				type="button"
			>
				FR
			</button>

			<hr className="h-6 w-px border-none bg-border" />

			<button
				// aria-label={t("Switch to English")}
				className={cn(
					"cursor-pointer",
					// locale === "fr" && "not-hover:opacity-50",
				)}
				// onClick={() => handleLocale("en")}
				type="button"
			>
				EN
			</button>
		</div>
	);
}
