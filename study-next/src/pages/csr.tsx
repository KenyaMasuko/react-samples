import { Layout } from "@/components/Layout";
import { sleep } from "@/libs";
import { Task } from "@/types";
import { NextPage } from "next";
import { useEffect, useState } from "react";

const Csr: NextPage = () => {
	// json-placeholderからfetchしたデータを格納するstate
	const [tasks, setTasks] = useState<Task[] | undefined>(undefined);

	useEffect(() => {
		const fetchTodos = async () => {
			try {
				// 3000ms待機
				await sleep(3000);
				// データをfetch
				const res = await fetch(process.env.NEXT_PUBLIC_TASKS);
				if (!res.ok) throw new Error("fetchに失敗しました");
				const json = await res.json();

				// fetchしたデータを格納
				setTasks(json);
			} catch (error: unknown) {
				if (error instanceof Error) {
					console.error(error.message);
				}
			}
		};
		fetchTodos();
	}, []);

	return (
		<Layout title="CSR">
			<ul>
				{tasks?.map((task) => (
					<li key={task.id}>TODO: {task.title}</li>
				))}
			</ul>
		</Layout>
	);
};

export default Csr;
