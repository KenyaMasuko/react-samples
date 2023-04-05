type Props = {
	handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
	handleReset: () => void;
	setTitle: React.Dispatch<React.SetStateAction<string>>;
	title: string;
	editId: number;
};

export const TodoForm: React.FC<Props> = (props) => {
	const { handleSubmit, handleReset, title, setTitle, editId } = props;

	return (
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
			<button type="submit">{editId !== 0 ? "更新する" : "作成する"}</button>
			<button type="reset">リセット</button>
		</form>
	);
};
