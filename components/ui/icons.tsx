import type { SVGProps } from "react";
import { cn } from "@/lib/utils";

export function XIcon(props: SVGProps<SVGSVGElement>) {
	return (
		<svg
			aria-hidden="true"
			fill="none"
			height="24"
			stroke="currentColor"
			strokeWidth="2"
			viewBox="0 0 24 24"
			width="24"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M3 21L10.5484 13.4516M21 3L13.4516 10.5484M13.4516 10.5484L8 3H3L10.5484 13.4516M13.4516 10.5484L21 21H16L10.5484 13.4516"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

export function BlueskyIcon({ className, ...props }: SVGProps<SVGSVGElement>) {
	return (
		<svg
			aria-hidden="true"
			className={cn(
				"transition-all ease-anticipate group-hover/button:fill-[#0382FA]",
				className,
			)}
			fill="currentColor"
			height="24"
			viewBox="0 0 24 24"
			width="24"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M12 11.4683C11.8883 11.2572 7.22767 2.5 3.07938 2.5C0.803292 2.5 1.50479 7.77778 2.02965 10.4167C2.24186 11.4836 3.07938 14.6389 7.80316 14.1111C7.80316 14.1111 3.60424 14.6389 3.60424 17.2778C3.60424 18.8611 6.22856 21.5 8.32802 21.5C10.3836 21.5 11.9361 16.9462 12 16.7561C12.064 16.9462 13.6164 21.5 15.672 21.5C17.7715 21.5 20.3958 18.8611 20.3958 17.2778C20.3958 14.6389 16.1969 14.1111 16.1969 14.1111C20.9206 14.6389 21.7582 11.4836 21.9704 10.4167C22.4952 7.77778 23.1967 2.5 20.9206 2.5C16.7724 2.5 12.1117 11.2572 12 11.4683Z"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

export function ThreadsIcon(props: SVGProps<SVGSVGElement>) {
	return (
		<svg
			aria-hidden="true"
			fill="none"
			height="24"
			stroke="currentColor"
			strokeWidth="2"
			viewBox="0 0 24 24"
			width="24"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M19.25 8.50488C17.6729 2.63804 12.25 3.00452 12.25 3.00452C12.25 3.00452 4.75 2.50512 4.75 12C4.75 21.4949 12.25 20.9955 12.25 20.9955C12.25 20.9955 16.7077 21.2924 18.75 17.0782C19.4167 15.2204 19.25 11.5049 12.75 11.5049C12.75 11.5049 9.75 11.5049 9.75 14.0049C9.75 14.9812 10.75 16.0049 12.25 16.0049C13.75 16.0049 15.4212 14.9777 15.75 13.0049C16.75 7.00488 11.25 6.50488 9.75 9.00488"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

export function YouTubeIcon({ className, ...props }: SVGProps<SVGSVGElement>) {
	return (
		<svg
			aria-hidden="true"
			className={cn(
				"transition-all ease-anticipate group-hover/button:fill-[#FF0034]",
				className,
			)}
			fill="currentColor"
			height="24"
			viewBox="0 0 24 24"
			width="24"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				clipRule="evenodd"
				d="M12 3.25C9.52631 3.25 7.17304 3.40962 5.04751 3.69767C2.78476 4.0043 1.25 5.99235 1.25 8.19868V15.8013C1.25 18.0076 2.78476 19.9957 5.04751 20.3023C7.17304 20.5904 9.52631 20.75 12 20.75C14.4737 20.75 16.827 20.5904 18.9525 20.3023C21.2152 19.9957 22.75 18.0076 22.75 15.8013V8.19869C22.75 5.99235 21.2152 4.0043 18.9525 3.69767C16.827 3.40962 14.4737 3.25 12 3.25ZM10.3859 8.35688C10.1542 8.21786 9.86561 8.21422 9.63048 8.34735C9.39534 8.48048 9.25 8.7298 9.25 9V15C9.25 15.2702 9.39534 15.5195 9.63048 15.6526C9.86561 15.7858 10.1542 15.7821 10.3859 15.6431L15.3859 12.6431C15.6118 12.5076 15.75 12.2634 15.75 12C15.75 11.7366 15.6118 11.4924 15.3859 11.3569L10.3859 8.35688Z"
				fillRule="evenodd"
			/>
			<path
				className="group-hover/button:fill-white"
				d="M10.3859 8.35688C10.1542 8.21786 9.86561 8.21422 9.63048 8.34735C9.39534 8.48048 9.25 8.7298 9.25 9V15C9.25 15.2702 9.39534 15.5195 9.63048 15.6526C9.86561 15.7858 10.1542 15.7821 10.3859 15.6431L15.3859 12.6431C15.6118 12.5076 15.75 12.2634 15.75 12C15.75 11.7366 15.6118 11.4924 15.3859 11.3569L10.3859 8.35688Z"
				fill="transparent"
			/>
		</svg>
	);
}

export const ArrowUpRightIcon = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg
			aria-hidden="true"
			fill="none"
			height="24"
			strokeWidth="2"
			viewBox="0 0 24 24"
			width="24"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M17.5 15V6.5H9.00003M17.0714 6.9286L6.50003 17.5"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};
