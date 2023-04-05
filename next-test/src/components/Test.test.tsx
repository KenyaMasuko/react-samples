import { Test } from "@/components/Test";
import { render, screen, waitFor } from "@testing-library/react";
import { rest, setupWorker } from "msw";
import { setupServer } from "msw/node";

const handlers = [
	rest.get("https://jsonplaceholder.typicode.com/todos", (req, res, ctx) => {
		return res(
			ctx.status(200),
			ctx.json([
				{
					userId: 1,
					id: 1,
					title: "delectus aut autem",
					completed: false,
				},
			])
		);
	}),
];
const server = setupServer(...handlers);

describe("Testページのテスト", () => {
	beforeAll(() => server.listen());
	afterEach(() => server.resetHandlers());
	afterAll(() => server.close());

	test("Testページのローディング画面をテスト", async () => {
		const { findByText } = render(<Test />);
		expect(await findByText("Loading...")).toBeInTheDocument();
	});

	test("Testページで取得したデータをテスト", async () => {
		const { findByText, queryByText } = render(<Test />);

		expect(await findByText("delectus aut autem")).toBeInTheDocument();
		expect(queryByText("Loading...")).not.toBeInTheDocument();
	});

	test("Testページでエラーが発生した場合のテスト", async () => {
		server.use(
			rest.get(
				"https://jsonplaceholder.typicode.com/todos",
				(req, res, ctx) => {
					return res.once(ctx.status(500), ctx.json({ message: "Error" }));
				}
			)
		);
		const { findByText } = render(<Test />);
		expect(await findByText("Error")).toBeInTheDocument();
		await waitFor(
			() => void expect(screen.getByText("Error")).toBeInTheDocument()
		);
	});
});
