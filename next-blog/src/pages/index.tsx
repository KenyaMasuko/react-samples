import Head from "next/head";
import { Inter } from "next/font/google";
import Image from "next/image";
import { Layout } from "@/components/Layout";

const inter = Inter({ subsets: ["latin"] });

const Home = () => {
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
								This is a section of some simple filler text, also known as
								placeholder text. It shares some characteristics of a real
								written text but is random or otherwise generated.
							</p>
						</div>

						<div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 xl:gap-8">
							<div className="flex flex-col bg-white border rounded-lg overflow-hidden">
								<a
									href="#"
									className="group h-48 md:h-64 block bg-gray-100 overflow-hidden relative">
									<Image
										src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600"
										loading="lazy"
										alt="Photo by Minh Pham"
										className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200"
										width={64}
										height={96}
									/>
								</a>

								<div className="flex flex-col flex-1 p-4 sm:p-6">
									<h2 className="text-gray-800 text-lg font-semibold mb-2">
										<a
											href="#"
											className="hover:text-indigo-500 active:text-indigo-600 transition duration-100">
											New trends in Tech
										</a>
									</h2>

									<p className="text-gray-500 mb-8">
										This is a section of some simple filler text, also known as
										placeholder text. It shares some characteristics of a real
										written text.
									</p>

									<div className="flex justify-between items-end mt-auto">
										<div className="flex items-center gap-2">
											<div className="w-10 h-10 shrink-0 bg-gray-100 rounded-full overflow-hidden">
												<Image
													src="https://images.unsplash.com/photo-1611898872015-0571a9e38375?auto=format&q=75&fit=crop&w=64"
													loading="lazy"
													alt="Photo by Brock Wegner"
													className="w-full h-full object-cover object-center"
													width={64}
													height={96}
												/>
											</div>

											<div>
												<span className="block text-indigo-500">Mike Lane</span>
												<span className="block text-gray-400 text-sm">
													July 19, 2021
												</span>
											</div>
										</div>

										<span className="text-gray-500 text-sm border rounded px-2 py-1">
											Article
										</span>
									</div>
								</div>
							</div>

							<div className="flex flex-col bg-white border rounded-lg overflow-hidden">
								<a
									href="#"
									className="group h-48 md:h-64 block bg-gray-100 overflow-hidden relative">
									<Image
										src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&q=75&fit=crop&w=600"
										loading="lazy"
										alt="Photo by Lorenzo Herrera"
										className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200"
										width={64}
										height={96}
									/>
								</a>

								<div className="flex flex-col flex-1 p-4 sm:p-6">
									<h2 className="text-gray-800 text-lg font-semibold mb-2">
										<a
											href="#"
											className="hover:text-indigo-500 active:text-indigo-600 transition duration-100">
											Working with legacy stacks
										</a>
									</h2>

									<p className="text-gray-500 mb-8">
										This is a section of some simple filler text, also known as
										placeholder text. It shares some characteristics of a real
										written text.
									</p>

									<div className="flex justify-between items-end mt-auto">
										<div className="flex items-center gap-2">
											<div className="w-10 h-10 shrink-0 bg-gray-100 rounded-full overflow-hidden">
												<Image
													src="https://images.unsplash.com/photo-1586116104126-7b8e839d5b8c?auto=format&q=75&fit=crop&w=64"
													loading="lazy"
													alt="Photo by peter bucks"
													className="w-full h-full object-cover object-center"
													width={64}
													height={96}
												/>
											</div>

											<div>
												<span className="block text-indigo-500">
													Jane Jackobs
												</span>
												<span className="block text-gray-400 text-sm">
													April 07, 2021
												</span>
											</div>
										</div>

										<span className="text-gray-500 text-sm border rounded px-2 py-1">
											Article
										</span>
									</div>
								</div>
							</div>

							<div className="flex flex-col bg-white border rounded-lg overflow-hidden">
								<a
									href="#"
									className="group h-48 md:h-64 block bg-gray-100 overflow-hidden relative">
									<Image
										src="https://images.unsplash.com/photo-1542759564-7ccbb6ac450a?auto=format&q=75&fit=crop&w=600"
										loading="lazy"
										alt="Photo by Magicle"
										className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200"
										width={64}
										height={96}
									/>
								</a>

								<div className="flex flex-col flex-1 p-4 sm:p-6">
									<h2 className="text-gray-800 text-lg font-semibold mb-2">
										<a
											href="#"
											className="hover:text-indigo-500 active:text-indigo-600 transition duration-100">
											10 best smartphones for devs
										</a>
									</h2>

									<p className="text-gray-500 mb-8">
										This is a section of some simple filler text, also known as
										placeholder text. It shares some characteristics of a real
										written text.
									</p>

									<div className="flex justify-between items-end mt-auto">
										<div className="flex items-center gap-2">
											<div className="w-10 h-10 shrink-0 bg-gray-100 rounded-full overflow-hidden">
												<Image
													src="https://images.unsplash.com/photo-1592660503155-7599a37f06a6?auto=format&q=75&fit=crop&w=64"
													loading="lazy"
													alt="Photo by Jassir Jonis"
													className="w-full h-full object-cover object-center"
													width={64}
													height={96}
												/>
											</div>

											<div>
												<span className="block text-indigo-500">
													Tylor Grey
												</span>
												<span className="block text-gray-400 text-sm">
													March 15, 2021
												</span>
											</div>
										</div>

										<span className="text-gray-500 text-sm border rounded px-2 py-1">
											Article
										</span>
									</div>
								</div>
							</div>

							<div className="flex flex-col bg-white border rounded-lg overflow-hidden">
								<a
									href="#"
									className="group h-48 md:h-64 block bg-gray-100 overflow-hidden relative">
									<Image
										src="https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?auto=format&q=75&fit=crop&w=600"
										loading="lazy"
										alt="Photo by Martin Sanchez"
										className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200"
										width={64}
										height={96}
									/>
								</a>

								<div className="flex flex-col flex-1 p-4 sm:p-6">
									<h2 className="text-gray-800 text-lg font-semibold mb-2">
										<a
											href="#"
											className="hover:text-indigo-500 active:text-indigo-600 transition duration-100">
											8 High performance Notebooks
										</a>
									</h2>

									<p className="text-gray-500 mb-8">
										This is a section of some simple filler text, also known as
										placeholder text. It shares some characteristics of a real
										written text.
									</p>

									<div className="flex justify-between items-end mt-auto">
										<div className="flex items-center gap-2">
											<div className="w-10 h-10 shrink-0 bg-gray-100 rounded-full overflow-hidden">
												<Image
													src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&q=75&fit=crop&w=64"
													loading="lazy"
													alt="Photo by Aiony Haust"
													className="w-full h-full object-cover object-center"
													width={64}
													height={96}
												/>
											</div>

											<div>
												<span className="block text-indigo-500">Ann Park</span>
												<span className="block text-gray-400 text-sm">
													January 27, 2021
												</span>
											</div>
										</div>

										<span className="text-gray-500 text-sm border rounded px-2 py-1">
											Article
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Layout>
		</>
	);
};

export default Home;
