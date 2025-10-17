import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
	"inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium text-sm outline-none transition-[ring,border] ease-anticipate focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 [&>svg]:pointer-events-none",
	{
		defaultVariants: {
			size: "icon",
			variant: "ghost",
		},
		variants: {
			size: {
				icon: "size-8",
				"icon-sm": "size-8",
			},
			variant: {
				ghost: "hover:bg-muted",
			},
		},
	},
);

interface ButtonProps
	extends ComponentProps<"button">,
		VariantProps<typeof buttonVariants> {}

function Button({ size, variant, className, ...props }: ButtonProps) {
	return (
		<button
			className={cn(buttonVariants({ className, size, variant }))}
			{...props}
		/>
	);
}

export { Button, buttonVariants };
