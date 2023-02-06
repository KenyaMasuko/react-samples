import type { Todo } from "../types";
import { TodoItem } from "./TodoItem";

type Props = {
	todos: Todo[];
	handleRemove: (id: Todo["id"]) => void;
	handleUpdate: (todo: Todo) => void;
};

export const TodoList: React.FC<Props> = (props) => {
	const { todos, handleRemove, handleUpdate } = props;

	return (
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
					<TodoItem
						key={todo.id}
						todo={todo}
						handleRemove={handleRemove}
						handleUpdate={handleUpdate}
					/>
				))}
			</tbody>
		</table>
	);
};
