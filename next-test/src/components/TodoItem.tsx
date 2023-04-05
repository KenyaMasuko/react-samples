import { Todo } from "@/types";

type Props = {
	handleRemove: (id: Todo["id"]) => void;
	handleUpdate: (todo: Todo) => void;
	todo: Todo;
};

export const TodoItem: React.FC<Props> = (props) => {
	const { todo, handleRemove, handleUpdate } = props;

	return (
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
	);
};
