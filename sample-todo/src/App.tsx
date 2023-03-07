import { FormEvent, ReactElement, useEffect, useState } from "react";
import "./App.css";
import { TodoForm } from "./components/TodoForm";
import { TodoList } from "./components/TodoList";
import type { Todo } from "../types";
import { TodoItem } from "./components/TodoItem";

function App(): ReactElement {
	const END_POINT = `http://${import.meta.env.VITE_DB_JSON}/todos`;

	const [error, setError] = useState("");
	const [todos, setTodos] = useState<Todo[]>([]);
	const [title, setTitle] = useState("");
	const [editId, setEditId] = useState(0);

	useEffect(() => {
		getTodos()
			.then((res) => {
				setTodos(res);
			})
			.catch((error: unknown) => {
				if (error instanceof Error) {
					setError(error.message);
					return;
				}
				console.error("不明なエラーです");
			});
	}, []);

	const createTodo = async ({ title }: { title: string }): Promise<Todo> => {
		const newTodo: Todo = {
			id: todos.length + 1,
			title: title,
			isDone: false,
		};

		const res = await fetch(END_POINT, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(newTodo),
		});

		if (!res.ok) {
			throw new Error(res.statusText);
		}

		const json = await res.json();

		return json;
	};

	const getTodos = async (): Promise<Todo[]> => {
		const res = await fetch(END_POINT);
		if (!res.ok) {
			throw new Error(res.statusText);
		}
		return await res.json();
	};

	const handleSubmit = async (
		event: FormEvent<HTMLFormElement>
	): Promise<void> => {
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
			try {
				const todo = await createTodo({ title });
				setTodos((prev) => [...prev, todo]);
			} catch (error: unknown) {
				if (error instanceof Error) {
					setError(error.message);
					return;
				}
				console.error("不明なエラーです");
			}
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

	if (error) return <p>{error}</p>;

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
				handleUpdate={handleUpdate}>
				<>
					{todos?.map((todo) => (
						<TodoItem
							key={todo.id}
							todo={todo}
							handleRemove={handleRemove}
							handleUpdate={handleUpdate}
						/>
					))}
				</>
			</TodoList>
		</div>
	);
}

export default App;
