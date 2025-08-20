import styles from './ApplicationsContent.module.scss';
import Image from 'next/image';
import Link from 'next/link';

export default function ApplicationsContent() {
	return (
		<>
			<section className={styles.section}>
				<div className="container">
					<div className={styles.wrap}>
						<div className={styles.card}>
							<div className={styles.imgWrap}>
								<Image
									src="/ApplicationsContent/avto.png"
									alt="img"
									className={styles.img}
									width={860}
									height={600}
									// priority='true'
								/>
								<Image
									src="/ApplicationsContent/avto-hover.png"
									alt="img"
									className={styles.img}
									width={860}
									height={600}
									// priority='true'
								/>
							</div>
							<div className={styles.contentCard}>
								<div className={styles.innerContainer}>
									<h4 className={styles.title}>
										Автомобильная
										<br />
										<span> промышленность</span>{' '}
									</h4>
									<div className={styles.text}>
										Экстремальные условия эксплуатации автомобиля  и требования к безопасности участников дорожного движения, заставляют автопроизводителей использовать высококачественные материалы и клеевые решения. Невозможно представить современный автомобиль без применения клейких лент и адгезивов.
									</div>

									<div className={styles.btnWrap}>
										<Link
											href="/applications/automobile-industry"
											className={styles.btn}
										>
											Подробнее
										</Link>
									</div>
								</div>
							</div>
						</div>

						<div className={styles.card}>
							<div className={styles.imgWrap}>
								<Image
									src="/ApplicationsContent/appliances.png"
									alt="img"
									className={styles.img}
									width={860}
									height={600}
									// priority={true}
								/>
								<Image
									src="/ApplicationsContent/appliances-hover.png"
									alt="img"
									className={styles.img}
									width={860}
									height={600}
									// priority={true}
								/>
							</div>
							<div className={styles.contentCard}>
								<div className={styles.innerContainer}>
									<h4 className={styles.title}>
										Производство&nbsp; <br />
										<span>
											техники <br /> и электроники
										</span>
									</h4>
									<div className={styles.text}>
										Двусторонние  клейкие ленты предоставляют широкие возможности для реализации инновационных дизайнерских решений в бытовой технике и электронике. Использование данных материалов позволяет производителям создавать ультратонкие устройства с минималистичным дизайном, где важна каждая деталь.
									</div>

									<div className={styles.btnWrap}>
										<Link
											href="/applications/manufacture-of-household-appliances"
											className={styles.btn}
										>
											Подробнее
										</Link>
									</div>
								</div>
							</div>
						</div>

						<div className={styles.card}>
							<div className={styles.imgWrap}>
								<Image
									src="/ApplicationsContent/furniture.png"
									alt="img"
									className={styles.img}
									width={860}
									height={600}
									// priority={true}
								/>
								<Image
									src="/ApplicationsContent/furniture-hover.png"
									alt="img"
									className={styles.img}
									width={860}
									height={600}
									// priority={true}
								/>
							</div>
							<div className={styles.contentCard}>
								<div className={styles.innerContainer}>
									<h4 className={styles.title}>
										Мебель
										<br />
										<span>и декор</span>
									</h4>
									<div className={styles.text}>
										Двусторонние клейкие ленты открывают новые возможности в мебельном производстве и интерьерном дизайне, обеспечивая надежное крепление элементов с минимальными временными затратами и максимальным эстетическим результатом.
									</div>

									<div className={styles.btnWrap}>
										<Link
											href="/applications/furniture-industry"
											className={styles.btn}
										>
											Подробнее
										</Link>
									</div>
								</div>
							</div>
						</div>
						<div className={styles.card}>
							<div className={styles.imgWrap}>
								<Image
									src="/ApplicationsContent/build.png"
									alt="img"
									className={styles.img}
									width={860}
									height={600}
									// priority={true}
								/>
								<Image
									src="/ApplicationsContent/build-hover.png"
									alt="img"
									className={styles.img}
									width={860}
									height={600}
									// priority={true}
								/>
							</div>
							<div className={styles.contentCard}>
								<div className={styles.innerContainer}>
									<h4 className={styles.title}>
										Строительство <br />
										<span>и ремонт</span>
									</h4>
									<div className={styles.text}>
										Двусторонние клейкие ленты, чувствительные к давлению, широко используются в строительстве и ремонте благодаря их прочности, долговечности и удобству монтажа. Эти материалы обеспечивают надёжное и эффективное решение различных задач, оптимизируя рабочий процесс и улучшая качество конечного результата.
									</div>

									<div className={styles.btnWrap}>
										<Link
											href="/applications/construction-and-renovation"
											className={styles.btn}
										>
											Подробнее
										</Link>
									</div>
								</div>
							</div>
						</div>

						<div className={styles.card}>
							<div className={styles.imgWrap}>
								<Image
									src="/ApplicationsContent/transport.png"
									alt="img"
									className={styles.img}
									width={860}
									height={600}
									// priority={true}
								/>
								<Image
									src="/ApplicationsContent/transport-hover.png"
									alt="img"
									className={styles.img}
									width={860}
									height={600}
									// priority={true}
								/>
							</div>
							<div className={styles.contentCard}>
								<div className={styles.innerContainer}>
									<h4 className={styles.title}>Транспорт</h4>
									<div className={styles.text}>
										В условиях строгих требований к качеству и срокам производства выбор правильных материалов играет решающую роль. Двусторонние клейкие ленты, чувствительные к давлению (Pressure Sensitive Adhesive, PSA — клей, чувствительный к давлению), стали неотъемлемым компонентом при сборке современного транспорта для перевозки людей и грузов, а также транспорта специального назначения.
									</div>

									<div className={styles.btnWrap}>
										<Link href="/applications/transport" className={styles.btn}>
											Подробнее
										</Link>
									</div>
								</div>
							</div>
						</div>

						<div className={styles.card}>
							<div className={styles.imgWrap}>
								<Image
									src="/ApplicationsContent/vending.png"
									alt="img"
									className={styles.img}
									width={860}
									height={600}
									// priority={true}
								/>
								<Image
									src="/ApplicationsContent/vending-hover.png"
									alt="img"
									className={styles.img}
									width={860}
									height={600}
									// priority={true}
								/>
							</div>
							<div className={styles.contentCard}>
								<div className={styles.innerContainer}>
									<h4 className={styles.title}>
										Витрины и торговые <br /> <span>автоматы</span>
									</h4>
									<div className={styles.text}>
										Двусторонние клейкие ленты — универсальное и эффективное решение для производства торгового оборудования, вендинговых автоматов и POS-материалов.<br/><br/>Они обеспечивают прочное и надёжное соединение разнородных материалов, устойчивое к вибрациям и перепадам температур. Применение двусторонних адгезивных лент дает широкие возможности для реализации дизайнерских решений.
									</div>

									<div className={styles.btnWrap}>
										<Link
											href="/applications/showcases-and-vending-machines"
											className={styles.btn}
										>
											Подробнее
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
