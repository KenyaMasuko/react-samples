import Head from "next/head";
import { Inter } from "next/font/google";
import Image from "next/image";
import { Layout } from "@/components/Layout";
import { client } from "@/libs/client";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const getStaticProps = async () => {
	const data = await client.get({ endpoint: "blogs" });

	return {
		props: {
			blogs: data.contents,
		},
	};
};

const Home = ({ blogs }: { blogs: any }) => {
	return (
		<>
			<Head>
				<title>Next.js Blog - Top</title>
				<meta name="description" content="Next.jsで作るHeadless CMSブログ" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Layout>
				<div className="bg-white py-6 sm:py-8 lg:py-12">
					<div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
						<div className="mb-10 md:mb-16">
							<h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">
								Blog
							</h2>

							<p className="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">
								Next.jsの勉強用に作成した micro
								CMSブログです。自分で色々カスタマイズしてみましょう。
							</p>
						</div>
						<ul className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 xl:gap-8">
							{blogs.map((blog: any) => (
								<li
									key={blog.id}
									className="flex flex-col bg-white border rounded-lg overflow-hidden">
									<Link
										href={`/blog/${blog.id}`}
										className="group h-48 md:h-64 block bg-gray-100 overflow-hidden relative">
										<Image
											src={blog.eyecatch.url}
											loading="lazy"
											alt=""
											className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200"
											width={blog.eyecatch.width}
											height={blog.eyecatch.height}
										/>
									</Link>

									<div className="flex flex-col flex-1 p-4 sm:p-6">
										<h2 className="text-gray-800 text-lg font-semibold mb-2">
											<Link
												href={`/blog/${blog.id}`}
												className="hover:text-indigo-500 active:text-indigo-600 transition duration-100">
												{blog.title}
											</Link>
										</h2>

										<div className="flex justify-between items-end mt-auto">
											<div className="flex items-center gap-2">
												<div>
													<span className="block text-gray-400 text-sm">
														{blog.createdAt}
													</span>
												</div>
											</div>

											<span className="text-gray-500 text-sm border rounded px-2 py-1">
												Article
											</span>
										</div>
									</div>
								</li>
							))}
						</ul>
					</div>
				</div>
			</Layout>
		</>
	);
};

export default Home;
