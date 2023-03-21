import { createClient } from "microcms-js-sdk";

export const client = createClient({
	serviceDomain: "study-nextjs-blog",
	apiKey: process.env.BLOG_API_KEY,
});
