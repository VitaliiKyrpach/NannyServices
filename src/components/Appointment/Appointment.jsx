/* eslint-disable react/prop-types */
import css from "./Appointment.module.css";
export const Appointment = ({ img, name }) => {
	return (
		<>
			<h3 className={css.title}>
				Make an appointment with a babysitter
			</h3>
			<p className={css.description}>
				Arranging a meeting with a caregiver for your child is the
				first step to creating a safe and comfortable environment.
				Fill out the form below so we can match you with the perfect
				care partner.
			</p>
			<div className={css.nameWrapper}>
				<img className={css.img} src={img} alt="avatar" />
				<div>
					<p className={css.nany}>Your nanny</p>
					<p>{name}</p>
				</div>
			</div>
		</>
	);
};
