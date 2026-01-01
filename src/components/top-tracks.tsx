import { Image } from "@unpic/react";

export function TopTracks() {
	return (
		<ol className="list-none space-y-3">
			<li className="flex items-center gap-3">
				<span className="w-5 text-muted-foreground text-sm tabular-nums">
					1
				</span>

				<Image
					className="size-8 rounded-sm object-cover"
					layout="fullWidth"
					src="https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/fa/4c/c0/fa4cc037-ab2b-d88a-04c4-11b3deefe964/195729535855_cover.jpg/632x632bb.webp"
				/>

				<a
					className="font-medium decoration-1 decoration-muted-foreground underline-offset-2 hover:underline"
					href="https://music.apple.com/us/album/midway/1615404722?i=1615404723"
					rel="noopener noreferrer"
					target="_blank"
				>
					Midway
				</a>
			</li>

			<li className="flex items-center gap-3">
				<span className="w-5 text-muted-foreground text-sm tabular-nums">
					2
				</span>

				<Image
					className="size-8 rounded-sm object-cover"
					layout="fullWidth"
					src="https://is1-ssl.mzstatic.com/image/thumb/Video115/v4/59/63/57/596357e6-84bf-5777-6d5e-ede706ba47f4/Job2d21a857-32da-4cb3-bdcd-3b1205e205d8-123783236-PreviewImage_preview_image_nonvideo_sdr-Time1631217886028.png/632x632bb.webp"
				/>

				<a
					className="font-medium decoration-1 decoration-muted-foreground underline-offset-2 hover:underline"
					href="https://music.apple.com/fr/song/stand/1582539415"
					rel="noopener noreferrer"
					target="_blank"
				>
					Stand
				</a>
			</li>

			<li className="flex items-center gap-3">
				<span className="w-5 text-muted-foreground text-sm tabular-nums">
					2
				</span>

				<Image
					className="size-8 rounded-sm object-cover"
					layout="fullWidth"
					src="https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/40/c9/d8/40c9d8d2-0a27-16a4-4c16-5818db560296/886447975121.jpg/208x208bb.webp"
				/>

				<a
					className="font-medium decoration-1 decoration-muted-foreground underline-offset-2 hover:underline"
					href="https://music.apple.com/us/album/come-back-to-us/1489939478?i=1489939767"
					rel="noopener noreferrer"
					target="_blank"
				>
					Come Back to Us
				</a>
			</li>
		</ol>
	);
}
