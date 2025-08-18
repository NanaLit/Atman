import styles from './WhyСhooseAfoam.module.scss';

export const WhyСhooseAfoam = () => {
	return (
		<section className={styles.section}>
			<div className={styles.container}>
				<div className={styles.wrap}>
					<div className={styles.innerAdvantages}>
						<h3 className={styles.title}>
							Почему выбирают&nbsp;
							<span
								style={{
									color: ' #E41F26',
								}}
							>
								AFOAM
							</span>
						</h3>
						<ul className={styles.advantagesList}>
							<li className={styles.advantagesListItem}>
								<div className={styles.advantagesPoint}>
									Комплексный подход к качеству
									<span>
										Каждая партия сырья проходит входной контроль, а готовая
										продукция соответствует стандартам ISO 9001, ГОСТ Р 58139,
										IATF 16949.
									</span>
								</div>
							</li>
							<li className={styles.advantagesListItem}>
								<div className={styles.advantagesPoint}>
									Оптимальное соотношение цены и качества
									<span>
										Предлагаем материалы, соответствующие требованиям
										промышленности, по оптимальной цене.
									</span>
								</div>
							</li>
							<li className={styles.advantagesListItem}>
								<div className={styles.advantagesPoint}>
									Продукция под задачи клиента
									<span>
										Производим продукцию с учётом специфики технологических
										процессов заказчика.
									</span>
								</div>
							</li>
							<li className={styles.advantagesListItem}>
								<div className={styles.advantagesPoint}>
									Поддержка на всех этапах
									<span>
										Оказываем сопровождение: тестирование, предоставление
										образцов, технические консультации, подбор аналогов.
									</span>
								</div>
							</li>
							<li className={styles.advantagesListItem}>
								<div className={styles.advantagesPoint}>
									Наличие на складах и быстрая логистика
									<span>
										Создаём складской запас под ваш объём потребления и
										управляем поставками.
									</span>
								</div>
							</li>
							<li className={styles.advantagesListItem}>
								<div className={styles.advantagesPoint}>
									Доступность в рознице
									<span>
										Продукция AFOAM представлена не только в промышленном
										сегменте, но и в розничной продаже — для небольших
										производств и частных потребителей.
									</span>
								</div>
							</li>
						</ul>
						<span className={styles.desc}>
							Продукция AFOAM представлена не только в промышленном сегменте, но
							и в розничной продаже <br /> — для небольших производств и частных
							потребителей.
						</span>
					</div>
				</div>
			</div>
		</section>
	);
};
