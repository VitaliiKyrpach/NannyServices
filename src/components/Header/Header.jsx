import { Link } from "react-router-dom";
import { Container } from "../Container/Container";
import css from './Header.module.css'
import { UserNav } from "../UserNav/UserNav";
import { UserBar } from "../UserBar/UserBar";

export const Header = () => {
	return (
		<div className={css.header}>
			<Container>
				<nav className={css.headerWrapper}>
				<Link className={css.logo} to="/">Nanny.Sevices</Link>
				<UserNav/>
				<UserBar/>
				</nav>
			</Container>
		</div>
	);
};
