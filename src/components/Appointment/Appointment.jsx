/* eslint-disable react/prop-types */
import css from "./Appointment.module.css";
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';

// const pass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/
// min 5 chars, 1 UPcase, 1 LOWcase, 1 digit
const num = /^((\+?3)?8)?((0\(\d{2}\)?)|(\(0\d{2}\))|(0\d{2}))\d{7}$/

const validationSchema = Yup.object().shape({
	address: Yup.string()
	  .min(1, 'Too Short!')
	  .required('Required'),
	phone: Yup.string()
	//   .min(13, 'Too Short!')
	//   .max(13, 'Too Long!')
	.matches(num, {message: 'Please enter a valid number'})
	  .required('Required'),
	childAge: Yup.number()
	  .positive()
	  .integer()
	  .required('Required'),
	email: Yup.string().email('Invalid email').required('Required'),
	parentName: Yup.string()
	  .min(1, 'Too Short!')
	  .required('Required'),
	comment: Yup.string(),
  });

export const Appointment = ({ img, name }) => {
	const handleSubmit =  async(values, { resetForm, setSubmitting }) => {
		console.log(values)
		resetForm();
		// try{
		//   await dispatch(login(values));
		// setTimeout(() => {
		//   toast.success('Login successful!', { position: 'top-right' });
		//   setSubmitting(false);
		//   resetForm();
		// }, 500); 
		
		// } catch (error) {
		//   toast.error('Login failed. Please, try again.', {
		// 	position: 'top-center',
		//   });
		//   setSubmitting(false);
		// }
	
	  };
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
			<Formik
			validationSchema={validationSchema}
			initialValues={{
				address: '',
				phone: '',
				childAge: '',
				date: '',
				email: '',
				parentName: '',
				comment: ''
			}}
			onSubmit={handleSubmit}
			>
				{({errors, touched})=>(
					<Form className={css.form}>
						<div className={css.fieldWrapper}>
						<Field className={`${css.field} ${errors.address && touched.address ? css.error : ''}`} name="address" placeholder="Address" />
						{errors.address && touched.address && <p className={css.textError}>{errors.address}</p>}
						</div>
						<div className={css.fieldWrapper}>
						<Field className={`${css.field} ${errors.phone && touched.phone ? css.error : ''}`} name="phone" type='number' placeholder="+380" />
						{errors.phone && touched.phone && <p className={css.textError}>{errors.phone}</p>}
						</div>
						<div className={css.fieldWrapper}>
						<Field className={`${css.field} ${errors.childAge && touched.childAge ? css.error : ''}`} name="childAge" type='number' placeholder="Child's age" />
						{errors.childAge && touched.childAge && <p className={css.textError}>{errors.childAge}</p>}
						</div>
						<div className={css.fieldWrapper}>
						<Field className={`${css.field} ${errors.date && touched.date ? css.error : ''}`} name="date" placeholder="00:00" />
						{errors.date && touched.date && <p className={css.textError}>{errors.date}</p>}
						</div>
						<div className={`${css.fieldWrapper} ${css.width}`}>
						<Field className={`${css.field}  ${errors.email && touched.email ? css.error : ''}`} name="email" type="email" placeholder="Email" />	
						{errors.email && touched.email && <p className={css.textError}>{errors.email}</p>}
						</div>
						<div className={`${css.fieldWrapper} ${css.width}`}>
						<Field className={`${css.field} ${errors.parentName && touched.parentName ? css.error : ''}`}name="parentName" placeholder="Father's or mother's name" />
						{errors.parentName && touched.parentName && <p className={css.textError}>{errors.parentName}</p>}
						</div>
						<Field className={`${css.field} ${css.comment}`} as='textarea' name="comment" placeholder="Comment" />
						<button className={css.button} type="submit">Send</button>
					</Form>
					)
					
				}
			</Formik>
		</>
	);
};
