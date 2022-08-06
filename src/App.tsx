import React from 'react';
import {createTheme, ThemeProvider} from '@mui/material/styles';

import EBButton from './components/UI/buttons/EBButton/EBButton';
import styles from './App.module.scss';

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
	const onButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		console.log(e);
	};

	return (
		<ThemeProvider theme={theme}>
			<div className={styles.App}>
				<EBButton
					color='primary'
					onClick={onButtonClick}
				>
					Primary
				</EBButton>
				<EBButton
					color='secondary'
					onClick={onButtonClick}
				>
					Secondary
				</EBButton>
			</div>
		</ThemeProvider>
	);
};

export default App;

