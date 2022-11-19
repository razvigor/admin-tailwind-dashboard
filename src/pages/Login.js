import React from 'react';
import { Formik } from 'formik';
import { useStateContext } from '../contexts/ContextProvider';

const Login = () => {
	const { currentColor, setLogedIn } = useStateContext();
	return (
		<div className='bg-main-bg dark:bg-main-dark-bg w-screen h-full fixed nav-item top-0 right-0 flex justify-center items-center'>
			<div className='w-full md:w-760 h-760 bg-white dark:bg-neutral-700 p-10 md:p-24 rounded-2xl'>
				<h1 className='text-2xl text-center mb-4 text-slate-700 dark:text-slate-200'>
					Log In
				</h1>
				<Formik
					initialValues={{ email: '', password: '' }}
					validate={(values) => {
						const errors = {};
						if (!values.email) {
							errors.email = 'Required';
						} else if (
							!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
						) {
							errors.email = 'Invalid email address';
						} else if (values.email !== 'info@shop.com') {
							errors.email = 'User with this email address does not exist';
						}
						if (!values.password) {
							errors.password = 'Required';
						} else if (values.password !== '123456') {
							errors.password = ' Invalid password';
						}
						return errors;
					}}
					onSubmit={(errors, { setSubmitting }) => {
						setLogedIn(true);
						localStorage.setItem('logedIn', true);
						setSubmitting(false);
					}}
				>
					{({
						values,
						errors,
						handleChange,
						handleSubmit,
						touched,
						isSubmitting,
					}) => (
						<form
							onSubmit={handleSubmit}
							className='flex flex-col items-start gap-4'
						>
							<label
								htmlFor='email'
								className='text-sm text-slate-400 dark:text-slate-200'
							>
								Email:{' '}
							</label>
							<input
								id='email'
								type='email'
								name='email'
								onChange={handleChange}
								value={values.email}
								className='bg-transparent border-solid border-1 border-gray-600 dark:border-gray-200 h-10 rounded-lg text-slate-800 dark:text-slate-200 pl-3 w-full'
							/>
							{errors.email && touched.email && errors.email}
							<label
								htmlFor='password'
								className='text-sm text-slate-400 dark:text-slate-200'
							>
								Password:{' '}
							</label>
							<input
								id='password'
								type='password'
								name='password'
								onChange={handleChange}
								value={values.password}
								autoComplete='current-password'
								className='bg-transparent border-solid border-1 border-gray-600 dark:border-gray-200 h-10 rounded-lg text-slate-800 dark:text-slate-200 pl-3 w-full'
							/>
							{errors.password && touched.password && errors.password}
							<button
								type='submit'
								disabled={isSubmitting}
								className='px-10 py-3 text-white rounded-xl self-end'
								style={{ backgroundColor: currentColor }}
							>
								Login
							</button>
							<p className='text-slate-400 dark:text-slate-200'>Login Data: </p>
							<ul className='text-slate-400 dark:text-slate-200'>
								<li>Email: info@shop.com</li>
								<li>Password: 123456</li>
							</ul>
						</form>
					)}
				</Formik>
			</div>
		</div>
	);
};

export default Login;
