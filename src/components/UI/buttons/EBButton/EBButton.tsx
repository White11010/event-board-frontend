import React from 'react';
import MUIButton from '@mui/material/Button';

interface EBButtonProps {
	children: string,
	onClick: (e: React.MouseEvent<HTMLButtonElement>) => void,
}

const EBButton: React.FC<EBButtonProps> = ({children, onClick}) => {
	return (
		<MUIButton
			variant="contained"
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