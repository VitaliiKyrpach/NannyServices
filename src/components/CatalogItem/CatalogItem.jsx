/* eslint-disable react/prop-types */
import css from "./CatalogItem.module.css";
import svg from "../../img/sprite.svg";
import { useEffect, useState } from "react";
import { Appointment } from "../Appointment/Appointment";
import { Modal } from "../Modal/Modal";
import { useDispatch, useSelector } from "react-redux";
import { selectFavorites } from "../../redux/nanniesSelectors";
import { addNanny, removeNanny } from "../../redux/nanniesSlice";
export const CatalogItem = ({ data }) => {
	const [isModal, setIsModal] = useState(false);
	const [ismore, setIsmore] = useState(false);
	const [like, setLike] = useState(false);

	const dispatch = useDispatch();
	const favorites = useSelector(selectFavorites);

	const originalDate = new Date(data.birthday);
	const today = new Date();
	const originalYear = originalDate.getFullYear();
	const todayYear = today.getFullYear();
	const differenceInYears = todayYear - originalYear;

	const isLiked =
		!!favorites.length &&
		!!favorites.find((card) => card.id === data.id);

	useEffect(() => {
		isLiked ? setLike(true) : setLike(false);
	}, [isLiked]);

	const showMore = () => {
		setIsmore(!ismore);
	};

	const openModal = () => {
		setIsModal(true);
	};
	const closeModal = () => {
		setIsModal(false);
	};

	const handleLike = () => {
		!isLiked
			? dispatch(addNanny(data))
			: dispatch(removeNanny(data.id));
		setLike(!like);
	};

	const characters = data.characters.join(", ");
	const rating = Math.round(data.rating * 10) / 10;

	return (
		<li className={css.card}>
			<div className={css.techWrapper}>
				<ul className={css.techlist}>
					<li className={css.techItem}>
						<svg className={css.pin}>
							<use href={`${svg}#icon-mapPin`}></use>
						</svg>
						{data.location}
					</li>
					<li className={css.techItem}>
						<svg className={css.star}>
							<use href={`${svg}#icon-star`}></use>
						</svg>
						Rating: {rating}
					</li>
					<li className={css.techItem}>
						Price / 1 hour:{" "}
						<span className={css.price}>{data.price_per_hour}$</span>
					</li>
				</ul>
				<svg className={css.heart} onClick={handleLike}>
					{like ? (
						<use href={`${svg}#icon-heart-active`}></use>
					) : (
						<use href={`${svg}#icon-heart`}></use>
					)}
				</svg>
			</div>
			<div className={css.imgWrapper}>
				<div className={css.online}></div>
				<img
					className={css.avatar}
					src={data.avatar_url}
					alt="avatar"
				/>
			</div>
			<div>
				<div className={css.nameWrapper}>
					<p>Nanny</p>
					<h2 className={css.name}>{data.name}</h2>
				</div>
				<ul className={css.infoWrapper}>
					<li className={css.infoItem}>
						Age:{" "}
						<span className={`${css.underline} ${css.black}`}>
							{differenceInYears}
						</span>
					</li>
					<li className={css.infoItem}>
						Experience:{" "}
						<span className={css.black}>{data.experience}</span>
					</li>
					<li className={css.infoItem}>
						Kids Age:{" "}
						<span className={css.black}>{data.kids_age}</span>
					</li>
					<li className={css.infoItem}>
						Characters:{" "}
						<span className={css.black}>{characters}</span>
					</li>
					<li className={css.infoItem}>
						Education:{" "}
						<span className={css.black}>{data.education}</span>
					</li>
				</ul>
				<p className={css.about}>{data.about}</p>
				{!ismore && (
					<button
						className={css.more}
						type="button"
						onClick={showMore}
					>
						Read more
					</button>
				)}
				{ismore && (
					<div className={css.reviews}>
						<ul className={css.reviewsList}>
							{data.reviews.map((item, index) => (
								<li key={index}>
									<div className={css.revWrapper}>
										<div className={css.nameLogo}>
											{item.reviewer.charAt(0)}
										</div>
										<div>
											<p className={css.revName}>{item.reviewer}</p>
											<p className={css.ratingWrapper}>
												<svg className={css.star}>
													<use href={`${svg}#icon-star`}></use>
												</svg>{" "}
												<span className={css.rating}>{rating}</span>
											</p>
										</div>
									</div>
									<p className={css.comment}>{item.comment}</p>
								</li>
							))}
						</ul>
						<button
							className={css.appointment}
							type="button"
							onClick={openModal}
						>
							Make an appointment
						</button>
					</div>
				)}
			</div>
			{isModal && (
				<Modal closeModal={closeModal}>
					<Appointment img={data.avatar_url} name={data.name} />
				</Modal>
			)}
		</li>
	);
};
