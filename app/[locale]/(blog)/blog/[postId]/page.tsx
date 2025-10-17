export default async function PostPage({
	params,
}: PageProps<"/[locale]/post/[postId]">) {
	const { postId } = await params;

	return <div />;
}
