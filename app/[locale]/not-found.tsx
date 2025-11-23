"use client";

import { useExtracted } from "next-intl";

export default function NotFound() {
	const t = useExtracted();

	return (
		<div className="flex h-dvh flex-col items-center justify-center">
			<div className="inline-flex items-center">
				<h1 className="mr-5 inline-block border-border border-r pr-6 font-medium text-2xl/loose">
					404
				</h1>
				<h2 className="text-base">{t("This page doesn't exist.")}</h2>
			</div>
		</div>
	);
}
