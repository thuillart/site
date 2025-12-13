import { useNavigate } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

export function LangSwitcher({ lang }: { lang: string }) {
	const navigate = useNavigate();

	function handleLangChange(newLang: string) {
		navigate({
			params: {
				lang: newLang,
			},
			to: "/$lang/$",
		});
	}

	return (
		<div className="absolute top-4 right-4 z-1 inline-flex gap-x-2">
			<button
				aria-label="Passer en français"
				className={cn(
					"cursor-pointer",
					lang === "en" && "not-hover:opacity-50",
				)}
				onClick={() => handleLangChange("fr")}
				type="button"
			>
				FR
			</button>

			<hr className="h-6 w-px border-none bg-border" />

			<button
				aria-label="Switch to English"
				className={cn(
					"cursor-pointer",
					lang === "fr" && "not-hover:opacity-50",
				)}
				onClick={() => handleLangChange("en")}
				type="button"
			>
				EN
			</button>
		</div>
	);
}
