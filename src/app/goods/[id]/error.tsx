'use client';

import { LOADING_DATA_ERROR } from '@/utils/informMessages';
import cls from './ProductPage.module.scss';

const error = () => {
	return (
		<div>
			<p className={cls.messageContainer}>{LOADING_DATA_ERROR}</p>
		</div>
	);
};

export default error;
