import { useEffect } from "react";
import { Container } from "../../Container/Container";
import { CatalogList } from "../../CatalogList/CatalogList";
import { CatalogFilter } from "../../CatalogFilter/CatalogFilter";
import { useDispatch, useSelector } from "react-redux";
import { fetchNannies } from "../../../redux/nanniesOperations";
import { selectNannies } from "../../../redux/nanniesSelectors";

const Catalog = () => {
	const data = useSelector(selectNannies);
	const dispatch = useDispatch();
	console.log(data);
	useEffect(() => {
		dispatch(fetchNannies());
	}, [dispatch]);
	return (
		<div>
			<Container>
				<CatalogFilter />
				<CatalogList data={data} />
			</Container>
		</div>
	);
};

export default Catalog;
