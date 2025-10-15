export default async function Page({ params }: PageProps<"/blog/[id]">) {
	const { id } = await params;

	return <div />;
}
