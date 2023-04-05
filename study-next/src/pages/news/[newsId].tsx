import { News } from "@/types";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";

type Props = {
	news: News;
};

const NewsDetails: NextPage<Props> = ({ news }) => {
	return (
		<ul>
			<li>
				<p>title: {news?.title ?? "fallback中..."}</p>
				<p>content: {news?.content ?? "fallback中..."}</p>
			</li>
		</ul>
	);
};

export const getStaticPaths: GetStaticPaths = async () => {
	const res = await fetch(process.env.NEXT_PUBLIC_NEWS);
	const json = await res.json();

	const paths = json.map(({ newsId }: { newsId: any }) => ({
		params: { newsId },
	}));

	return {
		fallback: false,
		paths,
	};
};

// type Params = ParsedUrlQuery & { newsId: string };

export const getStaticProps: GetStaticProps = async (context: any) => {
	const newsId = context.params?.newsId;

	const res = await fetch(process.env.NEXT_PUBLIC_NEWS + "?newsId=" + newsId);
	const news = await res.json();

	return {
		props: { news: news[0] },
	};
};

export default NewsDetails;
