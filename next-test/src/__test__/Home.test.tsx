// src/pages/index.tsxのテストを書く

import App from "@/pages";
import { fireEvent, render, screen } from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import userEvent from "@testing-library/user-event";
import { Todo } from "@/types";

const handlers = [
	rest.get("https://jsonplaceholder.typicode.com/todos", (req, res, ctx) => {
		return res(
			ctx.status(200),
			ctx.json([
				{
					id: 1,
					title: "delectus aut autem",
					isDone: false,
				},
			])
		);
	}),
	rest.post<Todo>(
		"https://jsonplaceholder.typicode.com/todos",
		async (req, res, ctx) => {
			const { title } = await req.json();

			return res(
				ctx.status(200),
				ctx.json({
					title,
				})
			);
		}
	),
];
const server = setupServer(...handlers);

describe("home page test", () => {
	beforeAll(() => server.listen());
	afterEach(() => server.resetHandlers());
	afterAll(() => server.close());

	test("should render init screen", () => {
		render(<App />);
		expect(
			screen.getByRole("heading", { level: 1, name: /TODO/ })
		).toBeDefined();
		// フォームが表示されるかテスト
		expect(screen.getByRole("textbox")).toBeDefined();
	});

	test("should render fetched data", async () => {
		render(<App />);
		expect(await screen.findByText("delectus aut autem")).toBeInTheDocument();
	});

	test("should render Not Found: 404", async () => {
		server.use(
			rest.get(
				"https://jsonplaceholder.typicode.com/todos",
				(req, res, ctx) => {
					return res.once(ctx.status(404), ctx.json({ message: "Not Found" }));
				}
			)
		);
		render(<App />);
		expect(await screen.findByText("Not Found")).toBeInTheDocument();
	});

	test("should render Internal Server Error: 500", async () => {
		server.use(
			rest.get(
				"https://jsonplaceholder.typicode.com/todos",
				(req, res, ctx) => {
					return res.once(
						ctx.status(500),
						ctx.json({ message: "Internal Server Error" })
					);
				}
			)
		);
		render(<App />);
		expect(
			await screen.findByText("Internal Server Error")
		).toBeInTheDocument();
	});

	test("add todo item correctly", async () => {
		const user = userEvent.setup();
		render(<App />);
		const input = await screen.getByRole("textbox");
		const button = await screen.getByRole("button", { name: /作成/ });
		await user.type(input, "test");
		await user.click(button);
		expect(await screen.findByText("test")).toBeInTheDocument();
	});

	test("update todo item correctly", async () => {
		const user = userEvent.setup();
		render(<App />);
		const input = await screen.getByRole("textbox");
		const button = await screen.getByRole("button", { name: /作成する/ });
		await user.type(input, "test");
		await user.click(button);
		const editButton = await screen.getAllByRole("button", { name: /更新/ });
		await user.click(editButton[0]);
		const updateInput = await screen.getByRole("textbox");
		const updateButton = await screen.getByRole("button", { name: /更新する/ });
		await user.clear(updateInput);
		await user.type(updateInput, "test update");
		await user.click(updateButton);
		expect(await screen.findByText("test update")).toBeInTheDocument();
	});

	test("delete todo item correctly", async () => {
		const user = userEvent.setup();
		render(<App />);
		const input = await screen.getByRole("textbox");
		const button = await screen.getByRole("button", { name: /作成する/ });
		await user.type(input, "test");
		await user.click(button);
		const deleteButton = await screen.getAllByRole("checkbox");
		await user.click(deleteButton[1]);
		expect(await screen.queryByText("test")).not.toBeInTheDocument();
	});
});
