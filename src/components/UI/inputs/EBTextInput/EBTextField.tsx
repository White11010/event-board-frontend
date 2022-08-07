import React from 'react';
import MUITextField from '@mui/material/TextField';
import {Controller} from 'react-hook-form';
import {ThemeProvider} from '@mui/material/styles';

import styles from './EBTextField.module.scss';
import {inputTheme} from '../themes/input.theme';

interface IEBTextFieldProps {
	label: string,
	name: string,
	/* eslint-disable @typescript-eslint/no-explicit-any */
	control: any,
	isError?: boolean,
	errorMessage?: string,
	rules?: any,
}

const EBTextField: React.FC<IEBTextFieldProps> = ({
	label,
	name,
	control,
	isError = false,
	errorMessage = ' ',
	rules = {}
}) => {
	return (
		<ThemeProvider theme={inputTheme}>
			<Controller
				name={name}
				control={control}
				rules={rules}
				render={({field: {onChange, value}}) => (
					<MUITextField
						className={styles.textField}
						value={value}
						onChange={onChange}
						label={label}
						variant={'filled'}
						error={isError}
						helperText={errorMessage}
					/>
				)}
			/>
		</ThemeProvider>
	);
};

export default EBTextField;