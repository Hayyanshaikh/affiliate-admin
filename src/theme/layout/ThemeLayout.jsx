import React from 'react';
import { Outlet } from "react-router-dom";
import Header from '../partials/Header.jsx';
import Footer from '../partials/Footer.jsx';

const ThemeLayout = () => {
	return (
		<div className="theme_layout layout">
			<Header/>
			<main>
				<Outlet />
			</main>
			<Footer/>
		</div>
	)
}

export default ThemeLayout