import { FormEvent, ReactElement, useState } from "react";
import "./App.css";

type Todo = {
	id: number;
	title: string;
	isDone: boolean;
};

const DEFAULT_TODOS: Todo[] = [
	{
		id: 1,
		title: "買い物に行く",
		isDone: false,
	},
	{
		id: 2,
		title: "部屋を掃除する",
		isDone: false,
	},
	{
		id: 3,
		title: "夕飯を作る",
		isDone: false,
	},
];

function App(): ReactElement {
	const [todos, setTodos] = useState<Todo[]>(DEFAULT_TODOS);
	const [title, setTitle] = useState("");
	const [editId, setEditId] = useState(0);

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		if (editId !== 0) {
			setTodos((prevTodos) => {
				return prevTodos.map((todo) => {
					if (todo.id === editId) {
						return { ...todo, title };
					}

					return todo;
				});
			});
			setEditId(0);
		} else {
			setTodos((prev) => {
				const newTodo = {
					id: prev.length + 1,
					title,
					isDone: false,
				};

				return [...prev, newTodo];
			});
		}
		setTitle("");
	};

	const handleReset = () => {
		setEditId(0);
		setTitle("");
	};

	const handleUpdate = (todo: Todo) => {
		setEditId(todo.id);
		setTitle(todo.title);
	};

	const handleRemove = (id: Todo["id"]) => {
		setTodos((prevTodos) => {
			return prevTodos.filter((todo) => todo.id !== id);
		});
	};

	return (
		<div className="App">
			<h1>TODOS</h1>
			<form
				onSubmit={handleSubmit}
				onReset={handleReset}
				style={{ display: "flex", alignItems: "center", gap: 10 }}>
				<input
					type="text"
					value={title}
					onChange={(prevState) => setTitle(prevState.currentTarget.value)}
					placeholder="todoを記入..."
					style={{ padding: 10 }}
				/>
				<button type="submit">{editId !== 0 ? "更新" : "作成"}</button>
				<button type="reset">リセット</button>
			</form>
			<table style={{ marginTop: 30 }}>
				<thead>
					<tr>
						<th style={{ textAlignLast: "justify", width: 150 }}>TITLE</th>
						<th style={{ width: 80 }}>DONE</th>
						<th style={{ width: 80 }}>ACTION</th>
					</tr>
				</thead>
				<tbody>
					{todos?.map((todo) => (
						<tr key={todo.id}>
							<td style={{ textAlignLast: "justify" }}>{todo.title}</td>
							<td>
								<input
									type="checkbox"
									checked={todo.isDone}
									onChange={() => handleRemove(todo.id)}
								/>
							</td>
							<td>
								<button onClick={() => handleUpdate(todo)}>更新</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
			<ul></ul>
		</div>
	);
}

export default App;
