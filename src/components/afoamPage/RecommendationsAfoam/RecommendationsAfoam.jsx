import styles from './RecommendationsAfoam.module.scss';
import Link from 'next/link';

export default function RecommendationsAfoam() {
	return (
		<>
			<section className={styles.section}>
				<div className="container">
					<div className={styles.wrap}>
						<div className={styles.content}>
							<h3 className={styles.title}>
								Ближе к&nbsp;
								<span
									style={{
										color: ' #E41F26',
									}}
								>
									клиенту
								</span>
							</h3>
							<p>
								Наша основная задача — сделать производство наших клиентов
								эффективнее.
								<br />
								<br />
								Мы вовлечены в технологические процессы и помогаем подобрать
								оптимальные решения, которые снижают издержки, улучшают внешний
								вид продукции и увеличивают срок её службы.
								<br />
								<br />
								Все материалы, проходят входной контроль качества, а
								производство готовой продукции осуществляется в соответствии с
								требованиями международных стандартов: ISO 9001, ГОСТ Р 58139,
								IATF 16949.
								<br />
								<br />
								<strong>
									Продукция AFOAM™  — это результат инженерной разработки,
									практических испытаний и стремления создать продукт советующий
									требованиям потребителя.
								</strong>
							</p>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
