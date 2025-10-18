export default function PostsPage() {
	return (
		<>
			<div className="grid grid-cols-3 gap-5">
				<span className="col-span-full font-medium text-lg">Products</span>

				{[1, 2, 3].map((index) => (
					<div
						className="aspect-video rounded-xl border border-border bg-muted"
						key={index}
					/>
				))}
			</div>
			
			<div className="grid grid-cols-3 gap-5">
				<span className="col-span-full font-medium text-lg">Videos</span>

				{[1, 2, 3].map((index) => (
					<div
						className="aspect-video rounded-xl border border-border bg-muted"
						key={index}
					/>
				))}
			</div>

			<div className="grid grid-cols-3 gap-5">
				<span className="col-span-full font-medium text-lg">Posts</span>

				{[1, 2, 3].map((index) => (
					<div
						className="aspect-video rounded-xl border border-border bg-muted"
						key={index}
					/>
				))}
			</div>
		</>
	);
}
