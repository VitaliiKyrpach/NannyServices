import { useSelector } from "react-redux";
import { CatalogFilter } from "../../CatalogFilter/CatalogFilter";
// import { CatalogList } from "../../CatalogList/CatalogList";
import { Container } from "../../Container/Container";
import { selectFavorites } from "../../../redux/nanniesSelectors";
import { CatalogList } from "../../CatalogList/CatalogList";

const Favorites = () => {
	const favorites = useSelector(selectFavorites);
	console.log(favorites);
	return (
		<div>
			<Container>
				<CatalogFilter />
				<CatalogList data={favorites} />
			</Container>
		</div>
	);
};

export default Favorites;
