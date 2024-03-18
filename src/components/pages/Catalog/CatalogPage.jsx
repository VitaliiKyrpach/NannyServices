import { useEffect } from "react";
import { fetchData } from "../../../firebase/fetch";
import { Container } from "../../Container/Container";

const Catalog = () => {
	useEffect(() => {
		fetchData();
	}, []);
	return <div>
		<Container>
			<div>CatalogPage</div>
		</Container>
		</div>;
};

export default Catalog;
