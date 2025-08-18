import styles from './Afoam.module.scss';
import Link from 'next/link';
import Image from 'next/image';

export default function Afoam() {
	return (
		<>
			<section className={styles.section}>
				<div className="container">
					<div className={styles.wrap}>
						<div className={styles.innerWrap}>
							<div className={styles.afoamTitle}>
								<Image
									className={styles.imgAfoam}
									src="/about/Afoam/afoam.png"
									width={1068}
									height={212}
									alt="Afoam"
									priority={true}
								/>
							</div>
							<h2 className={styles.title}>
								<span>Материалы, которые работают на вас. </span>
								<br />
								Присоединяйтесь к числу производств, которые уже <br /> экономят
								и повышают качество вместе с нами.
							</h2>

							<div className={styles.bottomSide}>
								<div className={styles.linkWrap}>
									<Link href={'/afoam'} className={styles.afoamLink}>
										Узнать больше
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
