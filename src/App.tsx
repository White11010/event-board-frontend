import React from 'react';

import EBButton from './components/UI/buttons/EBButton/EBButton';
import styles from './App.module.scss';

function App() {
	const onButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		console.log(e);
	};

	return (
		<div className={styles.App}>
			<EBButton
				onClick={onButtonClick}
			>
				Button
			</EBButton>
		</div>
	);
}

export default App;

