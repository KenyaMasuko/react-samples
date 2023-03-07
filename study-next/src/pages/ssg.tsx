import { Layout } from "@/components/Layout";
import { Task } from "@/types";
import { GetStaticProps, NextPage } from "next";

export const getStaticProps: GetStaticProps = async () => {
	console.log("getStaticProps/ssg invoked");

	const res = await fetch(process.env.NEXT_PUBLIC_TASKS);
	const tasks = await res.json();

	return {
		props: { tasks },
	};
};

type Props = {
	tasks: Task[];
};

const Ssg: NextPage<Props> = ({ tasks }) => {
	return (
		<Layout title="SSG">
			<ul>
				{tasks?.map((task) => (
					<li key={task.id}>TODO: {task.title}</li>
				))}
			</ul>
		</Layout>
	);
};

export default Ssg;
