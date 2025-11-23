"use client";

import { useParams } from "next/navigation";
import { useExtracted, useLocale } from "next-intl";
import { useTransition } from "react";
import { usePathname, useRouter } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

export function LocaleSwitcher() {
	const [_, startTransition] = useTransition();

	const pathname = usePathname();
	const params = useParams();
	const router = useRouter();
	const locale = useLocale();
	const t = useExtracted();

	function switchLocale(nextLocale: string) {
		startTransition(() => {
			router.replace(
				{
					// @ts-expect-error - params is not typed yet
					params,
					pathname,
				},
				{ locale: nextLocale },
			);
		});
	}

	return (
		<div className="absolute top-4 right-4 z-1 inline-flex gap-x-2">
			<button
				aria-label={t("Switch to French")}
				className={cn(
					"cursor-pointer",
					locale === "en" && "not-hover:opacity-50",
				)}
				onClick={() => switchLocale("fr")}
				type="button"
			>
				FR
			</button>

			<hr className="h-6 w-px border-none bg-border" />

			<button
				aria-label={t("Switch to English")}
				className={cn(
					"cursor-pointer",
					locale === "fr" && "not-hover:opacity-50",
				)}
				onClick={() => switchLocale("en")}
				type="button"
			>
				EN
			</button>
		</div>
	);
}
