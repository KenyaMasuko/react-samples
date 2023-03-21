import { Layout } from "@/components/Layout";
import { Task } from "@/types";
import { GetStaticProps, NextPage } from "next";

export const getStaticProps: GetStaticProps = async () => {
	console.log("getStaticProps/isr invoked");
	const res = await fetch(process.env.NEXT_PUBLIC_TASKS);
	if (!res.ok) throw new Error("fetchに失敗しました");
	const json = await res.json();

	return {
		props: { tasks: json },
		revalidate: 60,
	};
};

type Props = {
	tasks: Task[];
};

const Isr: NextPage<Props> = ({ tasks }) => {
	return (
		<Layout title="ISR">
			<ul>
				{tasks?.map((task) => (
					<li key={task.id}>TODO: {task.title}</li>
				))}
			</ul>
		</Layout>
	);
};

export default Isr;
