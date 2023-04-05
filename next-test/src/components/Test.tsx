import React, { useEffect, useState } from "react";

export const Test = () => {
	const [todos, setTodos] = useState<any>([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);

	useEffect(() => {
		// データを取得する
		const fetchData = async () => {
			try {
				const response = await fetch(
					"https://jsonplaceholder.typicode.com/todos"
				);
				if (!response.ok) throw new Error();
				const data = await response.json();
				setLoading(true);
				setTodos(data);
			} catch (error: any) {
				setLoading(true);
				setError(true);

				console.log(error);
			}
		};

		fetchData();
	}, []);
	// データを取得する際に、ローディングを表示する
	if (!loading) return <div>Loading...</div>;

	// データを取得する際に、エラーが発生した場合は、エラーを表示する
	if (error) return <div>Error</div>;
	return (
		<div>
			Todo List
			{todos.map((todo: any) => (
				<div key={todo.id}>{todo.title}</div>
			))}
		</div>
	);
};
