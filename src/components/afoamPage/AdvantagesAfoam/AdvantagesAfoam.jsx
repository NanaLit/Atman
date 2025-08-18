import styles from './AdvantagesAfoam.module.scss';

export default function AdvantagesAfoam() {
	return (
		<section className={styles.section}>
			<div className={styles.container}>
				<div className={styles.wrap}>
					<div className={styles.innerAdvantages}>
						<h3 className={styles.title}>Ассортимент продукции:</h3>
						<div className={styles.grid}>
							<ul className={styles.advantagesList}>
								<li className={styles.advantagesListItem}>
									<div className={styles.advantagesPoint}>
										Двусторонние клейкие ленты на вспененной основе
									</div>
								</li>
								<li className={styles.advantagesListItem}>
									<div className={styles.advantagesPoint}>
										Тонкие двусторонние клейкие ленты
									</div>
								</li>
								<li className={styles.advantagesListItem}>
									<div className={styles.advantagesPoint}>
										Ламинирующие адгезивы
									</div>
								</li>
							</ul>
							<ul>
								<li className={styles.advantagesListItem}>
									<div className={styles.advantagesPoint}>
										Вспененные резины и прокладочные материалы
									</div>
								</li>
								<li className={styles.advantagesListItem}>
									<div className={styles.advantagesPoint}>
										Средства подготовки поверхности
									</div>
								</li>
								<li className={styles.advantagesListItem}>
									<div className={styles.advantagesPoint}>
										Инструмент и вспомогательное оборудование
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
