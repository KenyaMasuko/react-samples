import { FormEvent, ReactElement, useState } from "react";
import "./App.css";
import { TodoForm } from "./components/TodoForm";
import { TodoList } from "./components/TodoList";
import type { Todo } from "./types";

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

	const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
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

			<TodoForm
				handleSubmit={handleSubmit}
				handleReset={handleReset}
				setTitle={setTitle}
				title={title}
				editId={editId}
			/>
			<TodoList
				todos={todos}
				handleRemove={handleRemove}
				handleUpdate={handleUpdate}
			/>
		</div>
	);
}

export default App;
