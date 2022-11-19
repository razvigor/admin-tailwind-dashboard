import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();

const initialState = {
	chat: false,
	cart: false,
	userProfile: false,
	notification: false,
};

export const ContextProvider = ({ children }) => {
	const themeFromStorage = localStorage.getItem('themeMode');
	const colorFromStorage = localStorage.getItem('colorMode');
	const logedFromStorage = localStorage.getItem('logedIn');

	const [activeMenu, setActiveMenu] = useState(true);
	const [isClicked, setIsClicked] = useState(initialState);
	const [screenSize, setScreenSize] = useState(undefined);
	const [currentColor, setCurrentColor] = useState(
		colorFromStorage ? colorFromStorage : '#03C9D7'
	);
	const [currentMode, setCurrentMode] = useState(
		themeFromStorage ? themeFromStorage : 'Light'
	);
	const [themeSettings, setThemeSettings] = useState(false);
	const [logedIn, setLogedIn] = useState(
		logedFromStorage ? logedFromStorage : false
	);

	const setMode = (mode) => {
		setCurrentMode(mode.target.value);
		localStorage.setItem('themeMode', mode.target.value);
		setThemeSettings(false);
	};
	const setColor = (color) => {
		setCurrentColor(color);
		localStorage.setItem('colorMode', color);
		setThemeSettings(false);
	};

	const handleClick = (clicked) => {
		setIsClicked({ ...initialState, [clicked]: true });
	};
	const resetHandleClick = () => {
		setIsClicked({ ...initialState });
	};
	const logOut = () => {
		localStorage.removeItem('logedIn');
		setIsClicked(initialState);
		setLogedIn(false);
	};
	return (
		<StateContext.Provider
			value={{
				activeMenu,
				setActiveMenu,
				isClicked,
				setIsClicked,
				handleClick,
				screenSize,
				setScreenSize,
				currentMode,
				currentColor,
				setMode,
				setColor,
				themeSettings,
				setThemeSettings,
				resetHandleClick,
				logedIn,
				setLogedIn,
				logOut,
			}}
		>
			{children}
		</StateContext.Provider>
	);
};

export const useStateContext = () => useContext(StateContext);
