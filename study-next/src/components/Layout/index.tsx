import { Header } from "@/components/Header";
import Head from "next/head";
import { FC, ReactNode } from "react";
import classes from "@/components/Layout/layout.module.css";

type Props = {
	children: ReactNode;
	title: string;
};

export const Layout: FC<Props> = ({ children, title }) => {
	return (
		<div>
			<Head>
				<title>{title}</title>
			</Head>
			<Header />
			<main className={classes.layout}>{children}</main>
		</div>
	);
};
