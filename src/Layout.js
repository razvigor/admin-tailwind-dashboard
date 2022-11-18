import React from 'react';
import { Outlet } from 'react-router-dom';
import {
	Navbar,
	Footer,
	Sidebar,
	ThemeSettings,
	SettingButton,
} from './components';
import { useStateContext } from './contexts/ContextProvider';

const Layout = () => {
	const { activeMenu, themeSettings } = useStateContext();
	return (
		<>
			<div className='flex relative dark:bg-main-dark-bg'>
				{activeMenu ? (
					<div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white'>
						<Sidebar />
					</div>
				) : (
					<div className='w-0 dark:bg-secondary-dark-bg'>
						<Sidebar />
					</div>
				)}
				<div
					className={`dark:bg-main-dark-bg bg-main-bg min-h-screen w-full ${
						activeMenu ? 'md:ml-72' : 'flex-2'
					}`}
				>
					<div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
						<Navbar />
					</div>

					<div>
						{themeSettings && <ThemeSettings />}
						<SettingButton />
					</div>
					<Outlet />
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Layout;
