import { News } from "@/types";
import { GetStaticProps, NextPage } from "next";
import Link from "next/link";

type Props = {
	news: News[];
};

const News: NextPage<Props> = ({ news }) => {
	return (
		<ul>
			{news.map((item) => (
				<Link key={item.newsId} href={`/news/${item.newsId}`}>
					<li>{item.title}</li>
				</Link>
			))}
		</ul>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	const res = await fetch(process.env.NEXT_PUBLIC_NEWS);
	const news = await res.json();

	return {
		props: { news },
	};
};

export default News;
