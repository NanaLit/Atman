'use client';

import { useState, useEffect } from 'react';

import Form from '../Form/Form.jsx';

import styles from './FormButton.module.scss';

const FormButton = () => {
	const [isOpenForm, setIsOpenForm] = useState(false);

	const handleOpenForm = () => {
		setIsOpenForm(true);
	};

	const handleCloseForm = () => {
		setIsOpenForm(false);
	};

	// useEffect(() => {
	// 	if (isOpenForm) {
	// 		document.body.classList.add('no-scroll');
	// 	} else {
	// 		document.body.classList.remove('no-scroll');
	// 	}
	// }, [isOpenForm]);

	return (
		<>
			<button className={styles.button} onClick={handleOpenForm}>
				<div className={styles.buttonText}>Оставить заявку</div>
			</button>
			<Form isOpen={isOpenForm} onClose={handleCloseForm} />
		</>
	);
};

export default FormButton;
