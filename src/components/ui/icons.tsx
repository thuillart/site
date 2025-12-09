import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

function ArrowUpRightIcon({ className, ...props }: ComponentProps<"svg">) {
	return (
		<svg
			aria-hidden="true"
			className={cn("pointer-events-none shrink-0 select-none", className)}
			fill="none"
			height="24"
			stroke="currentColor"
			strokeLinecap="square"
			strokeWidth={1.5}
			viewBox="0 0 24 24"
			width="24"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path d="M17.5 15V6.5H9.00003M17.0714 6.9286L6.50003 17.5" />
		</svg>
	);
}

export const Icon = {
	ArrowUpRight: ArrowUpRightIcon,
};
