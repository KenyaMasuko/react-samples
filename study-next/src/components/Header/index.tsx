import Link from "next/link";
import classes from "@/components/Header/header.module.css";

export const Header = () => {
	return (
		<header className={classes.header}>
			<nav>
				<ul className={classes.list}>
					<li>
						<Link href="/csr" prefetch={false}>
							CSR
						</Link>
					</li>
					<li>
						<Link href="/ssr" prefetch={false}>
							SSR
						</Link>
					</li>
					<li>
						<Link href="/isr" prefetch={false}>
							ISR
						</Link>
					</li>
					<li>
						<Link href="/ssg" prefetch={false}>
							SSG
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};
