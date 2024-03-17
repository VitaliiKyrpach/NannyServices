import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Loader } from "./Loader/Loader";
import { Header } from "./Header/Header";

export const Layout = () => {
	return (
		<>
			<Header />
			<main>
				<Suspense fallback={<Loader />}>
					<Outlet />
				</Suspense>
			</main>
		</>
	);
};
