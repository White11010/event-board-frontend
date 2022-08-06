import React from 'react';
import MUIButton from '@mui/material/Button';

type TButtonColor = 'primary' | 'secondary';

interface IEBButtonProps {
	color?: TButtonColor,
	children: string,
	onClick: (e: React.MouseEvent<HTMLButtonElement>) => void,
}

const EBButton: React.FC<IEBButtonProps> = ({color = 'secondary', children, onClick}) => {
	return (
		<MUIButton
			color={color}
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