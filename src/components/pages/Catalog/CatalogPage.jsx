import { useEffect } from "react";
import { fetchData } from "../../../firebase/fetch";

const Catalog = () => {
	useEffect(() => {
		fetchData();
	}, []);
	return <div>CatalogPage</div>;
};

export default Catalog;
