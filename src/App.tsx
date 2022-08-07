import React from 'react';
import {Route, Routes} from 'react-router';
import {createTheme, ThemeProvider} from '@mui/material/styles';

import styles from './App.module.scss';\
// Route components
import Home from './pages/Home/Home';
import Profile from './pages/Profile/Profile';
import Auth from './pages/Auth/Auth';
import Event from './pages/Event/Event';
import NotFound from './pages/NotFound/NotFound';

const theme = createTheme({
	palette: {
		primary: {
			main: '#83CF86',
			contrastText: '#fff',
			dark: '#4fc050'
		},
		secondary: {
			main: '#FFB257',
			contrastText: '#fff',
			dark: '#ea9631'
		},
	},
});

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<div className={styles.App}>
				<Routes>
					<Route path={'/'} element={<Home />} />
					<Route path={'/profile'} element={<Profile />} />
					<Route path={'/auth'} element={<Auth />} />
					<Route path={'/event/:id'} element={<Event />} />
					<Route path={'*'} element={<NotFound />} />
				</Routes>
			</div>
		</ThemeProvider>
	);
};

export default App;

