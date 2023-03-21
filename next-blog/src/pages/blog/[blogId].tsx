import { Layout } from "@/components/Layout";
import { client } from "@/libs/client";
import Head from "next/head";

export const getStaticPaths = async () => {
	const data = await client.get({ endpoint: "blogs" });

	const paths = data.contents.map((content: any) => `/blog/${content.id}`);
	return { paths, fallback: false };
};

export const getStaticProps = async (context: any) => {
	const id = context.params.id;
	const data = await client.get({ endpoint: "blogs", contentId: id });

	return {
		props: {
			blog: data.contents[0],
		},
	};
};

const BlogDetail = ({ blog }: { blog: any }) => {
	return (
		<>
			<Head>
				<title>{blog.title}</title>
				<meta
					name="description"
					content="Next.jsで作るHeadless CMSブログ - 詳細ページ"
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Layout>
				<div className="bg-white py-6 sm:py-8 lg:py-12">
					<div className="max-w-screen-md px-4 md:px-8 mx-auto">
						<div
							dangerouslySetInnerHTML={{
								__html: `${blog.content}`,
							}}></div>
					</div>
				</div>
			</Layout>
		</>
	);
};

export default BlogDetail;
