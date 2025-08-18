'use client';

import GoodsSlider from '../GoodsSlider/GoodsSlider.jsx';
import { Breadcrumbs } from '@/components/Breadcrumbs/Breadcrumbs.tsx';
import styles from './Showcase.module.scss';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import { useState } from 'react';

const Showcase = ({ product }) => {
	const breadcrumbs = [
		{ title: 'Главная', href: '/' },
		{
			title: 'Товары',
			href: '/goods',
		},
		{
			title: `${product.brand} ${product.name}`,
		},
	];
	product.description = product.description.replace(/\\n/g, '<br />');
	return (
		<div className="container">
			<section className={styles.section}>
				<div className={styles.titleContainer}>
					<div className={styles.breadcrumbs}>
						<Breadcrumbs items={breadcrumbs} />
					</div>
					<p className={styles.article}>
						Артикул: <span>{product.article}</span>
					</p>
					<div className={styles.nameContainer}>
						<p className={styles.brand}>{product.brand} </p>
						<h1 className={styles.title}>{product.name}</h1>
					</div>
					<div className={styles.typeContainer}>
						<p className={styles.type}>{product.type}</p>
						<p className={styles.size}>{product.size}</p>
					</div>

					<div className={styles.description}>
						<ReactMarkdown
							rehypePlugins={[rehypeRaw]}
							children={product.description}
						/>
					</div>
				</div>
				<div className={styles.sliderContainer}>
					<GoodsSlider product={product} />
				</div>
			</section>
		</div>
	);
};

export default Showcase;
