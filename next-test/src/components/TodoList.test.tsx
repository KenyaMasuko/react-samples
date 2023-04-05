import { TodoList } from "@/components/TodoList";
import { render } from "@testing-library/react";

test("TodoListをレンダリング", () => {
	const { getByText } = render(<TodoList>テスト</TodoList>);
	expect(getByText("TITLE")).toBeInTheDocument();
	expect(getByText("DONE")).toBeInTheDocument();
	expect(getByText("ACTION")).toBeInTheDocument();
	expect(getByText("テスト")).toBeInTheDocument();
});
