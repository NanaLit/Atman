import React from 'react';
import styles from './AfoamMaterials.module.scss';

export const AfoamMaterials = () => {
	return (
		<section className={styles.section}>
			<div className={styles.container}>
				<div className={styles.wrap}>
					<div className={styles.innerAdvantages}>
						<h3 className={styles.title}>
							Промышленные материалы для рядового потребителя
						</h3>
						<p>
							Энтузиасты и мастера, стремящиеся создавать новое и
							функциональное, должны быть уверены в качестве используемых
							материалов.
							<br />
							<br />
							Только протестированные на промышленных предприятиях решения
							подготавливаются для продажи, частным потребителям, в розничных
							магазинах и на маркетплейсах.
							<br />
							<br /> Эти товары отлично подходят как для профессионального
							использования, так и для бытовых задач: монтаж, ремонт,
							декоративные работы, шумоизоляция и многое другое.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};
