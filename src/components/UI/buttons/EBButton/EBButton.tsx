import React from 'react';
import MUIButton from '@mui/material/Button';

import type {TButtonColor} from '../models/button-color.type';
import styles from './EBButton.module.scss';

interface IEBButtonProps {
	color?: TButtonColor,
	children: string,
	onClick: (e: React.MouseEvent<HTMLButtonElement>) => void,
}

const EBButton: React.FC<IEBButtonProps> = ({color = 'secondary', children, onClick}) => {
	return (
		<MUIButton
			className={styles.button}
			color={color}
			variant="contained"
			type={'button'}
			onClick={onClick}
			sx={{
				borderRadius: '17px',
			}}
		>
			{children}
		</MUIButton>
	);
};

export default EBButton;