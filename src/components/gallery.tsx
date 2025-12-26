import { Image } from "@unpic/react";

type GalleryProps = {
	images: {
		url: string;
		alt: string;
	}[];
};

export function Gallery({ images }: GalleryProps) {
	return (
		<div className="relative my-8 block w-full md:left-1/2 md:my-16 md:w-screen md:max-w-6xl md:-translate-x-1/2">
			<div className="grid grid-cols-1 gap-4 md:grid-cols-2">
				{images.map((image) => (
					<button
						aria-label={`Open image: ${image.alt}`}
						className="cursor-pointer overflow-hidden rounded-md hover:opacity-90"
						key={image.url}
						type="button"
					>
						<Image
							alt={image.alt}
							className="size-full object-cover"
							layout="fullWidth"
							src={image.url}
						/>
					</button>
				))}
			</div>
		</div>
	);
}
