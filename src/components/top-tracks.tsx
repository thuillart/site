import { Image } from "@unpic/react";

export function TopTracks() {
	return (
		<ol>
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
		</ol>
	);
}
