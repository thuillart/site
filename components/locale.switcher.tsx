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

	function handleLocale(next: string) {
		startTransition(() => {
			router.replace(
				{
					// @ts-expect-error - untyped
					params,
					pathname,
				},
				{ locale: next },
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
				onClick={() => handleLocale("fr")}
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
				onClick={() => handleLocale("en")}
				type="button"
			>
				EN
			</button>
		</div>
	);
}
