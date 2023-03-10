import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import img from '../../../assets/404.gif'

const ErrorPage = () => {
	const navigate = useNavigate();
	const backTohome = () => {
		navigate('/')
	}
	setTimeout(backTohome, 6000)

    return (
        <section className="flex items-center h-full p-16 dark:bg-gray-900 dark:text-gray-100">
	<div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
		<div className="max-w-md text-center">
			<img src={img} alt="404 error" />
			<p className="text-2xl font-semibold md:text-3xl">Sorry, we couldn't find this page.</p>
			<p className="mt-4 mb-8 dark:text-gray-400">But dont worry, you can find plenty of other things on our homepage.</p>
			<Link to='/' rel="noopener noreferrer" className="px-8 py-3 font-semibold rounded bg-primary text-white uppercase">Back to homepage
			</Link>
		</div>
	</div>
</section>
    );
};

export default ErrorPage;