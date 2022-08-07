import React from 'react';
import MUIButton from '@mui/material/Button';

import type {TButtonColor} from '../models/button-color.type';
import styles from './EBSubmitButton.module.scss';

interface IEBSubmitButtonProps {
	color?: TButtonColor,
	children: string,
}

const EBSubmitButton: React.FC<IEBSubmitButtonProps> = ({color = 'secondary', children}) => {
	return (
		<MUIButton
			className={styles.submitButton}
			color={color}
			type={'submit'}
			variant="contained"
			sx={{
				borderRadius: '17px',
			}}
		>
			{children}
		</MUIButton>
	);
};

export default EBSubmitButton;