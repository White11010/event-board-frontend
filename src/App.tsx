import React from 'react';

import EBButton from './components/UI/buttons/EBButton/EBButton';
import styles from './App.module.scss';

function App() {
	const onButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		console.log(e);
		console.log('hui');
	};

	return (
		<div className={styles.App}>
			<EBButton
				onClick={onButtonClick}
			>
				knopka nahui
			</EBButton>
		</div>
	);
}

export default App;
