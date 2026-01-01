import { Image } from "@unpic/react";

export function TopArtists() {
	return (
		<ol className="list-none space-y-3">
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

			<li className="flex items-center gap-3">
				<span className="w-5 text-muted-foreground text-sm tabular-nums">
					2
				</span>

				<Image
					className="size-8 rounded-full object-cover"
					layout="fullWidth"
					src="https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/c8/4a/49/c84a494c-cf17-8915-dc98-44588531e40a/pr_source.png/380x380cc.webp"
				/>

				<a
					className="font-medium decoration-1 decoration-muted-foreground underline-offset-2 hover:underline"
					href="https://music.apple.com/us/artist/yebba/1289015994"
					rel="noopener noreferrer"
					target="_blank"
				>
					Yebba
				</a>
			</li>

			<li className="flex items-center gap-3">
				<span className="w-5 text-muted-foreground text-sm tabular-nums">
					3
				</span>

				<Image
					className="size-8 rounded-full object-cover"
					layout="fullWidth"
					src="https://is1-ssl.mzstatic.com/image/thumb/Features115/v4/b4/18/db/b418dbbc-c134-0fe5-e5c4-557421e789dd/pr_source.png/380x380cc.webp"
				/>

				<a
					className="font-medium decoration-1 decoration-muted-foreground underline-offset-2 hover:underline"
					href="https://music.apple.com/us/album/come-back-to-us/1489939478?i=1489939767"
					rel="noopener noreferrer"
					target="_blank"
				>
					Thomas Newman
				</a>
			</li>
		</ol>
	);
}
