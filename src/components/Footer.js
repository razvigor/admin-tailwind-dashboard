import React from 'react';

const Footer = () => {
	const year = new Date().getFullYear();
	return (
		<div className='pt-24 pb-10 md:ml-72 dark:bg-main-dark-bg'>
			<p className='dark:text-gray-200  text-gray-700 text-center'>
				{`© ${year} All rights reserved by MyCompany`}
			</p>
		</div>
	);
};

export default Footer;
