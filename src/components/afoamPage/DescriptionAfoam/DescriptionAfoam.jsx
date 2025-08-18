import styles from './DescriptionAfoam.module.scss';

export default function DescriptionAfoam() {
	return (
		<>
			<section className={styles.section}>
				<div className="container">
					<div className={styles.wrap}>
						<div className={styles.innerWrap}>
							<div className={styles.descr}>
								<strong>Afoam™</strong> - российский бренд, специализирующийся
								на производстве и поставках продукции из двусторонних клейких
								лент, а также других самоклеящихся и несамоклеящихся материалов,
								адаптированных под задачи предприятий, выпускающих конечную
								продукцию или её комплектующие.
								<br />
								<br />
								Мы осуществляем подбор сырья по всему миру с учётом нормативных
								и технологических требований ключевых отраслей —
								автомобилестроения, лёгкой и мебельной промышленности.
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
