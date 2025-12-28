import { Image } from "@unpic/react";

export function TopArtists() {
	return (
		<ol>
			<li className="flex items-center gap-3">
				<span className="w-5 text-muted-foreground text-sm tabular-nums">
					1
				</span>

				<Image
					className="size-8 rounded-full object-cover"
					layout="fullWidth"
					src="https://is1-ssl.mzstatic.com/image/thumb/AMCArtistImages221/v4/23/70/8c/23708cfb-17fa-ef2a-be7f-3eef07874d41/ami-identity-069924203e1e2a9aecc8ba5e9647c278-2025-09-02T23-33-31.991Z_cropped.png/380x380cc.webp"
				/>

				<a
					className="font-medium decoration-1 decoration-muted-foreground underline-offset-2 hover:underline"
					href="https://music.apple.com/us/artist/tony-anderson/19063662"
					rel="noopener noreferrer"
					target="_blank"
				>
					Tony Anderson
				</a>
			</li>
		</ol>
	);
}
