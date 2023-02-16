import { FC, useEffect, useState } from "react";
import { Box, Button, Container, Text, Title } from "@mantine/core";

type Props = { maxCount?: number };
const MAX_COUNT = 10;

const App: FC<Props> = ({ maxCount = MAX_COUNT }) => {
	const [timeLeft, setTimeLeft] = useState(maxCount);

	// timeを1秒づつ減らす
	const tick = () => setTimeLeft((t) => t - 1);
	// timeをMAX_COUNTに戻す
	const reset = () => setTimeLeft(maxCount);

	// 依存配列をいじってみて挙動を確かめてみよう！（可能であれば無限ループを引き起こしてみよう）
	// 1. 依存配列が定義されていない時
	// 2. 依存配列が空の時
	// 3. 依存配列に値を入れた時
	useEffect(() => {
		console.log("timerIdをセット");

		// setIntervalはインターバルを一意に識別するIDをreturnする
		const timerId = setInterval(tick, 1000);

		return () => clearInterval(timerId);
	}, []);

	useEffect(() => {
		console.log("残り時間を判定");

		if (timeLeft === 0) {
			console.log("0秒になりました");
			reset();
		}
	}, [timeLeft, reset]);

	return (
		<Container
			fluid
			p={100}
			className="flex items-center justify-center flex-col">
			<Title size={40}>カウントダウンタイマー</Title>

			<Box
				className="w-2/4 border-2 rounded-lg shadow-md flex flex-col items-center justify-center mt-10"
				p={20}>
				<Text size={30}>Count</Text>
				<Text size={60}>{timeLeft}</Text>
				<Button onClick={reset}>Reset</Button>
			</Box>
		</Container>
	);
};

export default App;
