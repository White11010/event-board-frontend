import React from 'react';
import EBButton from '../../components/UI/buttons/EBButton/EBButton';
import styles from '../../App.module.scss';
import EBTextField from '../../components/UI/inputs/EBTextInput/EBTextField';
import EBSubmitButton from '../../components/UI/buttons/EBSubmitNutton/EBSubmitButton';
import {useForm} from 'react-hook-form';

const Home = () => {
	const onButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		console.log(e);
	};

	const { handleSubmit, control, formState: { errors }, } = useForm({
		defaultValues: {
			name: 'Коля'
		}
	});
	
	const onSubmit = (data: unknown) => console.log(data);

	return (
		<div>
			Home
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
			<form className={styles.testForm} onSubmit={handleSubmit(onSubmit)}>
				<EBTextField
					control={control}
					name={'name'}
					label={'Имя'}
					isError={!!errors?.name}
					rules={{required: 'Это поле является обязательным'}}
					errorMessage={errors.name?.message}
				/>
				<EBSubmitButton>Отправить</EBSubmitButton>
			</form>
		</div>
	);
};

export default Home;