import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { FC, ReactNode } from "react";

type Props = {
	children: ReactNode;
};
export const Layout: FC<Props> = ({ children }) => {
	return (
		<>
			<Header />
			<main>{children}</main>
			<Footer />
		</>
	);
};
