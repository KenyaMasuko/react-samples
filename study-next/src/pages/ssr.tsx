import { Layout } from "@/components/Layout";
import { Task } from "@/types";
import { GetServerSideProps, NextPage } from "next";

type Props = {
	tasks: Task[];
};

const Ssr: NextPage<Props> = ({ tasks }) => {
	return (
		<Layout title="SSR">
			<ul>
				{tasks?.map((task) => (
					<li key={task.id}>TODO: {task.title}</li>
				))}
			</ul>
		</Layout>
	);
};

export const getServerSideProps: GetServerSideProps = async () => {
	console.log("getServerSideProps/ssr invoked");
	const res = await fetch(process.env.NEXT_PUBLIC_TASKS);
	if (!res.ok) throw new Error("fetchに失敗しました");
	const json = await res.json();
	return {
		props: { tasks: json },
	};
};

export default Ssr;
