import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import {
	Ecommerce,
	Orders,
	Calendar,
	Employees,
	Stacked,
	Pyramid,
	Customers,
	Kanban,
	Area,
	Bar,
	Pie,
	Line,
	ColorPicker,
	ColorMapping,
	Editor,
	Financial,
	Login,
} from './pages';
import { useStateContext } from './contexts/ContextProvider';

import './App.css';

function App() {
	const { currentMode, logedIn } = useStateContext();
	console.log(logedIn);

	return (
		<div className={currentMode === 'Light' ? 'light' : 'dark'}>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={logedIn ? <Layout /> : <Login />}>
						<Route index element={<Ecommerce />} />
						<Route path='ecommerce' element={<Ecommerce />} />
						{/* Pages */}
						<Route path='orders' element={<Orders />} />
						<Route path='employees' element={<Employees />} />
						<Route path='customers' element={<Customers />} />
						{/* Apps */}
						<Route path='kanban' element={<Kanban />} />
						<Route path='editor' element={<Editor />} />
						<Route path='calendar' element={<Calendar />} />
						<Route path='color-picker' element={<ColorPicker />} />
						{/* Charts */}
						<Route path='line' element={<Line />} />
						<Route path='area' element={<Area />} />
						<Route path='bar' element={<Bar />} />
						<Route path='pie' element={<Pie />} />
						<Route path='color-mapping' element={<ColorMapping />} />
						<Route path='pyramid' element={<Pyramid />} />
						<Route path='stacked' element={<Stacked />} />
						<Route path='financial' element={<Financial />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
