import { ReactNode } from "react";

export const TodoList = ({ children }: { children: ReactNode }) => {
	return (
		<table style={{ marginTop: 30 }}>
			<thead>
				<tr>
					<th style={{ textAlignLast: "justify", width: 150 }}>TITLE</th>
					<th style={{ width: 80 }}>DONE</th>
					<th style={{ width: 80 }}>ACTION</th>
				</tr>
			</thead>
			<tbody>{children}</tbody>
		</table>
	);
};
